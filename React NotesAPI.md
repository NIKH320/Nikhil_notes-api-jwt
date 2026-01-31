“JavaScript is the language. Node.js allows JavaScript to run on servers. Express simplifies backend development. React manages frontend UI, and Next.js makes React production-ready.”



### **"React re-renders only when state changes"**



1.........



npm create vite@latest notes-frontend   - Create React app

npm install - Install dependencies

npm run dev = start React





src/

 ├── App.jsx        ← main component

 ├── main.jsx       ← entry point

 └── index.css



main.jsx → starts React



App.jsx → your UI lives here













2....



A React component is just a JavaScript function that returns UI.



Example:



function App() {

  return <h1>Hello React</h1>

}





JSX (Why HTML inside JS?)  - return <h1>Hello</h1>

is JSX, not HTML.



JSX = syntax that lets you write UI inside JS.



Why?

Because UI = logic + data.







3.......



Problem React Solves

UI must change when data changes.



In vanilla JS:

You manually update DOM



In React:

You update state

React updates UI



const \[count, setCount] = useState(0);



Means:



count → current value

setCount → function to update it

0 → initial value

React watches count.

When it changes → UI updates.









<button onClick={function}>



is React’s version of:  addEventListener("click")















4.........



Parent owns data

Child owns action





##### **“In React, parents pass callback functions as props. Children invoke these callbacks to request state changes in the parent.”**







Example: Parent → Child → Parent (Addition)

Goal:



Parent has a number

Child adds 2

Parent updates number







**Parent Component (App.jsx):**



import { useState } from "react";

import AddTwo from "./AddTwo";



function App() {

  const \[result, setResult] = useState(0);



  return (

    <div>

      <h1>Result: {result}</h1>



      <AddTwo onAdd={() => setResult(result + 2)} />

    </div>

  );

}



export default App;





**Child Component (AddTwo.jsx):**



function AddTwo({ onAdd }) {

  return (

    <button onClick={onAdd}>

      Add 2

    </button>

  );

}



export default AddTwo;





###### **This exact logic works for OnLogin function in component Login**







* setMessage("Login successful") \& <p>You are logged in 🎉</p>  are two different UIs controlled by two different components.

   State belongs to the component that declares it

    message state → belongs to Login.jsx

   IsLoggedIn state → belongs to App.jsx



{message \&\& <p>{message}</p>}   This line controls this UI inside Login.jsx:

What this line actually means: “Only show this paragraph IF message is not empty.”



* Props = data or functions passed from a parent component to a child component.



   function greet(name) {

        console.log("Hello", name);

     }



   greet("Nikhil");

 

   name is a parameter

  "Nikhil" is the value passed

👉 Props are parameters for React components













#### **5.......**



* "body: JSON.stringify({ email, password })" — what does this mean?

     This line means:

    “Convert my JavaScript object into JSON text and send it to the backend.”



     HTTP requests cannot send JavaScript objects.  They can only send text.

* In React:

   Writing <Login />  Is the same as calling Login() function













#### **6......**



* Notes Component:  ✅ Fetch notes from backend
* ✅ Send JWT token in headers
* ✅ Display notes list
* ✅ Add new notes
* ✅ Delete notes
* ✅ Logout user





1. Component - Notes.jsx   -  useEffect “Run fetchNotes() once when Notes component loads.” This replaces: window.onload
2. using usestate for every variable along with its function to change state
3. Fetching APIs from backend to do the work
4. Headers ka dhyan rakhna hai for JWT tokens and after every api call, change state of something
5. Last me prop ko wapas call krna taaki parent ka state change ho sake

 

