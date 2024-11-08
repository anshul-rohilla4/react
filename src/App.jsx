import Greet from "./components/test01/Greet";
import MainPage from "./components/test02/MainPage";
import WelcomeMsg from "./components/test03/WelcomeMsg";


const App=()=>{

  return (<>
    <Greet name="anshul" />
    <MainPage/>
    <WelcomeMsg/>

  </>);
};

export default App;