import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import React from "react";
import logo from "../../img/19nav.svg";
import styled from "styled-components";

const Toasts = styled.div`
  .animate-enter {
    animation: enter 0.2s ease-out;
  }
  .animate-leave {
    animation: leave 0.15s ease-in forwards;
  }
  .max-w-md {
    max-width: 25rem;
  }
  .w-full {
    width: 100%;
  }
  .bg-white {
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  }
  .shadow-lg,
  .shadow-small-button {
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }

  .shadow-lg {
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -4px rgba(0, 0, 0, 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
      0 4px 6px -4px var(--tw-shadow-color);
  }
  .rounded-lg {
    border-radius: 0.5rem;
  }
  .pointer-events-auto {
    pointer-events: auto;
  }
  p {
    margin-bottom: 0;
  }
  .flex {
    display: flex;
  }
  .ring-1 {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
      var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
      calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
      var(--tw-shadow, 0 0 #0000);
  }
  .ring-black {
    --tw-ring-opacity: 1;
    --tw-ring-color: rgb(0 0 0 / var(--tw-ring-opacity));
  }
  .ring-opacity-5 {
    --tw-ring-opacity: 0.05;
  }
  .flex-1 {
    flex: 110%;
  }
  .w-0 {
    width: 0;
  }
  .p-40 {
    padding: 1rem;
  }
  .items-start {
    align-items: center;
  }
  .flex-shrink-0 {
    flex-shrink: 0;
  }
  .pt-0.5 {
    padding-top: 0.125rem;
  }
  .h-10 {
    height: 2.5rem;
  }
  .w-10 {
    width: 2.5rem;
  }
  .rounded-full {
    border-radius: 9999px;
  }
  .ml-3 {
    margin-left: 0.75rem;
  }
  .text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  .font-medium {
    font-weight: 500;
  }
  .text-gray-900 {
    --tw-text-opacity: 1;
    color: rgb(17 24 39 / var(--tw-text-opacity));
  }
  .mt-1 {
    margin-top: 0.25rem;
  }
  .text-gray-500 {
    --tw-text-opacity: 1;
    color: rgb(107 114 128 / var(--tw-text-opacity));
  }
  .border-l {
    border-left-width: 1px;
  }
  .border-gray-200 {
    --tw-border-opacity: 1;
    border-color: rgb(229 231 235 / var(--tw-border-opacity));
  }
  .border {
    border-width: 1px;
  }
  .border-transparent {
    border-color: transparent;
  }
  .rounded-none {
    border-radius: 0;
  }
  .rounded-r-lg {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
  .p-4 {
    padding: 1rem;
  }
  .items-center {
    align-items: center;
  }
  .justify-center {
    justify-content: center;
  }
  .text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  .font-medium {
    font-weight: 500;
  }
  .text-indigo-600 {
    --tw-text-opacity: 1;
    color: rgb(79 70 229 / var(--tw-text-opacity));
  }
  .hover:text-indigo-500:hover {
    --tw-text-opacity: 1;
    color: rgb(99 102 241 / var(--tw-text-opacity));
  }
  .focus :outline-none:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  .focus :ring-2:focus,
  .focus :ring-4:focus {
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
      var(--tw-shadow, 0 0 #0000);
  }

  .focus :ring-2:focus {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
      var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
      calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  }
  .focus :ring-indigo-500:focus {
    --tw-ring-opacity: 1;
    --tw-ring-color: rgb(99 102 241 / var(--tw-ring-opacity));
  }
`;

const App = () => {
  const [messageAll, setMessageAll] = React.useState([]);
  const token = localStorage.getItem("CC_Token");
  const payload = JSON.parse(atob(token.split(".")[1]));
  const forMessage = () => {
    axios
      .get("http://localhost:8000/formessage", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("CC_Token"),
        },
      })
      .then((response) => {
        setMessageAll(response.data);
      })
      .catch((err) => {
        setTimeout(forMessage, 3000);
      });
  };

  React.useEffect(() => {
    setInterval(() => {}, 3000);
    forMessage();
    //eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    messageAll.map((item) => {
      if (item.tabel === payload.name) {
        return toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-40">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <img className="h-10 w-10 rounded-full" src={logo} alt="" />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    桌號: {item.number}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">{item.message}</p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Close
              </button>
            </div>
          </div>
        ));
      }
    });
  }, [messageAll]);

  return (
    <Toasts>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          // Define default options
          className: "",
          duration: Infinity,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: Infinity,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </Toasts>
  );
};

export default App;
