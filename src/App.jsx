import Greet from "./components/test01/Greet";
import MainPage from "./components/test02/MainPage";
import WelcomeMsg from "./components/test03/WelcomeMsg";
import Test04 from "./components/test04/Test04";
import List00 from "./components/List00";
import Test05 from "./components/test05/Test05";
const App=()=>{

  return (<>
    <Greet name="anshul" />
    <MainPage/>
    <WelcomeMsg/>
    <Test04/>
    <List00/>
    <Test05/>

  </>);
};

export default App;