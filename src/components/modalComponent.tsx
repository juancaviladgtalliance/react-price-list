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
  const dispatch = redux.hooks.useAppDispatch();
  const {
    message: { options },
  } = redux.hooks.useAppSelector((state) => state.form);
  return (
    <Styled.ModalItemWrapper>
      <div className="close-modal">
        <button onClick={() => dispatch(redux.ui.removeOption(modal.order))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>
      </div>
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
