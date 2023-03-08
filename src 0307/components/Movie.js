import React from 'react';
import PropTypes from 'prop-types'; //PropType을 모듈이름으로 쓰겟다
import '../styles/Movie.css';
import { Link } from 'react-router-dom';

function Movie({genres,id,poster,summary,title,year}) { //rfce함수형 컴포넌트
  // console.log(props);
  // const {genres,id,poster,summary,title,year} = props;
  return (
    <div className='movie'>
      <Link to={'/detail'} state={{genres,id,poster,summary,title,year}}>
      <img src={poster} alt={title} title={title} />
      <div className='movie_data'>
        <h3 className='movie_title' style={{backgroundColor:'#eee'}}>{title}</h3>
        <h4 className='movie_year'>{year}</h4>
        <ul className='movie_genres'>
          {genres.map((genre,index) => {
            return ( //리턴문으로 다시 반환해줘야한다
            <li className='movie_genre' key={index}>{genre}</li>
            )
            })}
        </ul>
        <p className='movie_summary'>{summary.slice(0,180)} ...</p>
      </div>
      </Link>
    </div>
  )
}


//npm install prop-types
Movie.propTypes = { //Movie컴포넌트에 propTypes이라는 새로운 이름의 속성을 만들어줌
  genres : PropTypes.arrayOf(PropTypes.string).isRequired, //arrayOf(): 문자열을 원소로 가지고있는 배열일경우
  id : PropTypes.number.isRequired, //isRequired 반드시 값이 들어가 있어야한다
  poster : PropTypes.string.isRequired, 
  summary : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  year : PropTypes.number.isRequired
}

export default Movie