import TitleBar from "../components/titlebar"
import Searchbar from "../components/searchbar"
import TodoCard from "../components/todoCard"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import * as api from '../api';
import { Todo } from "../Types/todoTypes";

function Alltodos() {
  const queryClient = useQueryClient();

  const { data, isSuccess } = useQuery({
    queryKey: ['todo', 'all'],
    queryFn: ()=> api.todo.getAll(),
  })

  const handleTodoActions = () => {
    queryClient.invalidateQueries({queryKey: ['todo', 'all']});
  };

  return (
    <main>
      <div className="container">
        <TitleBar title="All to-dos" buttonLabel="new todo" link="/todos/addtodo" />
        <Searchbar />
        {
          isSuccess ? data.data.data.map((todo: Todo) => {
            return (
              <TodoCard inValidate={handleTodoActions} isCompleted={todo.isCompleted} key={todo.id} todo={todo.todo} id={todo.id} check />
            )
          }) : <p className="text-danger">something went wrong!!</p>
        }
      </div>
    </main>
  )
}

export default Alltodos