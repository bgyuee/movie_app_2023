// //클래스형 컴포넌트 //rce //렌더함수가 있다
// import React, { Component } from 'react'

// export class Macaron extends Component {
//   render() {
//     return (
//       <div>Macaron</div>
//     )
//   }
// }

// export default Macaron

//함수형 컴포넌트 //rfce
import React from 'react'

// function Macaron(props) { 
//   console.log(props);
//   return (
//     <div>
//       <h1>No.{props.propsid} </h1>
//       <h2>Name:{props.propsname}</h2>
//       <img src={props.propsimage} alt='' />
//     </div>
//   )
// }

// function Macaron(props) { //하나의 객체로 속성들을 받고
//   console.log(props);
//   const {propsid, propsname, propsimage} = props; //속성을 분리하고 더 간단하게 이름으로만 사용하겠다
//   return (
//     <div>
//       <h1>No. {propsid}</h1>
//       <h2>Name: {propsname}</h2>
//       <img src={propsimage} alt="" />
//     </div>
//   )
// }

function Macaron({propsid, propsname, propsimage}) { //처음부터 객체를 받을때 부터 분리해서 받겠다
  return (
    <div>
      <h1>No. {propsid}</h1>
      <h2>Name: {propsname}</h2>
      <img src={propsimage} alt="" />
    </div>
  )
}
export default Macaron
