import React, { useState } from "react";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import moment from 'moment';

const TicketComments = ({ ticket }) => {
  const { updateDocument, responce } = useFirestore("tickets");
  const [newComment, setNewComment] = useState("");
  const { user } = useAuthContext();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      displayName: user.displayName,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random(),
    };
    await updateDocument(ticket.id, {
      comments: [...ticket.comments, commentToAdd],
    });

    setNewComment("");
  };

  return (
    <div className="project-comments">
      <h4>Ticket Comments</h4>
      <ul>
        {ticket.comments.length > 0 &&
          ticket.comments.map((comment) => (
            <li key={comment.id}>
              <div className="comment-author">
                <p> By: {comment.displayName}</p>{" "}
              </div>
              <div className="comment-date">
                <p>
                Added: {moment(comment.createdAt.toDate()).format("ddd, MMM Do YY, h:mm a")}
                </p>
              </div>
              <div className="comment-content">
                <p>{comment.content}</p>
              </div>
            </li>
          ))}
      </ul>

      <form className="add-comment" onSubmit={handleOnSubmit}>
        <label>
          <span>Add Comment</span>
          <textarea
            required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          ></textarea>
          <button className="btn">Add Comment</button>
        </label>
      </form>
    </div>
  );
};

export default TicketComments;
