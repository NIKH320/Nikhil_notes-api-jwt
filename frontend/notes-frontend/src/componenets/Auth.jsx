import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";



function Auth({ onAuthSuccess}){
  const navigate = useNavigate();
  const location = useLocation();

    const isSignup = location.pathname === "/signup";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");


    async function handleSubmit(e) {

        e.preventDefault();

        const url = isSignup
                    ?"http://localhost:3000/signup"
                    : "http://localhost:3000/login";

        const res = await fetch(url, {

            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({email,password})
        });

        const data = await res.json();


          if (!data.success && !isSignup) {
             setMessage(data.message);
             return;
           }


           if(isSignup){
              setMessage("Signup successful. Please login.");
              navigate("/login");
              return;
           }

           localStorage.setItem("token",data.data.token);
           onAuthSuccess();
           navigate("/notes");
    }


    return(
        <div className="auth-box">
            <h2>{isSignup?"SignUp":"Login"}</h2>

            <form onSubmit={handleSubmit}>

                <input 
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
                  
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>

                   <button type="submit">
                     {isSignup ? "Signup" : "Login"}
                   </button>

            </form>

         {message && <p className="message">{message}</p>}
    
          <p className="toggle" onClick={()=> navigate(isSignup?"/login":"/signup")}>
            {
                isSignup
                  ? "Already have an account? Login"
                  : "New user? Signup"
            }

          </p>


        </div>
    );


}

export default Auth;