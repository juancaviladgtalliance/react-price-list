import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Styled, redux } from "../../libs";
import { StatusInput } from "../../types";

function SendButton() {
  const [hasError, setHasError] = useState(false);
  const dispatch = redux.hooks.useAppDispatch();
  const { ib_tags, action, name, email, phone, message, response } =
    redux.hooks.useAppSelector((state) => state.form);

  const handlerClick = () => {
    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (message.options.length == 0 || message.includes.length == 0) {
      dispatch(redux.formData.addMessageIncludes("All Includes"));
      dispatch(redux.formData.addMessageOption("All buildings"));
    }
    //console.log(message);
    if (
      name.value == "" ||
      phone.value == "" ||
      email.value == "" ||
      !regexEmail.test(email.value)
    ) {
      if (name.value == "") {
        toast.error("Please enter your name");
        dispatch(
          redux.formData.setName({ ...name, status: StatusInput.error })
        );
        setHasError(true);
      }
      if (phone.value == "") {
        toast.error("Please enter your phone");
        dispatch(
          redux.formData.setPhone({ ...phone, status: StatusInput.error })
        );
        setHasError(true);
      }
      if (email.value == "") {
        toast.error("Please enter your email");
        dispatch(
          redux.formData.setEmail({ ...email, status: StatusInput.error })
        );
        setHasError(true);
      }
      if (email.value != "" && !regexEmail.test(email.value)) {
        toast.error("Please enter a valid email");
        dispatch(
          redux.formData.setEmail({ ...email, status: StatusInput.error })
        );
        setHasError(true);
      }
    } else {
      dispatch(redux.formData.setResponse({ ...response, status: "pending" }));
      const url = import.meta.env.PROD
        ? import.meta.env.VITE_PROD_URL_ENDPOINT
        : import.meta.env.VITE_DEV_URL_ENDPOINT;
      const formData = new FormData();

      formData.append("name", name.value);
      formData.append("email", email.value);
      formData.append("phone", phone.value);
      formData.append("ib_tags", ib_tags);
      formData.append("action", action);
      formData.append("message", JSON.stringify(message));
      //     console.log(message);
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.success) {
            dispatch(
              redux.formData.setResponse({ ...response, status: "success" })
            );
            Swal.fire({
              icon: "success",
              title: "Received",
              text: "Our team will be emailing you the requested price lists soon.",
              showConfirmButton: true,
            }).then(() => {
              const footer = document.getElementById("footer")!;
              const alink = document.createElement("a");
              alink.href =
                "https://luxlifemiamiblog.com/the-5-best-new-construction-condos-fort-lauderdale/";
              alink.target = "_blank";
              footer.appendChild(alink);
              alink.click();
            });
            setHasError(false);
            dispatch(redux.formData.resetForm());
          } else {
            dispatch(
              redux.formData.setResponse({ ...response, status: "error" })
            );
            Swal.fire({
              icon: "warning",
              title: "Upps... Something wrong",
              text: data.message,
              showConfirmButton: true,
            }).then(() => {
              dispatch(
                redux.formData.setResponse({ ...response, status: "idle" })
              );
              setHasError(true);
              if (data.error == "INVALID_EMAIL_ADDRESS") {
                dispatch(
                  redux.formData.setEmail({
                    ...email,
                    status: StatusInput.error,
                  })
                );
                toast.error("Please enter a valid email");
              }
            });
          }
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!, please try again or contact us",
          });
        });
    }
  };
  useEffect(() => {
    if (
      name.status == StatusInput.success ||
      phone.status == StatusInput.success ||
      email.status == StatusInput.success ||
      message.options.length > 0 ||
      message.includes.length > 0
    ) {
      setHasError(false);
    }
  }, [name, phone, email, message]);
  return (
    <>
      <ToastContainer />

      <Styled.FormBtn>
        <button
          onClick={handlerClick}
          className={`${hasError ? "error" : ""}`}
          disabled={hasError}
        >
          Send me the current price list
        </button>
        {response.status == "pending" && (
          <>
            <div className="container-loader">
              <span className="loader"></span>
            </div>
          </>
        )}
      </Styled.FormBtn>
    </>
  );
}

export default SendButton;
