import Searchbar from "../components/searchbar"
import Card from "../components/noteCard"
import TitleBar from "../components/titlebar"
import * as api from '../api';
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Note } from "../Types/noteTypes";

function Allnotes() {
  const queryClient = useQueryClient();
  const { data, isSuccess } = useQuery({
    queryKey: ['notes', 'all'],
    queryFn: () => api.note.getAll(),
  })

  const handleTodoActions = () => {
    queryClient.invalidateQueries({ queryKey: ['notes', 'all'] });
  };

  return (
    <main>
      <div className="container">
        <TitleBar title="All notes" buttonLabel="new note" link="/notes/addnote" />
        <Searchbar />
        {
          isSuccess ? data.data.data.map((note: Note) => {
            return (
              <Card category={note.category ? note.category.name : ''} key={note.id} favorite={note.isFavorite} fav={true} createdAt={note.createdAt} inValidate={handleTodoActions} note={note.note} noteId={note.id}/>
            )
          }) : <p className="text-danger">something went wrong!!</p>
        }
      </div>
    </main>
  )
}

export default Allnotes