// 클래스형 컴퍼넌트
import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import Movie from '../components/Movie';
import '../styles/Home.css';

function Home() {
  // state = {
  //   isLoading: true,
  //   movies: [],
  // } 이거 대신에 함수형으로 바꾸면 밑에서처럼 useState()라는 훅함수를 사용해준다!!

  const [isLoading, setIsLoading] = useState(true);
  const [movies,setMovies] = useState([]);

// componentDidMount() {
//   // setTimeout(() => { //6초지나면 isLoading을 flase로 바꿔라
//   //   this.setState({isLoading:false});
//   // }, 6000);
//   this.getMovies();
// } 밑에서처럼 바꾸준다

useEffect(() =>{
  getMovies();
}, []);

  const getMovies = async () => { //async 비동기식 함수다 //변수를 붙여준다
    const { //콘솔찍어보면 datat속성안에 data속성안에 movies라는 배열이 있다.
      data : {
        data : {
          movies // movies배열 데이터를 가져옴
        }
      }
    } =
    await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count') //get방식은 주소창에 노출
    console.log(movies);
    // this.setState({
    //     isLoading: false, //false로 바꿔준다  //클래스형 컴포넌트 방식 이제는 있는 setIsLoading 함수가 isLoading: false으로 바꿔준다 
    //     movies, //movies: movies, //속성:이름이 동일하면 하나만 써준다  //내가가져온 데이터를 넣어준다 //이제는 setMovies(movies);이렇게
    // }) 
    setIsLoading(false);
    setMovies(movies); 
  }

    // const {isLoading, movies} = this.state;//구조 분해 할당 // 더이상 필요없다 왜냐하면 usetState에서 지정한 값을 바로 갖다 쓰면 된다 
    return (

        <section className='container'>
          {isLoading ? //true냐
          <div className='loader'>
            <span className='loader_text'>'Loading...'</span>
          </div>
          ://그렇지 않으면 클론뒤를 실행해라
          <div className='movies'>
            {movies.map((movie,index) => <Movie 
                                            key={index}
                                            id={movie.id}
                                            year={movie.year}
                                            title={movie.title}
                                            summary={movie.summary}
                                            poster={movie.medium_cover_image}
                                            genres={movie.genres}
                                          />)}
          </div>
          }
        </section>
    )
}

export default Home;


