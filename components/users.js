import React from "react";

export const Users = (props) => {
  console.log(props);
  return (
    <ul className="list-group">
      {props.users.map((user) => (
        <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" key={user.id}>
          <div>
            <h5>
              {user.first_name} {user.last_name}
            </h5>
            <p>Email: {user.email}</p>
          </div>
          <img
            src={user.avatar}
            alt={user.avatar}
            style={{ borderRadius: "50%" }}
          />
        </li>
      ))}
    </ul>
  );
};