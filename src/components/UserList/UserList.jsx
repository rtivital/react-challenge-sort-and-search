import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import './user-list.scss';

function ListItem({ item, onClick }) {
  return (
    <tr onClick={() => onClick(item)} className="user-list__user">
      <td><Avatar image={item.avatar} className="user-list__avatar" /></td>
      <td>{item.name}</td>
      <td>{item.age}</td>
      <td>{item.phone}</td>
    </tr>
  );
}

ListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  item: PropTypes.shape({
    age: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default function UserList({ data, onItemClick }) {
  const items = data.map(
    (item) => <ListItem item={item} onClick={onItemClick} key={item.id} />
  );

  return (
    <div className="user-list">
      <table className="user-list__table">
        <thead className="user-list__head">
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </table>
    </div>
  );
}

UserList.propTypes = {
  data: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired,
};
