import './style.css'
import { Link } from 'react-router-dom'

type propsType = {
  note: String
  fav?: Boolean
  deleted?: Boolean
}

function NoteCard({ note, fav, deleted }: propsType) {
  return (
    <div className='card border-0 border-rounded-3 shadow-sm p-3 mt-3 bg-white'>
      <Link to="/notes/note/23" className='text-decoration-none'>
        <p className='text-black'>{note.length > 200 ? note.slice(0, 200) + "..." : note}</p>
        <p className='text-secondary'>2022/2/2 12:03 pm </p>
      </Link>
      {
        fav ? <div className='action-container'>
          <button className='action-button me-3 text-warning'><i className='fas fa-trash' ></i></button>
          <input type="checkbox" id="heart"/>
          <label htmlFor="heart" id='heartlabel' ><i className='icon fas fa-heart'></i></label>
        </div> : deleted ?<div className='action-container'>
          <button className='action-button me-3 text-danger'><i className='fas fa-trash' ></i></button>
          <button className='action-button text-info'><i className='fas fa-trash-restore'></i></button>
        </div> :''
      }
    </div >
  )
}

export default NoteCard