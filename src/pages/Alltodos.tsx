import {useState} from 'react'
import TitleBar from "../components/titlebar"
import Searchbar from "../components/searchbar"
import TodoCard from "../components/todoCard"

function Alltodos() {
  return (
    <main>
      <div className="container">
        <TitleBar title="All to-dos" buttonLabel="new todo" link="/todos/addtodo"/>
        <Searchbar />
        <TodoCard todo="something todo" check/>
        <TodoCard todo="something todo" check/>
        <TodoCard todo="something todo" check/>
        <TodoCard todo="something todo" check/>
      </div>
    </main>
  )
}

export default Alltodos