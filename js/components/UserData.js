import React from 'react';

export default ({ user, update, index }) => {
  return (
    <tr onClick={() => update({ active: index })}>
      <td><img src={`images/${user.image}.svg`} className="user-image" /></td>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>8 {user.phone}</td>
    </tr>
  );
};
