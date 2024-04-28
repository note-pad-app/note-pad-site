import Searchbar from "../components/searchbar"
import Card from "../components/noteCard"
import TitleBar from "../components/titlebar"
import { useQuery, useQueryClient } from "@tanstack/react-query";
import * as api from '../api';
import { Note } from "../Types/noteTypes";

function Delnotes() {
  const queryClient = useQueryClient();
  const { data, isSuccess } = useQuery({
    queryKey: ['notes', 'deleted'],
    queryFn: () => api.note.getAll('1'),
  })
if(isSuccess){
  console.log(data)
}
  const handleTodoActions = () => {
    queryClient.invalidateQueries({ queryKey: ['notes', 'deleted'] });
  };

  return (
    <main>
      <div className="container">
        <TitleBar title="All notes" buttonLabel="new note" link="/notes/addnote" />
        <Searchbar />
        {
          isSuccess ? data.data.data.map((note: Note) => {
            return (
              <Card category={note.category ? note.category.name : ''} deleted key={note.id} favorite={note.isFavorite} createdAt={note.createdAt} inValidate={handleTodoActions} note={note.note} noteId={note.id}/>
            )
          }) : <p className="text-danger">something went wrong!!</p>
        }
      </div>
    </main>
  )
}

export default Delnotes