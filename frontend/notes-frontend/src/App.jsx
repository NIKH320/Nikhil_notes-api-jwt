import { useState } from "react";
import Auth from "./componenets/Auth";
import Notes from "./componenets/Notes";





function App(){
    const[isLoggedIn,setIsLoggedIn] = useState(
      !!localStorage.getItem("token")
    );

   

    return(
      <div className="app">
        <h1>Notes app</h1>
         
         {!isLoggedIn? (<Auth onAuthSuccess={()=> setIsLoggedIn(true)}/>)
         : (
            
              <Notes onLogout={()=> setIsLoggedIn(false)} />
          )
          }

          
          
          
      </div>
    );
}

export default App