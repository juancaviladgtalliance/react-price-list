import { useEffect, useState } from "react";
import { redux, Styled } from "../../libs";
import { IncludesTypes } from "../../types";
import CheckForm from "./checkForm";

function IncludeForm({ name }: IncludesTypes) {
  const [activeInclude, setActiveInclude] = useState<boolean>(false);
  const disapatch = redux.hooks.useAppDispatch();
  const { includes } = redux.hooks.useAppSelector(
    (state) => state.form.message
  );

  const setInclude = () => {
    if (!activeInclude) {
      disapatch(redux.formData.addMessageIncludes(name));
    } else {
      disapatch(redux.formData.removeMessageIncludes(name));
    }
    setActiveInclude(!activeInclude);
  };
  useEffect(() => {
    if (!includes.includes(name)) {
      setActiveInclude(false);
    }
  }, [includes]);

  return (
    <Styled.IncludeInput>
      <CheckForm
        height="20px"
        width="20px"
        activeChecked={setInclude}
        checked={activeInclude}
      />
      <h3 onClick={setInclude}>{name}</h3>
    </Styled.IncludeInput>
  );
}

export default IncludeForm;
