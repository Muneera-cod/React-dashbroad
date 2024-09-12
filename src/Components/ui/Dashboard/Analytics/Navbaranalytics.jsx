import React from "react";
import { useNavigate } from "react-router-dom";

function Navbaranalytics(props) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between  h-fit">
      <h1 className="font-bold  text-lg">Customer List</h1>

      {!props.active && (
        <button
          className="bg-indigo-500 text-white  h-10 rounded-md w-fit px-5"
          onClick={() => props.setActive(!props.active)}
        >
          <div className="flex gap-3">
            <span>+</span>
            <p>Add customer</p>
          </div>
        </button>
      )}
    </div>
  );
}

export default Navbaranalytics;