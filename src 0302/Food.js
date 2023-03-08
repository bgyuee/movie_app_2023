import React from 'react'

// function Food(props) {
//   console.log(props); //파라미터에 입력된다 매개변수안에 객체가 들어가 있다
//   return (
//     <div>Food {props.propsName}, {props.propsName2}, {props.propsmail}</div> //props의 속성값을 내보내라
//   )
// }

// function Food(props) { //구조분해할당1
//   console.log(props);
//   const {propsName,propsName2} = props; //가져와서 분해를 해서 이름만으로 바로 쓸수있따
//   return (
//     <div>Food {propsName}, {propsName2}</div> //props의 속성값을 내보내라
//   )
// }

function Food({propsName,propsName2}) { //구조분해할당2 처음부터 분해해서 받겠다
  return (
    <div>Food {propsName}, {propsName2}</div> //props의 속성값을 내보내라
  )
}

export default Food