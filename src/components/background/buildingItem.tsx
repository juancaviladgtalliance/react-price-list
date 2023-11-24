import { Styled, redux } from "../../libs";
import { BuildingIem } from "../../types";
import ModalComponent from "../modalComponent";

function BuildingItem({ building }: { building: BuildingIem }) {
  const dispatch = redux.hooks.useAppDispatch();
  const { order, title, prices, logo_image_url } = building;
  const {
    message: { options },
  } = redux.hooks.useAppSelector((state) => state.form);
  const { openOptions } = redux.hooks.useAppSelector((state) => state.ui);

  const hanclerClick = (title: string) => {
    if (options.includes(title)) {
      dispatch(redux.formData.removeMessageOption(title));
    } else {
      dispatch(redux.formData.addMessageOption(title));
    }
  };
  const activeClick = (order: number) => {
    if (openOptions.includes(order)) {
      dispatch(redux.ui.removeOption(order));
    } else {
      dispatch(redux.ui.addOpenOptions(order));
    }
  };
  const includeNeigborhood = options.includes(building.title) ? (
    <img src={`${logo_image_url}/img/logos/check.png`} alt={building.title} />
  ) : (
    <span>{order}</span>
  );

  const modalItem = openOptions.includes(order) ? (
    <ModalComponent
      modal={building}
      active={() => {
        hanclerClick(title);
        activeClick(order);
      }}
    />
  ) : (
    <>
      <div
        className="price-container"
        onClick={() => hanclerClick(title)}
      >{`$ ${prices.min} ${prices.max_sufix}`}</div>
      <div className="img-container" onClick={() => activeClick(order)}>
        <img src={logo_image_url} alt={title} />
      </div>
    </>
  );
  return (
    <Styled.PriceItemWraper className={building.property_style}>
      <button className="trigger-mobile" onClick={() => hanclerClick(title)}>
        {includeNeigborhood}
      </button>
      <div className="trigger-container">
        <div className="modal-section-content">{modalItem}</div>
        {options.includes(title) ? (
          <button
            className="trigger"
            onClick={() => {
              activeClick(order);
            }}
          >
            {includeNeigborhood}
          </button>
        ) : (
          <>
            <button
              className="trigger"
              onClick={() => {
                hanclerClick(title);
              }}
            >
              {includeNeigborhood}
            </button>
          </>
        )}
      </div>
    </Styled.PriceItemWraper>
  );
}

export default BuildingItem;
