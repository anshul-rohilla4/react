import Greet from "./components/test01/Greet";
import MainPage from "./components/test02/MainPage";
import WelcomeMsg from "./components/test03/WelcomeMsg";
import Test04 from "./components/test04/Test04";


const App=()=>{

  return (<>
    <Greet name="anshul" />
    <MainPage/>
    <WelcomeMsg/>
    <Test04/>

  </>);
};

export default App;