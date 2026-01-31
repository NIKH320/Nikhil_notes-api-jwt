import { useEffect, useState } from "react";

function Notes({onLogout}){
    const [notes,setNotes] = useState([]);
    const [newNote,setNewNote] = useState("");
    const [message,setMessage] = useState("");

    const token = localStorage.getItem("token");

    //Fetching Notes when this page loads
    useEffect( ()=>{
        fetchNotes();
    },[]);




    //Displaying Notes
    async function fetchNotes() {
        
        const res = await fetch("http://localhost:3000/notes",{
            headers:{
                Authorization: token
            }
        });

         //  TOKEN INVALID OR EXPIRED
        if (res.status === 401) {
            localStorage.removeItem("token");
            onLogout();
             return;
          }

        const data = await res.json();

         if (!data.success) {
            setMessage(data.message);
            return;
          }

        setNotes(data.data);
    }



    //Adding a new note
    async function addNote() {
        
          if(!newNote) return;

          const res = await fetch("http://localhost:3000/notes", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                Authorization: token

            },
            body: JSON.stringify({ note: newNote })
          });

          const data = await res.json();
          setMessage(data.message);
          setNewNote("");
          fetchNotes();

    }


    //Deletion
    async function deleteNote(id) {
        
        const res = await fetch(`http://localhost:3000/notes/${id}`,{

            method:"DELETE",
            headers:{
                Authorization: token

            }
        });

        const data = await res.json();
        setMessage(data.message);
        fetchNotes();
    }


    //Logout
    function logout(){
        localStorage.removeItem("token");
        onLogout();
    }



    return(

        <div>
            <h2>Your Notes</h2>

            <input 
            placeholder="new_note"
            value={newNote}
            onChange={ (e)=> setNewNote(e.target.value)}
             />

             <button onClick={addNote}>Add Note</button>
             {message && <p>{message}</p>}
             
              
              
            <ul>
                {notes.map((note) => (
                  <li key={note._id}>
                  {note.text}
                  <button onClick={() => deleteNote(note._id)}>❌</button>
                  </li>
               ))}
           </ul>

           <button onClick={logout}>Logout</button>
        </div>

    );
}

export default Notes;