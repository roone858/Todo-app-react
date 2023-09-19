import React, { useRef } from "react";
import { tasks } from "../db";
export const Header = (props) => {
  return (
    <div style={{ color: "#fff" }} className=" header  bg-primary  ">
      <h1 className="my-4">To-Do App!</h1>
      <label htmlFor="newTask " className="m-1">
        Add New To-Do
      </label>
      <br />

      <input
        id="newTask"
        type="text"
        onChange={props.handleChangeInput}
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
      />

      <br />
      <button
        onClick={props.handleClickAdd}
        type="button"
        className="btn btn-success"
      >
        Add
      </button>
    </div>
  );
};
