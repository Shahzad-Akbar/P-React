const withAuth = (Component)=>{
    const isAuthanticated = true;
    return function(props){
        if(isAuthanticated){
            return <Component {...props}/>
        }else{
            return <div>Please Login...</div>
        }
    }
}

export default withAuth;