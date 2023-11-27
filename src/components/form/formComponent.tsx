import { Buildingslist } from "../../constants";
import { Styled, redux } from "../../libs";
import { IncludesTypes, StatusInput } from "../../types";
import SendButton from "./SendButton";
import IncludeForm from "./includeForm";
import InputsComponent from "./inputsComponent";
import TextAreaComponent from "./textAreaComponent";

export default function FormComponent() {
  const dispatch = redux.hooks.useAppDispatch();
  const {
    name,
    phone,
    email,
    message: { another_properties },
  } = redux.hooks.useAppSelector((state) => state.form);
  const handlers = (type: string, value: string) => {
    switch (type) {
      case "name":
        dispatch(redux.formData.setName({ ...name, value }));
        break;
      case "email":
        dispatch(redux.formData.setEmail({ ...email, value }));
        break;
      case "phone":
        dispatch(redux.formData.setPhone({ ...phone, value }));
        break;
      case "another_properties":
        dispatch(redux.formData.setMessageAnotherProperties(value));
        break;
    }
  };
  const handlerError = (type: string, status: StatusInput) => {
    switch (type) {
      case "name":
        dispatch(redux.formData.setName({ ...name, status }));
        break;
      case "email":
        dispatch(redux.formData.setEmail({ ...email, status }));
        break;
      case "phone":
        dispatch(redux.formData.setPhone({ ...phone, status }));
        break;
    }
  };

  return (
    <Styled.FormWrapper className="form gtm_general_contact_form iboost-secured-recaptcha-form">
      {/*   <h2 className="form-text">{priceListTitles.formTextMobile}</h2> */}
      <div className="form-container">
        <div className="personaldata">
          <InputsComponent
            className="name"
            type="name"
            holder="Name"
            value={name}
            InputFunction={handlers}
            focusError={handlerError}
          />

          <InputsComponent
            className="email"
            type="email"
            holder="Email"
            value={email}
            InputFunction={handlers}
            focusError={handlerError}
          />
          <InputsComponent
            className="phone"
            type="phone"
            holder="Phone"
            value={phone}
            InputFunction={handlers}
            focusError={handlerError}
          />
        </div>
        <div className="optionData">
          {Buildingslist.includes.map((item: IncludesTypes) => (
            <IncludeForm key={item.value} {...item} />
          ))}
        </div>
        <div className="message">
          <TextAreaComponent
            message="Are you interested in other properties?"
            holder="Type here..."
            value={another_properties}
            InputFunction={handlers}
          />
          <SendButton />
        </div>
      </div>
    </Styled.FormWrapper>
  );
}
