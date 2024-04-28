import Searchbar from "../components/searchbar"
import Card from "../components/noteCard"
import TitleBar from "../components/titlebar"
import { useQuery } from "@tanstack/react-query"
import * as api from '../api';
import { Note } from "../Types/noteTypes";

function Favnotes() {
  const { data, isSuccess } = useQuery({
    queryKey: ['notes', 'favorites'],
    queryFn: () => api.note.getFavs(),
  })
  if (isSuccess) {
    console.log(data)
  }
 
  return (
    <main>
      <div className="container">
        <TitleBar title="All notes" buttonLabel="new note" link="/notes/addnote" />
        <Searchbar />
        {
          isSuccess ? data.data.data.map((note: Note) => {
            return (
              <Card category={note.category ? note.category.name : ''} key={note.id} favorite={note.isFavorite} createdAt={note.createdAt} note={note.note} noteId={note.id} />
            )
          }) : <p className="text-danger">something went wrong!!</p>
        }
      </div>
    </main>
  )
}

export default Favnotes