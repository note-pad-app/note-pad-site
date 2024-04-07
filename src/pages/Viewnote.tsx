import { useState } from 'react';
import CkEditor from '../components/ckeditor'
const now = new Date().toDateString();
function Viewnote() {
  const [edit, setedit] = useState(false)

  return (
    <main>
      <div className="container pt-4 view-note">
        {
          edit ? <div>
            <div className="view-titlebar d-flex justify-content-between align-items-center">
              <div className='d-flex justify-content-start align-items-center'>
                <select name="" id="" className='form-select form-select-sm border-0'>
                  <option selected>No catagory</option>
                  <option value="work">work</option>
                  <option value="personal">personal</option>
                  <option value="life">life</option>
                  <option value="home">home</option>
                </select>
              </div>
              <p>{now}</p>
            </div>
            {/*ckeditor*/}
            <div className="mt-4">
              <CkEditor />
            </div>
            <button onClick={()=> setedit(false)} className='btn mt-3 btn-success rounded-3 px-4 py-2 shadow-sm'>Save</button></div>
            : <div>
              <div>
                <div className="view-titlebar d-flex justify-content-between align-items-center">
                  <div className='d-flex justify-content-start align-items-center'>
                    <h2 className='fs-4 text-info'>Work</h2>
                  </div>
                  <p>{now}</p>
                </div>
                <div className="mt-4 note-content">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto similique blanditiis velit numquam suscipit minus magnam non adipisci nobis perferendis cupiditate explicabo quidem fuga, iure totam iste in nemo animi!
                </div>
                <button onClick={()=> setedit(true)} className='btn mt-3 btn-primary rounded-3 px-4 py-2 shadow-sm'>Edit</button></div>
            </div>
        }
      </div>
    </main>
  )
}

export default Viewnote