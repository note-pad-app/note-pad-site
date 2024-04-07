import TitleBar from "../components/titlebar"
import TodoCard from "../components/todoCard"

function Deltodos() {
  return (
    <main>
      <div className="container">
        <TitleBar title="Recently deleted todos" type="none"/>
        <TodoCard deleted todo="something todo" check={false}/>
        <TodoCard deleted todo="something todo" check={false}/>
        <TodoCard deleted todo="something todo" check={false}/>
        <TodoCard deleted todo="something todo" check={false}/>
      </div>
    </main>
  )
}

export default Deltodos