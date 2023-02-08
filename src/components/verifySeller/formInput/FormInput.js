import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const {
    label,
    errorMessage,
    onChange,
    id,
    ...inputProps
  } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <>
      <div className="inputChanging">
        <label>{label}</label>
        <div className="inputcontent">
          <input
            {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            onFocus={() =>
              inputProps.name === "repeatPassword" &&
              setFocused(true)
            }
            focused={focused.toString()}
          />
          <span>{errorMessage}</span>
        </div>
      </div>
    </>
  );
};

export default FormInput;
