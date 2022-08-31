import React, { useEffect, useState } from "react";
//import { useCollection } from "../../hooks/useCollection";
import { projectFirestore } from "../../firebase/config";
//import { useAuthContext } from "../../hooks/useAuthContext";
import "../create/Create.css";
//import { useFirestore } from "../../hooks/useFirestore";
import { useNavigate, useParams } from "react-router-dom";

const EditTicket = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // const { updateDocument, response } = useFirestore("tickets");
  //const { documents } = useCollection("users");
  // const [users, setUsers] = useState();
  //const { user } = useAuthContext();

  const [vehicle, setVehicle] = useState("");
  const [concern, setConcern] = useState("");
  const [status, setStatus] = useState("");
  const [tech, setTech] = useState("");
  const [promiseBy, setPromiseBy] = useState("");
  //const [ticket, setTicket ] = useState('')

  useEffect(() => {
    projectFirestore
      .collection("tickets")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setVehicle(vehicle);
          setConcern(concern);
          setStatus(status);
          setTech(tech);
          setPromiseBy(promiseBy);
          //set values here ??
          //setTicket(doc.data())
          console.log(doc.data());
        } else {
          console.log("not found");
        }
      });
    // eslint-disable-next-line
  }, [id]);

  const handelSubmit = () => {
    projectFirestore.collection("tickets").doc(id).update({
      vehicle,
      concern,
      status,
      tech,
      promiseBy,
    });

    navigate("/");
  };

  return (
    <div className="create-form">
      <h2 className="page-title">Create Ticket</h2>
      <form onSubmit={handelSubmit}>
        <div className="form-group">
          <label htmlFor="vehicle">Vehicle</label>
          <input
            className="form-control"
            type="text"
            id="vehicle"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="concern">Concern</label>
          <textarea
            className="form-control"
            type="text"
            id="concern"
            value={concern}
            onChange={(e) => setConcern(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="" disabled>
              Please choose one
            </option>
            <option value="New">New</option>
            <option value="WOA">Waiting for Approval</option>
            <option value="In Progress">In Progress</option>
            <option value="WOP">Waiting on Parts</option>
            <option value="Parts Here">All Parts Here</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="tech">Tech</label>
          <input
            className="form-control"
            type="text"
            id="tech"
            value={tech}
            onChange={(e) => setTech(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="promisedBy">Promised By</label>
          <input
            className="form-control"
            type="date"
            id="promisedBy"
            value={promiseBy}
            onChange={(e) => setPromiseBy(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EditTicket;
