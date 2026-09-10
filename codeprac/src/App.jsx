import Counter from "./component/cimport Counter from "
import Lists from "./component/lists.jsx"
import useFetch from "./component/datafetcher.jsx";
import PropDrill from "./component/propdrilling.jsx";
import ContextUser from "./component/contextuse.jsx";
import ContextExample from "./component/context.jsx";
import AgeUpdate from "./component/contextsethandle.jsx";
import ReducerHook from "./component/usereducer.jsx";
import SideEffect from "./component/sideeffect.jsx";
import UseRefExample from "./component/userefexample.jsx";


function App() {
  const [datas, loading] = useFetch("https://api.github.com/users/hadley/orgs");
 
  const number = [2,3,4,5,6,7,8,9];

  if(loading){
    <div>Loading...</div>
  }


  return (
    <>
     <h2>Hello Shahzad!</h2>
     --------------------------------------------------------
     <Counter />
     <br />
     --------------------------------------------------------
     <Lists props={number}/>
     --------------------------------------------------------
     <div>{datas?.map((data)=>{return <div key={data.id}>{data.login}</div>})}</div>
     --------------------------------------------------------
     <PropDrill name={"Shahzad"} age={20} />
     --------------------------------------------------------
     <ContextExample>
      <ContextUser/>
      <AgeUpdate />
      </ContextExample>
     --------------------------------------------------------
     <br />
     <ReducerHook/>

     <br />
     --------------------------------------------------------
     <SideEffect/>
     --------------------------------------------------------
     <UseRefExample/>
     
    </>
  )
}
export default App
