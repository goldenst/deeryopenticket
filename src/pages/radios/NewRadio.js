import React, { useState } from "react";
import { useCollection } from "../../hooks/useCollection";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./Radios.css";
import { useFirestore } from "../../hooks/useFirestore";
import { useNavigate } from "react-router-dom";

const NewRadio = () => {
  const navigate = useNavigate();
  const { addDocument, response } = useFirestore("radios");
  const { documents } = useCollection("users");
  const [users, setUsers] = useState();
  const { user } = useAuthContext();

  const [createdBy, setCreatedBy] = useState("");
  const [sor, setSor] = useState("");
  const [advisor, setAdvisor] = useState("");
  const [customer, setCustomer] = useState("");
  const [status, setStatus] = useState("");
  const [partOrdered, setPartOrdered] = useState("");
  const [openDate, setOpenDate] = useState("");
  const [promiseBy, setPromiseBy] = useState("");
  const [returnBy, setReturnBy] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();

    const createdBy = {
      displayName: user.displayName,
      id: user.uid,
    };

    const radio = {
      sor,
      customer,
      advisor,
      status,
      partOrdered,
      openDate,
      promiseBy,
      returnBy,
      comments: [],
      createdBy,
    };

    await addDocument(radio);
    if (!response.error) {
      navigate("/radios");
    }
  };

  return (
    <div className="create-form">
      <h2 className="page-title">Create Radio / SOR Ticket</h2>
      <form onSubmit={handelSubmit}>
        <div className="form-group">
          <label htmlFor="sor">SOR Number</label>
          <input
            required
            className="form-control"
            type="text"
            id="repairOrder"
            value={sor}
            onChange={(e) => setSor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="advisor">Service Advisor</label>
          <input
            required
            className="form-control"
            type="text"
            id="advisor"
            value={advisor}
            onChange={(e) => setAdvisor(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="openDate">Order Date</label>
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
          <label htmlFor="partOrdered">Part's Ordered</label>
          <textarea
            required
            className="form-control"
            type="text"
            id="partOrdered"
            value={partOrdered}
            onChange={(e) => setPartOrdered(e.target.value)}
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
            <option value="" disabled>
              Please choose one
            </option>
            <option value="Ordered">Ordered</option>
            <option value="WOP">Waiting on Parts</option>
            <option value="PARTS Here">All Parts Here</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="promisedBy">Aprox... ETA</label>
          <input
            className="form-control"
            type="date"
            id="promisedBy"
            value={promiseBy}
            onChange={(e) => setPromiseBy(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="returnBy">Return By:</label>
          <input
            className="form-control"
            type="date"
            id="returnBy"
            value={returnBy}
            onChange={(e) => setReturnBy(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NewRadio;
