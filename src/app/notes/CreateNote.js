"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CreateNote() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");

    const router = useRouter();
    
    const create = async () => {
        const res = await fetch("http://http://127.0.0.1:8090/api/collections/notes/records", {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({
               title,
               content,
                date
              })   
        });
        setContent('');
        setTitle('');
        setDate('');


        router.refresh();

        return(
            <form onSubmit={create}>
                <h3> Create a new TODO</h3>
                <input
                    type="text"
                    placeholder="Title" 
                    value={title}   
                    onChange={(e) => setTitle(e.target.value)}
                />  
                <input
                    type="text"
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <input type="date" 
                placeholder="add date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                />
                <button type="submit">Create</button>
            </form>
        );
    };
}

