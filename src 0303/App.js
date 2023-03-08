// 클래스형 컴퍼넌트
import React, { Component } from 'react'
import Cake from "./Cake";

export class App extends Component {
  constructor(props) {
    super(props);
    console.log(`constructor함수는 클래스형 컴포넌트가 생성할때 호출됨`);
  }

  componentDidMount() {
    console.log('componentDidMount함수는 컴포넌트가 처음 화면에 그려지면 실행되는 함수');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate함수는 화면이 새로 그려지면 즉 업데이트 되면 실행된는 함수');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount함수는 컴포넌트가 죽을때 실행되는 함수');
  }
  
  state = {
    count: 0,
    sum: 0,
    avg: 0,
  }

  add = () => {
    console.log(`더하기`);
    //this.state.count = 1;
    // this.setState({count:1}); //setState:다시렌더함수를 실행시켜라
    // this.setState({count:this.state.count +1});
    this.setState(current => (//current는 this.state(파라미터에 기존의 속성값이 들어온다)
      {
        count: current.count +1,
        sum: current.sum +2,
        avg: current.avg +3,
      }
    )
      
    )
  }
  minus = () => {
    console.log(`빼기`);
    // this.state.count = -1;
    // this.setState({count:-1});
    this.setState({count:this.state.count -1});
  }

  render() {
    return (
      <>
        <div>
          <h1>현재 숫자는 {this.state.count}입니다</h1>
          <button onClick={this.add}>더하기</button>
          <button onClick={this.minus}>빼기</button>
        </div>
        <Cake />
      </>
    )
  }
}

export default App


