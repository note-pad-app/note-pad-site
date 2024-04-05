function CatagoryCard() {
  return (
    <div className="catagory-card d-flex justify-content-between align-items-center my-3 p-3 shadow-sm bg-white rounded">
        <div className="d-flex align-items-end">
          <input type="text" value="Personallkjlsdjkflsjdflsjkdfllsdjlsjdlfksj" style={{border: 'none', outline: 'none', borderBottom: '1px solid gray', padding: '10px'}}/>
        </div>
        <div>
          <i className="text-success me-4 fas fa-save fs-2"></i>
          <i className="text-danger fas fa-trash fs-2"></i> 
        </div>
    </div>
  )
}

export default CatagoryCard