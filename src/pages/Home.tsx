import { Link } from 'react-router-dom'
import noteImg from '/images/note.png'
import todoImg from '/images/todo.png'

function Home() {
    return (
        <div className='container'>
            <div className='d-flex flex-column justify-content-center align-items-center' style={{ marginTop: '60px' }}>
                <div className="text-center">
                    <h1 className="text-info mt-5">Welcome to NotePad app</h1>
                    <p className='text-secondary mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima corrupti earum porro quam obcaecati voluptates debitis quo voluptatum ipsam eius, nisi sequi nihil nostrum saepe, sunt ex optio ut sit.</p>
                </div>
                <div className="d-flex justify-content-between">
                    <div className='home-card rounded p-4 shadow-lg text-center bg-light mt-4  mx-4'>
                        <p className="fs-4">Let's write some notes</p>
                        <Link to="/notes">
                            <img src={noteImg} className="img-fluid mt-2"></img>
                        </Link>
                    </div>
                    <div className='home-card rounded p-4 shadow-lg text-center bg-light mt-4  mx-4'>
                        <p className="fs-4">Let's add some todos</p>
                        <Link to="/todos">
                            <img src={todoImg} className="img-fluid mt-2"></img>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home