import Food from "./Food";
import Macaron from "./Macaron"; //자동으로 생성됨 (안써지면 알아서 써주기)
import cakes from "./cakes.json"; //왜 안되 json은 알아서 적어야됨

//App컴포넌트안에 Macaron컴포넌트를 집어넣는다(Macaron컴포넌트를 호출하기위해)
// 해당 컴포넌트이름을 <이름/> 이렇게 해서 넣어줘야 한다.
function App() {
  return (
    <>
    <div className="app">안녕하세요</div>
    {cakes.map(cake => (//cakes에 .map을 이용해서 배열을 cake에 넣어준다
    <Macaron 
      propsid={cake.id}
      propsname={cake.name}
      propsimage={cake.images} 
      /> 
      ))}

    { <Food 
    propsName={"I Love 김치"} //propsName:택배회사
    propsName2={"Me Too"} 
    propsmail={"adsad@naver.com"} 
    />}
    </> 
    //jsx문법에서 무조건 안으로 div또는 <></>이걸로 묶어줘야 한다
  );
}
export default App;
