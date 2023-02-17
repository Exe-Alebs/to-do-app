import styles from '../Notes.module.css';

async function getNote() {
  const  data = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${id}`,
    {
      next: { revalidate: 10 },
    }
  );
  const res = await data.json();
  return res;
}

export default async function NotePage({ params }) {
  const note = await getNote(params.id);

  return (
    <div>
      <h1>notes/{note.id}</h1>
      <div className={styles.note}>
        <h3>{note.title}</h3>
        <h5>{note.content}</h5>
        <p>{note.created}</p>
      </div>
    </div>
  );
}