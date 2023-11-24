import { Styled, redux } from "../libs";
import { BuildingIem } from "../types";

function ModalComponent({
  modal,
  active,
}: {
  modal: BuildingIem;
  active: (title: string) => void;
}) {
  const { title, prices, bed_rooms, completation_date, logo_image_url } = modal;
  const {
    message: { options },
  } = redux.hooks.useAppSelector((state) => state.form);
  return (
    <Styled.ModalItemWrapper>
      <div className="left-section neghborhood-data">
        <div className="constr-price">
          <div className="logo-modal-container">
            <img src={logo_image_url} alt={title} />
          </div>
          <h4 className="price-title">Price</h4>
          <p className="price">
            <span>
              {prices.min}
              {prices.min_sufix}
            </span>
            {prices.max && (
              <span>
                {" "}
                to {prices.max}
                {prices.max_sufix}
              </span>
            )}
          </p>
        </div>
        <div className="constr-data">
          <p className="meta-text">
            Bedrooms: <span>{bed_rooms.min}</span>
            {bed_rooms.max && (
              <>
                {" "}
                to <span> {bed_rooms.max}</span>
              </>
            )}
          </p>
          <p className="meta-text">
            Completion Date: <span>{completation_date}</span>
          </p>
        </div>
      </div>
      <div className="modal-button">
        <button onClick={() => active(title)}>
          {options.includes(title) ? "Remove" : "Choose"} <br />
          Property
        </button>
      </div>
    </Styled.ModalItemWrapper>
  );
}

export default ModalComponent;
