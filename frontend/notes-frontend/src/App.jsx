import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./componenets/Auth";
import Notes from "./componenets/Notes";


function App(){
    const[isLoggedIn,setIsLoggedIn] = useState(
      !!localStorage.getItem("token")
    );

   

    return(
      <div className="app">
        <h1>Notes app</h1>
         
        
        <Routes>
           
           <Route
             path="/"
             element = {<Navigate to = {isLoggedIn?"/notes":"/login"}/>}
           />

           <Route
             path="/login"
             element =  {<Auth onAuthSuccess = {()=> setIsLoggedIn(true)}/>}
           />
  

          <Route
          path="/signup"
           element =  {<Auth onAuthSuccess = {()=> setIsLoggedIn(true)}/>}
          />

          <Route
           path="/notes"
           element={
            isLoggedIn ?(<Notes onLogout={()=> setIsLoggedIn(false)}/>):
            (<Navigate to = "/login"/>)
           }
          />


        </Routes>
      </div>
    );
}

export default App