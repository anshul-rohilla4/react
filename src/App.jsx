import Greet from "./components/test01/Greet";
import MainPage from "./components/test02/MainPage";
import WelcomeMsg from "./components/test03/WelcomeMsg";
import Test04 from "./components/test04/Test04";
import List00 from "./components/List00";
import Test05 from "./components/test05/Test05";
import Cart00 from "./components/Cart00";
import Test06 from "./components/test06/Test06";



const App=()=>{


  return (<>
    <Greet name="anshul" />
    <MainPage/>
    <WelcomeMsg/>
    <Test04/>
    <List00/>
    <Test05/>

    <User name="anshul3r"  
    age={19}
    hobbies={['gaming','sleeping']}
    />{/*props*/}

    <Cart00/>
    <Test06/>

  </>);
};


// child class,props taken from parent class ie. App
// const User=(props)=>{ 
//   return(
//   <section>
//     {console.log(props)} 
//     <h2>Name:{props.name}</h2>
//     <h3>Hobbies: {props.hobbies}</h3>
//     </section>
// )}


// props destructuring
const User=({name,age,hobbies})=>{ 

  return(
  <section>
    {console.log(name)} 
    <h2>Name:{name}</h2>
    <h3>Hobbies: {hobbies}</h3>
    </section>
)}

export default App;