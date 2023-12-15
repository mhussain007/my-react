import React, { useState } from "react";

function Login(){
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[userError, setUserError] = useState(false);
    const[passError, setPassError] = useState(false);


    function submitData(e){
        e.preventDefault();
    }
    function validateUserData(e){
        let item = e.target.value.length;
        if(item < 3)
        {   
            setUserError(true);
        }
        else{
            setUserError(false);
        }
    }

    function validatePassData(e){
        let item = e.target.value.length;
        if(item < 3)
        {   
            setPassError(true);
        }
        else{
            setPassError(false);
        }
    }

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={submitData}>
                <input type="text" placeholder="Enter username" onChange={validateUserData}/>
                {userError ? <span>Value Too Short</span> : ""}
                <br /><br />
                <input type="text" placeholder="Enter Pass" onChange={validatePassData}/>
                {passError ? <span>Value Too Short</span> : ""}
                <br /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Login;