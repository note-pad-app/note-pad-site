import './style.css'

function CatagoryCard() {
  return (
    <div className="catagory-card d-flex justify-content-between align-items-center my-3 p-3 shadow-sm bg-white rounded">
      <div className="d-flex align-items-end">
        <input className='category-input' type="text" value="Personal" />
      </div>
      <div>
        <button className='action-button me-4'>
          <i className="fas fa-save text-info"></i>
        </button>
        <button className='action-button'>
          <i className="fas fa-trash text-danger"></i>
        </button>
      </div>
    </div>
  )
}

export default CatagoryCard