import React from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/Detail.css'

// 주소창에 전달되는 프랍스를 받을라면은 useLocation()이라는 함수를 써야된다
function Detail() {
  const location = useLocation(); //로케이션객체를 가져온다
  console.log(location);
  const {genres,poster,summary,title,year} = location.state;
  // 데이터를 구조분해 할당으로 받아와서 밑에처럼 다시 뿌려준다 loacation객체에 기본적으로 state라는 속성이 있어서 state를 써준다.

  return (
    <div className='detail'>
    <img src={poster} alt={title} title={title} />
    <div className='detail_data'>
      <h3 className='detail_title' style={{backgroundColor:'#eee'}}>{title}</h3>
      <h4 className='detail_year'>{year}</h4>
      <ul className='detail_genres'>
        {genres.map((genre,index) => {
          return ( //리턴문으로 다시 반환해줘야한다
          <li className='detail_genre' key={index}>{genre}</li>
          )
          })}
      </ul>
      <p className='detail_summary'>{summary.slice(0,180)} ...</p>
    </div>
  </div>
  )
}

export default Detail