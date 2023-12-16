import React, { useState, useEffect, useRef } from 'react';

const MapSearch = () => {
  const [markers, setMarkers] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [places, setPlaces] = useState([]);
  const mapContainer = useRef(null);
  const [kakaoMap, setKakaoMap] = useState(null); // Kakao Map을 상태로 관리

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
        setKakaoMap(newKakaoMap); // Kakao Map 상태 업데이트
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
      showMarkers(data);
      displayPlaces(data); // 검색 결과를 목록으로 표시하는 함수 호출
    } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
      alert('검색 결과가 존재하지 않습니다.');
    } else if (status === window.kakao.maps.services.Status.ERROR) {
      alert('검색 중 오류가 발생했습니다.');
    }
  };

  const showMarkers = (data) => {
    setMarkers([]);

    data.forEach((position) => {
      const marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(position.y, position.x),
        map: kakaoMap // kakaoMap 상태 사용
      });

      setMarkers((prevMarkers) => [...prevMarkers, marker]);

      window.kakao.maps.event.addListener(marker, 'click', () => {
        const content = `<div style="padding:5px;z-index:1;">${position.place_name}</div>`;
        const infowindow = new window.kakao.maps.InfoWindow({ content });
        infowindow.open(kakaoMap, marker);
      });
    });
  };

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
          <h5>${place.place_name}</h5>
          <span>${place.road_address_name || place.address_name}</span>
          <span class="tel">${place.phone}</span>
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
      <div ref={mapContainer} style={{ width: '100%', height: '400px' }}></div>
      <div id="menu_wrap" className="bg_white">
        <div className="option">
          <div>
            <form onSubmit={handleSubmit}>
              키워드 : <input type="text" value={keyword} onChange={handleKeywordChange} size="15" />
              <button type="submit">검색하기</button>
            </form>
          </div>
        </div>
        <hr />
        <ul id="placesList"></ul>
        <div id="pagination"></div>
      </div>
    </div>
  );
};

export default MapSearch;
