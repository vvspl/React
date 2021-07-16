import React from 'react';

const Filter = props => {
  // console.log('FilterProps: ', props.name, props.user, props.onChange);
  // let count = 0;
  // if (props.name)
  //   props.user.forEach(el => {
  //     if (el.name.toLowerCase() === props.name.toLowerCase()) count++;
  //   });
  // console.log('CountArr:', count);
  return (
    <div className="filter">
      <span className="filter__count">{props.count}</span>
      <input type="text" className="filter__input" value={props.name} onChange={props.onChange} />
    </div>
  );
};
export default Filter;
