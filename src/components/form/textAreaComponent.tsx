import React from "react";
import { TextAreaWrapper } from "../../libs/style-components";

function TextAreaComponent({
  value,
  message,
  holder,
  InputFunction,
}: {
  value: string;
  message: string;
  holder: string;
  InputFunction: (type: string, value: string) => void;
}) {
  const handlerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    InputFunction("another_properties", e.target.value);
  };
  return (
    <TextAreaWrapper htmlFor="another_properties">
      <h3>{message}</h3>
      <textarea
        value={value}
        onChange={handlerChange}
        placeholder={holder}
        id="another_properties"
      />
    </TextAreaWrapper>
  );
}

export default TextAreaComponent;
