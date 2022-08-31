import React from 'react'
import { useFirestore } from "../../hooks/useFirestore";
import { useNavigate , Link} from "react-router-dom";

const TicketSummary = ({ticket}) => {

  const {deleteDocument} = useFirestore('tickets')

  const navigate = useNavigate()

  const handelDelete = (e) => {
    deleteDocument(ticket.id)
    navigate('/')
  }

  return (
    <div>
    
      <div className='project-summary'>
      <Link to={`/tickets-edit/${ticket.id}`} key={ticket.id}>
        <span><button className='btn'>Edit</button></span>
      </Link>
      
      <h3 className='project-details'>Status: {ticket.status}</h3>
      <h4 className='project-details'> Service Advisor: {ticket.createdBy.displayName}</h4>
      <h4 className='page-title'> Repair Order: {ticket.repairOrder}</h4>
      
      <p className='due-date' > Customer: {ticket.customer} </p>
      <p className='due-date' > Open Date: {ticket.openDate} </p>
      <p className='due-date' > Phone: {ticket.phone} </p>
      <p className='due-date' > Vehicle: {ticket.vehicle} </p>
      <p className='due-date' > Tech: {ticket.tech} </p>
      <p className='due-date' > Phone: {ticket.phone} </p>

        <p className='due-date' >Promised by: {ticket.promiseBy}</p>
        <hr></hr>
        <p className='due-date' >Concern: </p>
        <p className='project-details' >  {ticket.concern} </p>
      </div>
      <button className='btn' onClick={handelDelete}>Completed</button>
    </div>
  )
}

export default TicketSummary