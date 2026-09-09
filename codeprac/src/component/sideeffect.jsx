import { useEffect, useReducer } from "react";

function SideEffect() {
    const initialstate = { data: null, loading: true };


    async function FetchUrlData() {
        try {
            const response = await fetch("https://api.github.com/users/hadley/orgs");
            const result = await response.json();
            if (result) {
                dispatch({ type: "fetch", payload: result })
            }

        } catch (err) {
            console.log("Error:", err);
        }

    }

    useEffect(() => {
        const timer = setTimeout(()=>{
            FetchUrlData();
        },5000)
        return ()=> clearTimeout(timer)
    }, []);

    function reducer(state, action) {
        switch (action.type) {
            case 'fetch':
                return { data: action.payload, loading: false }
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, initialstate);

    if (state.loading) {
      return <div>Loading...</div>
    }

    return (<>
        <div>{state.data?.map((dat) => {
            return <div key={dat.id}>{dat.login}</div>
        })}</div>
    </>)
}

export default SideEffect;