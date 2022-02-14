import React, { useState, createContext } from "react";
import FeedbackData from "../data/FeedbackData";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    edit: false,
    item: {},
  });
  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  // Delete feedback
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((feed) => feed.id !== id));
    }
  };
  // Add feedback
  const handleAdd = (newFeedback) => {
    // const newFeed = {
    //   id: uuidv4(),
    //   ...newFeedback,
    // };
    // console.log(newFeed);

    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // update feedback
  const handleUpdate = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        editFeedback,
        handleDelete,
        handleAdd,
        handleUpdate,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
