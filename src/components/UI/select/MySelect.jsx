import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => {
    // console.log(onChange)
    return (
        <select
            onChange={event => onChange(event.target.value)}
            value={value}
            >
            <option disabled value=''>
                {defaultValue}
            </option>
                {options.map(item => 
                  <option key={item.value} value={item.value}>
                      {item.name}
                  </option>
                )}
        </select>
    );
};

export default MySelect;