import React, { useEffect, useState } from "react";
import { projectFirestore } from "../../firebase/config";
import "../create/Create.css";
import { useNavigate, useParams } from "react-router-dom";

const EditRadio = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [sor, setSor] = useState("");
  const [status, setStatus] = useState("");
  const [partOrdered, setPartOrdered] = useState("");
  const [returnBy, setReturnBy] = useState("");
  
  const [promiseBy, setPromiseBy] = useState("");

  useEffect(() => {
    projectFirestore
      .collection("radios")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setSor(sor);
          setPartOrdered(partOrdered);
          setStatus(status);
          
          setPromiseBy(promiseBy);
          //set values here ??

          //console.log(doc.data());
        } else {
          console.log("not found");
        }
      });
    // eslint-disable-next-line
  }, [id]);

  const handelSubmit = () => {
    projectFirestore.collection("radios").doc(id).update({
      partOrdered,
      status,
      promiseBy,
      returnBy,
    });

    navigate("/radios");
  };

  return (
    <div className="create-form">
      <h2 className="page-title">Edit Radio/SOR</h2>
      
      <form onSubmit={handelSubmit}>
      
        
        <div className="form-group">
          <label htmlFor="concern">Parts Ordered</label>
          <textarea
            className="form-control"
            type="text"
            id="concern"
            value={partOrdered}
            onChange={(e) => setPartOrdered(e.target.value)}
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
            <option value="Parts Here">All Parts Here</option>
          </select>
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

export default EditRadio;
