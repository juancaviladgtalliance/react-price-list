import { Styled, redux } from "../../libs";
import { BuildingIem } from "../../types";
//import ModalComponent from "../modalComponent";
import Check from "../../../public/img/logos/check.png";
import CheckForm from "../form/checkForm";

function BuildingItem({ building }: { building: BuildingIem }) {
  const dispatch = redux.hooks.useAppDispatch();
  const { order, title, prices, logo_image_url } = building;
  const {
    message: { options },
  } = redux.hooks.useAppSelector((state) => state.form);
  // const { openOptions } = redux.hooks.useAppSelector((state) => state.ui);
  const checkOption = options.includes(title) ? true : false;

  const hanclerClick = (title: string) => {
    if (options.includes(title)) {
      dispatch(redux.formData.removeMessageOption(title));
    } else {
      dispatch(redux.formData.addMessageOption(title));
    }
  };
  /* const activeClick = (order: number) => {
    if (openOptions.includes(order)) {
      dispatch(redux.ui.removeOption(order));
    } else {
      dispatch(redux.ui.addOpenOptions(order));
    }
  }; */
  const includeNeigborhood = options.includes(building.title) ? (
    <img src={Check} alt={building.title} />
  ) : (
    <span>{order}</span>
  );

  const modalItem = (
    <>
      <div
        className="price-container"
        onClick={() => hanclerClick(title)}
      >{`$ ${prices.min}M+`}</div>
      <div className="img-container" onClick={() => hanclerClick(title)}>
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
        <div className="select-building">
          <CheckForm
            checked={checkOption}
            height="20px"
            width="20px"
            className="check-list"
            activeChecked={() => hanclerClick(title)}
          />
          <span onClick={() => hanclerClick(title)}>Send me prices</span>
        </div>
      </div>
    </Styled.PriceItemWraper>
  );
}

export default BuildingItem;
