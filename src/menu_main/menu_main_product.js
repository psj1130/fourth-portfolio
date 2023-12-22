// import React, { useState } from "react";
// import { useParams } from "react-router";
// import Drink from "./drink/drink";
// import Food from "./food/food";

// function Menu_main_product (){
//   const {product} = useParams()
//   console.log(product);
//   const [menu ,setMenu] = useState(product)

//   return(
//     <>
//       <div id="menu_header_DFM">
//         <a href="/product/drink" className="DFM_div_style" style={product === "drink" ? {color: "black", backgroundColor: "white"} : {}}>음료</a>
//         <a href="/product/food" className="DFM_div_style" style={product === "food" ? {color: "white", backgroundColor:"gray"} : {}}>푸드</a>
//         <a href="/product/md" className="DFM_div_style" style={product === "md" ? {color: "black",backgroundColor:"white"} : {}}>MD</a>
//       </div>
//       {product === "drink" ? <Drink/>: ""}
//       {product === "food" ? <Food/>: ""}
//       {/* {product === "md" ? <Md/>: ""} */}
//     </>
//   )
// }

// export default Menu_main_product;