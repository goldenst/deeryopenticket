import React from 'react'
import { useFirestore } from "../../hooks/useFirestore";
import { useNavigate , Link} from "react-router-dom";

const RadioSummary = ({radio}) => {

  const {deleteDocument} = useFirestore('radios')

  const navigate = useNavigate()

  const handelDelete = (e) => {
    deleteDocument(radio.id)
    navigate('/radios')
  }

  return (
    <div>
    
      <div className='project-summary'>
      <Link to={`/radio-edit/${radio.id}`} key={radio.id}>
        <span><button className='btn'>Edit</button></span>
      </Link>
      
      <h3 className='project-details'>Status: {radio.status}</h3>
      <h4 className='project-details'> Ordered By: {radio.createdBy.displayName}</h4>
      <h4 className='page-title'> SOR#: {radio.sor}</h4>
      
      
      <p className='due-date' > Open Date: {radio.openDate} </p>
      <p className='due-date' > Customer: {radio.customer} </p>
      <p className='due-date' > Part Ordered: {radio.partOrdered} </p>
        <p className='due-date' >Approx Eta..: {radio.promiseBy}</p>
        <p className='due-date red' >MUST RETURN RADIO By: {radio.returnBy}</p>
        
      </div>
      <button className='btn' onClick={handelDelete}>Completed</button>
    </div>
  )
}

export default RadioSummary