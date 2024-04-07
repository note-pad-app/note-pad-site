import './style.css'
import { Link } from 'react-router-dom'

type paramType = {
  title: string,
  buttonLabel?: string,
  link?: string,
  handleShow?: () => void
}

function TitleBar({ title, buttonLabel, link }: paramType) {
  return (
    <div className="d-flex justify-content-between mb-2 align-items-center pt-4">
      <h1 className="title">{title}</h1>
      {
        link ? <button className="add-btn text-decoration-none">
          <Link to={link} className="text-decoration-none text-white">{buttonLabel}</Link>
        </button> : ''
      }
    </div>
  )
}

export default TitleBar