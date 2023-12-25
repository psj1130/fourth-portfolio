import React, { useState, useEffect, useRef } from 'react';
import './mapSearch.css';

const MapSearch = () => {
  const [markers, setMarkers] = useState([]);
  const [keyword, setKeyword] = useState('이디야 커피랩');
  const [places, setPlaces] = useState([]);
  const mapContainer = useRef(null);
  const [kakaoMap, setKakaoMap] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=b9af15b0476acfb8e621c5d13246de00&libraries=services`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const mapOptions = {
          center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
          level: 3
        };
        const newKakaoMap = new window.kakao.maps.Map(mapContainer.current, mapOptions);
        setKakaoMap(newKakaoMap);
      });
    };

    return () => {
      // 필요한 경우 마운트 해제 시 스크립트 및 리소스 정리
    };
  }, []);

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchPlaces();
  };

  const searchPlaces = () => {
    if (keyword.length >= 3) {
      const ps = new window.kakao.maps.services.Places();
      ps.keywordSearch(keyword, searchPlacesCB);
    } else {
      alert('키워드를 3글자 이상 입력하세요.');
    }
  };

  const searchPlacesCB = (data, status, pagination) => {
    if (status === window.kakao.maps.services.Status.OK) {
      setPlaces(data);
      removeAllMarkers();
      showMarkers(data);
      displayPlaces(data);
    } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
      alert('검색 결과가 존재하지 않습니다.');
    } else if (status === window.kakao.maps.services.Status.ERROR) {
      alert('검색 중 오류가 발생했습니다.');
    }
  };

  const removeAllMarkers = () => {
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    setMarkers([]);
  };
// 
const showMarkers = (data) => {
  removeAllMarkers(); // Remove existing markers

  const newMarkers = data.map((position, index) => {
    const markerImage = new window.kakao.maps.MarkerImage(
      'https://www.ediya.com/images/customer/store_position.png',
      new window.kakao.maps.Size(40, 40),
      {
        offset: new window.kakao.maps.Point(20, 40),
        zIndex: 1
      }
    );

    const marker = new window.kakao.maps.Marker({
      position: new window.kakao.maps.LatLng(position.y, position.x),
      map: kakaoMap,
      image: markerImage,
      zIndex: 2 // Set zIndex to a higher value for the new markers
    });

    window.kakao.maps.event.addListener(marker, 'click', () => {
      const content = `<div style="padding:5px;z-index:1;">${position.place_name}</div>`;
      const infowindow = new window.kakao.maps.InfoWindow({ content });
      infowindow.open(kakaoMap, marker);
    });

    return marker;
  });

  setMarkers(newMarkers);
};

  // 
  const displayPlaces = (places) => {
    const listEl = document.getElementById('placesList');
    const menuEl = document.getElementById('menu_wrap');
    const bounds = new window.kakao.maps.LatLngBounds();
    const fragment = document.createDocumentFragment();

    removeAllChildNodes(listEl);

    places.forEach((place, index) => {
      const placePosition = new window.kakao.maps.LatLng(place.y, place.x);
      const marker = new window.kakao.maps.Marker({
        position: placePosition,
        map: kakaoMap
      });

      bounds.extend(placePosition);

      window.kakao.maps.event.addListener(marker, 'click', () => {
        const content = `<div style="padding:5px;z-index:1;">${place.place_name}</div>`;
        const infowindow = new window.kakao.maps.InfoWindow({ content });
        infowindow.open(kakaoMap, marker);
      });

      const itemEl = document.createElement('li');
      itemEl.innerHTML = `
        <span class="markerbg marker_${index + 1}"></span>
        <div class="info">
          <h5>
            <div id=info_logo_img_E>
              <img id=info_logo_img_E_img src='./mapimg/logo_img_E.png'></img>
              <div id=info_logo_a>
                ${place.place_name}
                <div id='info_logo_b'>
                  <span>${place.road_address_name || place.address_name}</span>
                </div>
                <div id='info_logo_c'>
                  <span class="tel">${place.phone}</span>
                </div>
              </div>
            </div>
          </h5>
          
        </div>
      `;
      
      itemEl.className = 'item';

      itemEl.addEventListener('mouseover', () => {
        window.kakao.maps.event.trigger(marker, 'click');
      });
      

      fragment.appendChild(itemEl);
    });

    listEl.appendChild(fragment);
    menuEl.scrollTop = 0;

    kakaoMap.setBounds(bounds);
  };

  const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };

  return (
    <div className="map_wrap">
      <div ref={mapContainer} style={{ width: '1200px', height: '500px' }}></div>
        <div id="menu_wrap" className="bg_white">
          <div className="option">
            <div id='st_name'>
              <form id='st_form_a' onSubmit={handleSubmit}>
                <div id='st_form_b'>
                  <span><div id='st_img_a'><img src="images/logo/top_logo.gif"/></div><p id='st_p'>매장명</p></span>
                </div>
                <div id='st_form_c'>
                  <input id='st_form_d' type="text" value={keyword} onChange={handleKeywordChange} size="15" />
                  <button id='st_form_e' type="submit"><img src='./mapimg/mir_add.jpg'></img></button>
                </div>
              </form>
            </div>
          </div>
          <div id='st_detail'>
            <ul>
              <li id="placesList"></li>
            </ul>
            <div id="pagination"></div>
          </div>
      </div>
    </div>
  );
};

export default MapSearch;
