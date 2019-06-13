/* eslint-disable react/prop-types */
import React from 'react';

const UserItem = ({ user: { login, avatarUrl, htmlUrl } }) => (
  <div className="card text-center">
    <img src={avatarUrl} alt="" className="round-img" style={{ width: '60px' }} />
    <h3>{login}</h3>
    <a href={htmlUrl} className="btn btn-dark btn-sm my-1">More</a>
  </div>
);

export default UserItem;
