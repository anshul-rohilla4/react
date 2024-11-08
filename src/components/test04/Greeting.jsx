const msg="hello, this a greeting msg";
var date = Date();
const user="anshul"
function Greeting() {
  return (<>
    <h1>{msg}</h1>
    <p>today is {date}</p>
    {/* <p>hello {user}</p> */}

  </>)
}

export default Greeting