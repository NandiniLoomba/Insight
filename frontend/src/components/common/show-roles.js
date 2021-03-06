import React, { useEffect, useState } from "react";
import axios from "axios";

function ShowRoles(props) {
  const [Roles, setRoles] = useState([]);

  useEffect(() => {
    if (Roles.length === 0) {
      getRoles();
    }
  });

  const getRoles = async () => {
    const roles = await axios.get("/get-roles");
    setRoles(roles.data);
  };

  var rows = [];
  rows.push(
    <option value="" disabled key={""}>
      Select a Role
    </option>
  );
  for (var i = 0; i < Roles.length; i++) {
    const value = Roles[i].role;
    const key = i;
    rows.push(
      <option value={value} key={key}>
        {value}
      </option>
    );
  }

  if(props.extra){
    rows.push(
      <option value={props.extra} key={props.extra}>
        {props.extra}
      </option>
    );
  }
  return (
    <>
      <select
        name="role"
        value={props.value}
        className="dropDown"
        onChange={props.onChange}
        required="true"
      >
        {rows}
      </select>
    </>
  );
}

export default ShowRoles;
