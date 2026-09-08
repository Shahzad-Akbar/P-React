import PropDrill2 from "./propdrill2";

function PropDrill({name, age}){
    
    return<>
    <h1>From Subparent</h1>
    <PropDrill2 name={name} age={age} />
    </>
}

export default PropDrill;