

// //This componenet is Just for reference

// import { useState } from "react";

// function Login({ onLogin}) {

//     const[email,setEmail] = useState("");
//     const[password,setPassword] = useState("");
//     const[message,setMessage] = useState("");


//     async function handleLogin(e) {

//         e.preventDefault();

//         const res = await fetch("http://localhost:3000/login" , {
//            method:"POST",
//            headers:{"Content-Type": "application/json"},
//            body:JSON.stringify({email,password})

//         });
        

//         const data = await res.json();

//          if (!data.success) {
//           setMessage(data.message);
//           return;
//         }

//         localStorage.setItem("token",data.data.token);
//         setMessage("Login successful");

//         onLogin(); // tell App we are logged in

//     }

//     return(

//         <div>
//             <h2>Login</h2>

//             <form onSubmit={handleLogin}>
                     
//                <input 
//                  placeholder="email"
//                  value={email}
//                  onChange={(e) => setEmail(e.target.value)} />

//                 <input 
//                 type="password"
//                 placeholder="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}/>

//               <button type="submit">Login</button>
//             </form>

//           {message && <p>{message}</p>}

//         </div>
//     );

// }

// export default Login;