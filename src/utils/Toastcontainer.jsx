import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ToastContainer, toast } from "react-toastify";
// eslint-disable-next-line import/no-extraneous-dependencies
import "react-toastify/dist/ReactToastify.css";

function ToastView() {
  toast("Please enter valid city", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
  });

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
}
export default ToastView;
