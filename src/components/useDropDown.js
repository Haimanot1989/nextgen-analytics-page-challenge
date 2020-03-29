import React, { useState } from "react";

const useDropDown = (defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const DropDown = () => (
    <div className="header-select-wrap">
      <select
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
        disabled={options.length === 0}
      >
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <i className="down"></i>
    </div>
  );

  return [state, DropDown, setState];
};

export default useDropDown;
