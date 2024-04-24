import TitleBar from "../components/titlebar"
import TodoCard from "../components/todoCard"
import * as api from '../api';
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Todo } from "../Types/todoTypes";

function Deltodos() {
  const queryClient = useQueryClient();

  const { data, isSuccess } = useQuery({
    queryKey: ['todo', 'deleted'],
    queryFn: () => api.todo.getAll('1'),
  })

  const handleTodoActions = () => {
    queryClient.invalidateQueries({queryKey: ['todo', 'deleted']})
  }

  return (
    <main>
      <div className="container">
        <TitleBar title="Recently deleted todos"/>
        {
          isSuccess ? data.data.data.map((todo: Todo) => {
            return (
              <TodoCard deleted inValidate={handleTodoActions} isCompleted={todo.isCompleted} key={todo.id} todo={todo.todo} id={todo.id} check={false} />
            )
          }) : <p className="text-danger">something went wrong!!</p>
        }
      </div>
    </main>
  )
}

export default Deltodos