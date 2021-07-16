import React from "react";

const Filter = (props) =>{
    // console.log('FilterProps: ', props.name, props.user);
    let count = 0;
    if (props.name)  props.user.forEach(el=>{if (el.name.toUpperCase()===props.name.toUpperCase()) count++; });
    console.log('CountArr:', count);
    return (
        <>
        </>
    );
}
export default Filter;