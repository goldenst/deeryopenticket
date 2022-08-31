import React, { useState } from "react";
import { useCollection } from "../../hooks/useCollection";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./Create.css";
import { useFirestore } from "../../hooks/useFirestore";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const { addDocument, response } = useFirestore("tickets");
  const { documents } = useCollection("users");
  const [users, setUsers] = useState();
  const { user } = useAuthContext();

  const [createdBy, setCreatedBy] = useState("");
  const [repairOrder, setRepairOrder] = useState("");
  const [customer, setCustomer] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [concern, setConcern] = useState("");
  const [status, setStatus] = useState("");
  const [tech, setTech] = useState("");
  const [openDate, setOpenDate] = useState("");
  const [promiseBy, setPromiseBy] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();

    const createdBy = {
      displayName: user.displayName,
      id: user.uid,
    };

    const ticket = {
      repairOrder,
      customer,
      phone,
      vehicle,
      concern,
      status,
      tech,
      openDate,
      promiseBy,
      comments: [],
      createdBy,
    };

    await addDocument(ticket);
    if (!response.error) {
      navigate("/");
    }
  };

  return (
    <div className="create-form">
      <h2 className="page-title">Create Ticket</h2>
      <form onSubmit={handelSubmit}>
        <div className="form-group">
          <label htmlFor="repairOrder">Ro Number</label>
          <input
            required
            className="form-control"
            type="text"
            id="repairOrder"
            value={repairOrder}
            onChange={(e) => setRepairOrder(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="openDate">Ro Open Date</label>
          <input
            required
            className="form-control"
            type="date"
            id="openDate"
            value={openDate}
            onChange={(e) => setOpenDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Customer Name</label>
          <input
            required
            className="form-control"
            type="text"
            id="customer"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="Format: 555-555-5555"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
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
          <input
            className="form-control"
            type="text"
            id="concern"
            value={concern}
            onChange={(e) => setConcern(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="" disabled >
              Please choose one
            </option>
            <option value="New">
              New
            </option>
            <option value="WOA">Waiting for Approval</option>
            <option value="In Progress">In Progress</option>
            <option value="WOP">Waiting on Parts</option>
            <option value="PARTS Here">All Parts Here</option>
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

export default Create;
