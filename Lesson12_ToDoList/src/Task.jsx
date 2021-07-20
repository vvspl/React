import React from 'react';
import classNames from 'classnames';

const Task = ({id, done, text, onChange, onDelete}) => {
// const listItemClasses = `list-item ${done? 'list-item_done' : ''}`;  // option 1
// const listItemClasses = done? 'list-item list-item_done':'list-item'; // option 2
const listItemClasses = classNames('list-item', {'list-item_done':done}); // option 3
  return (
    <li className={listItemClasses}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button className="list-item__delete-btn" onClick={()=>onDelete(id)}></button>
    </li>
  );
};

export default Task;
