import React from 'react';

const Filter = props => {
  // console.log('FilterProps: ', props.name, props.user, props.onChange);
  let count = 0;
  if (props.name)
    props.user.forEach(el => {
      if (el.name.toUpperCase() === props.name.toUpperCase()) count++;
    });
  console.log('CountArr:', count);
  return (
    <div className="filter">
      <span className="filter__count">{count}</span>
      <input type="text" className="filter__input" value={props.name} onChange={props.onChange} />
    </div>
  );
};
export default Filter;
