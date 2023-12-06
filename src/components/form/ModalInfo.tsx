import { useState } from "react";
import { Styled } from "../../libs";
export default function ModalInfo() {
  const [show, setShow] = useState(true);
  return (
    <Styled.ModalInfoWrapper className={show ? "modaled" : ""}>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-text">
            <b>After choosing the buildings</b>
            <br /> you are interested in, <b>fill out the form</b> and we will
            send you all the information.
          </div>
          {show && (
            <div className="button-control">
              <button onClick={() => setShow(false)} className="change-state">
                Accept
              </button>
            </div>
          )}
        </div>
      </div>
    </Styled.ModalInfoWrapper>
  );
}
