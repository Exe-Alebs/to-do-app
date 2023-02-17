import Link from "next/link"; 
import CreateNote from "./CreateNote";
import styles from "./notes.module.css";

function Note({ note }) {
    return (
        <div className={styles.card}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <p>{note.date}</p>
            <Link href={`/notes/${note.id}`}>
                View
            </Link>
        </div>
    )
}

async function getNotes() {

const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records')
const data = await res.json();
return data;

}
export default  async function NotesPage() {
    const notes = await getNotes();
    console.log (notes);
    return (
    <div>
        <h1>Notes</h1>
        <div className={styles.grid}>
            {notes.items.map((note) => (
                <Note key={note.id} note={note.title} />  
            ))}      
               <div>
                     <CreateNote />
               </div> 

        </div>
    </div>
    )
}


