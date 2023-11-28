import { Styled, redux } from "../../libs";
import { BuildingIem } from "../../types";
import CheckForm from "../form/checkForm";
import Chevron from "../../../public/img/chevron.svg";

export default function ListItemComponent({
  building,
  opened,
}: {
  building: BuildingIem;
  opened: boolean;
}) {
  const { order, title, prices, bed_rooms, completation_date, logo_image_url } =
    building;
  const dispatch = redux.hooks.useAppDispatch();
  const {
    message: { options },
  } = redux.hooks.useAppSelector((state) => state.form);

  const className = opened ? " opened" : "";
  const openClick = (order: number) => {
    if (opened) {
      dispatch(redux.ui.removeOption(order));
    } else {
      dispatch(redux.ui.addOpenOptions(order));
    }
  };
  const addOptionClick = (neighborhoodTitle: string) => {
    if (options.includes(neighborhoodTitle)) {
      dispatch(redux.formData.removeMessageOption(neighborhoodTitle));
    } else {
      dispatch(redux.formData.addMessageOption(neighborhoodTitle));
    }
  };
  const includeNeigborhood = options.includes(title) ? true : false;

  return (
    <Styled.ListItemWrapper className={`neighborhood-item${className}`}>
      <div className="neighborhood-title ">
        <CheckForm
          checked={includeNeigborhood}
          height="30px"
          width="30px"
          className="check-list"
          activeChecked={() => addOptionClick(title)}
        />
        <h3 onClick={() => openClick(order)}>
          <span>{order}.</span> <span className="text">{title}</span>{" "}
          <span className="price">{`$${prices.min}`}M+</span>
        </h3>
        <button className="open-button" onClick={() => openClick(order)}>
          {" "}
          <img src={Chevron} alt={title} />{" "}
        </button>
      </div>
      <div className="neighborhood-content">
        <div className="left-section neghborhood-data">
          <div className="constr-price">
            <h4 className="price-title">Price</h4>
            <p className="price">
              <span>
                {`$${prices.min}`}
                {prices.min_sufix}
              </span>
              {prices.max && (
                <>
                  {" "}
                  to{" "}
                  <span>
                    {`$${prices.max}`}
                    {prices.max_sufix}
                  </span>
                </>
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
        <div className="right-section neghborhood-buttons">
          <img src={logo_image_url} alt={title} />
        </div>
      </div>
    </Styled.ListItemWrapper>
  );
}
