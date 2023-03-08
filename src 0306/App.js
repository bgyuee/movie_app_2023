// 클래스형 컴퍼넌트
import axios from 'axios';
import React, { Component } from 'react'
import Movie from './Movie';
import './App.css';
import './Home.css';

export class App extends Component {
  state = {
    isLoading: true,
    movies: [],
  }
componentDidMount() {
  // setTimeout(() => { //6초지나면 isLoading을 flase로 바꿔라
  //   this.setState({isLoading:false});
  // }, 6000);
  this.getMovies();
}

  getMovies = async () => { //async 비동기식 함수다
    const { //콘솔찍어보면 datat속성안에 data속성안에 movies라는 배열이 있다.
      data : {
        data : {
          movies // movies배열 데이터를 가져옴
        }
      }
    } =
    await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count')
    console.log(movies);
    this.setState({
        isLoading: false, //false로 바꿔준다
        movies, //movies: movies, //속성:이름이 동일하면 하나만 써준다  //내가가져온 데이터를 넣어준다
    })
    
  }

  render() {
    const {isLoading, movies} = this.state;//구조 분해 할당
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
}

export default App


