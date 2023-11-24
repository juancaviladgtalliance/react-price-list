import React from "react";
import { InputData, StatusInput } from "../../types";

function InputsComponent({
  className,
  type,
  holder,
  value,
  InputFunction,
  focusError,
}: {
  className: string;
  type: string;
  holder: string;
  value: InputData;
  InputFunction: (type: string, value: string) => void;
  focusError: (type: string, status: StatusInput) => void;
}) {
  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[^a-zA-Z]+$/;
    if (
      type == "phone" &&
      !regex.test(e.target.value) &&
      e.target.value != ""
    ) {
      return null;
    } else {
      InputFunction(type, e.target.value);
    }
  };
  const isAlert = value.status == StatusInput.error ? " alert" : "";
  return (
    <input
      className={`${className}${isAlert}`}
      type="text"
      placeholder={holder}
      value={value.value}
      onChange={handlerChange}
      onFocus={() => focusError(type, StatusInput.idle)}
    />
  );
}

export default InputsComponent;
