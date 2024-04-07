import TitleBar from "../components/titlebar"
import { useDispatch } from "react-redux"
import { changeTheme } from "../slices/DarkMode"
import { useDarkMode } from '../hooks/useDarkMode'
import { useState } from "react";

function Setting() {
  const theme = useDispatch();
  const getCookie = useDarkMode('dark');
  const changeThemeColor = () => {
    theme(changeTheme())
  }

  const [show, setshow] = useState(false)

  return (
    <div className="container" style={{ marginTop: '60px' }}>
      <div className="d-flex justify-content-center">
        <TitleBar title="Settings"/>
      </div>
      <div className="settings mt-3 shadow-sm p-4 bg-white w-100 rounded d-flex justify-content-between align-items-center">
        <label htmlFor="dark-mode" className="text-black-50 fs-2">
          Dark Mode
        </label>
        <div className='form-check form-switch'>
          <input type="checkbox" id="dark-mode" onChange={changeThemeColor} checked={getCookie} className='form-check-input m-3 fs-4' />
        </div>
      </div>
      <div className="settings mt-3 shadow-sm p-4 bg-white w-100 rounded">
        <div className="d-flex justify-content-between align-items-center">
          <label htmlFor="dark-mode" className="text-black-50 fs-2">
            Change password
          </label>
          <div className='form-check form-switch'>
            <input type="checkbox" id="dark-mode" onChange={() => setshow(!show)} className='form-check-input m-3 fs-4' />
          </div>
        </div>
        {
          show ? <div className='d-flex justify-content-between gap-3 inputs mt-3'>
            <input type="password" id="dark-mode" className='form-control' placeholder="new password" />
            <input type="password" id="dark-mode" className='form-control' placeholder="retype password" />
            <button className="btn btn-success">Change</button>
          </div> : ''
        }
      </div>
    </div>
  )
}

export default Setting