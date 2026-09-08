import Counter from "./component/classcounter.jsx"
import Lists from "./component/lists.jsx"

function App() {

  const number = [2,3,4,5,6,7,8,9];
  return (
    <>
     <h2>Hello Shahzad!</h2>
     <Counter />
     <Lists props={number}/>
    </>
  )
}

export default App
