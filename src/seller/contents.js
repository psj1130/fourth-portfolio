import React from "react";
import styled from "styled-components";
import "./contents.css";
import { useState, useEffect, useRef } from "react";
const StyledDiv = styled.div`
  div {
    height: auto;
    
    

  }
`;

const Middle = (props) => {
  const review = props.rdata.reviewResult
  const imgurl = props.rdata.menuResult.img_url.split(',');
  console.log(imgurl[2])
  const [count, setCount] = useState(0);
  const [rating, setRating] = useState(review[0]?.score || null);
  const fetchRatingFromDatabase = () => {
    const fetchedRating = props.rdata.reviewResult[0]?.score;
    setRating(fetchedRating || null);
  };
  const averageScore =
    review.length > 0
      ? review.reduce((total, a) => total + (a.score || 0), 0) / review.length
      : 0;

  useEffect(() => {
    fetchRatingFromDatabase();
  }, []);

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "star filled" : "star"}>
          &#9733;
        </span>
      );
    }

    return stars;
  };
  const Plus = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const Minus = () => {
    if (count == 0) {
      return;
    }
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <StyledDiv>
      <div id="a">
        <h3>상품정보</h3>
        <div>
            <div>
              <table id="contable">
                <tr>
                  <td id="contd1" colSpan={1}>상품번호</td>
                  <td id="contd2" colSpan={1}><b>{props.rdata.menuResult.code}</b></td>
                  <td id="contd1">상품상태</td>
                  <td id="contd2">신상품</td>
                </tr>
                
                <tr>
                  <td id="contd1">원산지</td>
                  <td id="contd3" colSpan={3}>국산</td>
                </tr>
                <tr>
                  <td id="contdp" colSpan={4} >상품정보 관련 문의사항은 <span><b>Q&A</b></span>에 남겨주세요</td>
                </tr>
                <tr>
                  <td id="contd1">유효기간</td>
                  <td id="contd2">구매일로부터 366일</td>
                  <td id="contd1">사용장소</td>
                  <td id="contd2">브랜드별 상이</td>
                </tr>
                <tr>
                  <td id="contd1">발행처</td>
                  <td id="contd2">{"("}주{")"}한국페이즈서비스</td>
                  <td id="contd1">연락처</td>
                  <td id="contd2">1644-5368</td>
                </tr>
                <tr>
                 <td id="contdp1"></td>
                </tr>
                <tr>
                <td id="contd1">영수증발급</td>
                  <td id="contd3" colSpan={3}>불가</td>
                </tr>
                <tr>
                <td id="contd1">A/S 안내</td>
                  <td id="contd3" colSpan={3}><button id="conbtn">상세정보 확인</button></td>
                </tr>
                <tr>
                   <td colSpan={4}><img id="proimg" src={imgurl[1]}/></td> 
                </tr>
                <tr>
                  <td id="contdp2"><b>상품정보 제공고시</b></td>
                </tr>
                <tr>
                  <td id="contd1">발행자</td>
                  <td id="contd3" colSpan={3}>{"("}주{")"}한국페이즈서비스</td>
                </tr>
                <tr>
                <td id="contd1">유효기간,이용조건</td>
                  <td id="contd3" colSpan={3}>
                    상품교환권은 최초 유효기간366일, 상품금액권은 금액권최초 유효기간366일입니다. 유효기간 연장은 1회{"("}93일{")"}이상 가능하며,신청기간은 최대 5년까지가능{"("}고객센터를 통해 신청 가능{")"}
                  </td>
                </tr>
                <tr>
                  <td id="contd1">이용가능 매장</td>
                  <td id="contd3" colSpan={3}>브랜드별 상이</td>
                </tr>
                <tr>
                  <td id="contd1">환불조건 및 방법</td>
                  <td id="contd3" colSpan={3}>1.미사용 상품교환권{"("}구매가격 기준{")"}:최초 유효기간 경과 전 100% 환불, 경과 후 90% 환불 2.미사용 금액권 {"("}구매가격 기준{")"}:최초 유효기간 경과 전 100%환불,경과 후 90% 환불</td>
                </tr>
                <tr>
                <td id="contd1">소비자 상담 관련 전화 번호</td>
                  <td id="contd3" colSpan={3}><button id="conbtn">상세정보 확인</button></td>
                </tr>
                
              </table>
            </div>
            <table id="contable">
                <tr>
                  <td id="contdp2"><b>거래조건에 관한 정보</b></td>
                </tr>
                <tr>
                  <td id="contd10" colSpan={2}>재화등의 배송방법에 관한 정보 </td>
                  <td id="contd30" colSpan={3}>배송상품 아님</td>
                </tr>
                <tr>
                  <td id="contd10" colSpan={2}>주문 이후 예상되는 배송기간 </td>
                  <td id="contd30" colSpan={3}>배송상품 아님</td>
                </tr>
                <tr>
                  <td id="contd10" colSpan={2}>제품하자·오배송 등에 따른 청약철회 등의 경우 청약철회 등의 기한 및 통신판매업자가 부담하는 반품비용 등에 관한 정보 </td>
                  <td id="contd30" colSpan={3}>상품상세 참조</td>
                </tr>
                <tr>
                  <td id="contd10" colSpan={2}>제품하자가 아닌 소비자의 단순변심에 따른 청약철회 시 소비자가 부담하는 반품비용 등에 관한 정보 </td>
                  <td id="contd30" colSpan={3}>배송상품 아님</td>
                </tr>
                <tr>
                  <td id="contd10" colSpan={2}>제품하자가 아닌 소비자의 단순변심에 따른 청약철회가 불가능한 경우 그 구체적 사유와 근거 </td>
                  <td id="contd30" colSpan={3}>상품상세 참조</td>
                </tr>
                <tr>
                  <td id="contd10" colSpan={2}>재화등의 교환·반품·보증 조건 및 품질보증기준 </td>
                  <td id="contd30" colSpan={3}>상품상세 참조</td>
                </tr>
                <tr>
                  <td id="contd10" colSpan={2}>재화등의 A/S 관련 전화번호 </td>
                  <td id="contd30" colSpan={3}><button id="conbtn">상세정보 확인</button></td>
                </tr>
                <tr>
                  <td id="contd10" colSpan={2}>대금을 환불받기 위한 방법과 환불이 지연될 경우 지연배상금을 지급받을 수 있다는 지연배상금 지급의 구체적인 조건·절차 </td>
                  <td id="contd30" colSpan={3}>상품상세 참조</td>
                </tr>
                <tr>
                  <td id="contd10" colSpan={2}>소비자피해보상의 처리, 재화등에 대한 불만 처리 및 소비자와 사업자 사이의 분쟁처리에 관한 사항</td>
                  <td id="contd30" colSpan={3}>상품상세 참조</td>
                </tr>
                <tr>
                  <td id="contd10" colSpan={2}>거래에 관한 약관의 내용 또는 확인할 수 있는 방법 </td>
                  <td id="contd30" colSpan={3}>상품상세 페이지 및 페이지 하단의 이용약관 링크를 통해 확인할 수 있습니다.</td>
                </tr>
                
            </table>
          </div>
      </div>
      <div id="b">
        <div id="proborder">
          <h3 id="proreview">상품리뷰</h3>
          <p style={{color:"#a797ba"}}>상품을 구매하신 분들이 작성하신 리뷰입니다. 리뷰 작성시 아래 금액만큼 포인트가 적립됩니다.</p>
          <p id="prop1">텍스트리뷰:<span id="prospan1">50원</span><span id="prospan"> 포토/동영상 리뷰: <span id="prospan1">150원</span></span></p>
        </div>
          <h3 id="proh1">리뷰{review.length}건</h3>
        <div id="prodiv">
        {review.map((a) => (
          <div key={a.id} id="cphotoreview">
            <div>
              <div>
                <div className="star-rating">
                  {renderStars()} {rating}
                </div>
              </div>
              <p>
                {a.user.name}*
                <span style={{ fontSize: "10px" }}>{a.createAt}</span>
              </p>
              <p>{a.body}</p>
            </div>
            <div>
              <img id="creviewimg" src={a.img_url} alt="빈칸" />
            </div>
          </div>
        ))}
        </div>
      </div>
      <div id="c">
        <h2 id="proreview">Q&A</h2>
          <p style={{color:"#a797ba"}}>구매하시려는 상품에 대해 궁금한 점이 있으신 경우 문의해주세요.<a href="#">'판매자 톡톡문의'</a>를 통해 판매자와 간편하게 1:1 상담도 가능합니다.</p>
          <div id="proborder"> 
            <button id="probtn1" >상품 Q&A 작성하기</button>
            <button id="probtn2">나의 Q&A 조회{">"}</button>
          </div>
          <div id="prodiv1">
          </div>
      </div>
      <div id="d">
        <h3 id="proborder">반품/교환정보</h3>
        <div>           
          <table id="contable">
            <tr>
              <td colSpan={4} id="protdp3">
                <p><b>이디야 구매하기 반품/교환 안내</b></p>
                <p id="prop5">반품 시 먼저 판매자와 연락하셔서 반품사유, 택배사, 배송비, 반품지 주소 등을 협의하신 후 반품상품을 발송해 주시기 바랍니다.</p>
              </td>
            </tr>
            <tr >
              <td rowSpan={2} id="protd4">반품/교환 사유에 따른 요청 가능기간</td>
              <td colSpan={3} style={{paddingLeft:"20px",fontSize:"10px"}}>구매자 단순 변심은 상품 수령 후 7일 이내{"("}구매자 반품배송시 부담{")"}</td>
            </tr>
            <tr>
              <td id="probor"  colSpan={3} >표시/광고와 상이, 계약 내용과 다르게 이행된 경우 상품 수령 후 3개월 이내 혹은 표시/광고와 다른 사실을 안 날로부터 30일 이내 <span style={{color:"#a797ba"}}>{"("}구매자 반품배송비 부담{")"}</span>
              <p> 들 중 하나 경과 시 반품/교환 불가</p>
             </td>
            </tr>
            <tr>
              <td id="protd5"> 반품/교환 불가능 사유</td>
              <td id="protdpa"  colSpan={3} >
                <p><b>1.</b>반품요청기간이 지난 경우</p>
                <p><b>2.</b>구매자의 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우<span style={{color:"#a797ba"}}>{"("}단, 상품의 내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외{")"}</span></p>
                <p><b>3.</b>구매자의 책임있는 사유로 포장이 훼손되어 상품 가치가 현저히 상실된 경우<span style={{color:"#a797ba"}}>{"("}예: 식품, 화장품, 향수류, 음반 등{")"}</span></p>
                <p><b>4.</b>구매자의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우<span style={{color:"#a797ba"}}>(라벨이 떨어진 의류 또는 태그가 떨어진 명품관 상품인 경우)</span></p>
                <p><b>5.</b>시간의 경과에 의하여 재판매가 곤란할 정도로 상품 등의 가치가 현저히 감소한 경우</p>
                <p><b>6.</b>고객의 요청사항에 맞춰 제작에 들어가는 맞춤제작상품의 경우<span style={{color:"#a797ba"}}>(판매자에게 회복불가능한 손해가 예상되고, 그러한 예정으로 청약철회권 행사가 불가하다는 사실을 서면 동의 받은 경우)</span></p>
                <p><b>7.</b>복제가 가능한 상품 등의 포장을 훼손한 경우<span style={{color:"#a797ba"}}>(CD/DVD/GAME/도서의 경우 포장 개봉 시)</span></p>
              </td>
            </tr>
            <tr>
              <td id="promargin" colSpan={4}><b>판매자정보</b> <button id="conbtn">상세정보 확인</button> </td>
            </tr>
            <tr>
              <td id="contd1" >상호명</td>
              <td id="contd2" >주식회사 한국페이즈서비스(사업자 / 법인 사용자)</td>
              <td id="contd1">대표자</td>
              <td id="contd2">3조</td>
            </tr>
          </table>
          <p id="prop2"><b>주의사항</b></p>
          <ul id="prop4">
            
            <li id="prop3">전자상거래 등에서의 소비자보호에 관한 법률에 의한 반품규정이 판매자가 지정한 반품 조건보다 우선합니다.</li>
            <li>전자상거래 등에서의 소비자보호에 관한 법률에 의거하여 미성년자가 물품을 구매하는 경우, 법정대리인이 동의하지 않으면 미성년자 본인 또는 법정대리인이 구매를 취소할 수 있습니다.</li>
            <li>전기용품 및 생활용품 안전관리법 및 어린이제품 안전 특별법 규정에 의한 안전관리대상 품목인 전기용품, 생활용품, 어린이제품을 판매 또는 구매하실 경우에는 해당 제품이 안전인증, 안전확인, 공급자적합성확인, 안전기준준수 적용 제품인지 확인하시기 바랍니다.</li>
            <li>네이버의 결제시스템을 이용하지 않고 판매자와 직접 거래하실 경우 상품을 받지 못하거나 구매한 상품과 상이한 상품을 받는 등 피해가 발생할 수 있으니 유의하시기 바랍니다.</li>
            <li id="problack">네이버에 등록된 판매상품과 상품의 내용은 판매자가 등록한 것으로 네이버㈜는 등록된 내용에 대하여 일체의 책임을 지지 않습니다.</li>
          </ul>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Middle;