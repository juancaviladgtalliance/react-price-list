import { Styled, redux } from "../../libs";
import { Buildingslist } from "../../constants";
import BuildingItem from "./buildingItem";

export default function ListComponent() {
  const dispatch = redux.hooks.useAppDispatch();
  const { changeTitle } = redux.hooks.useAppSelector((state) => state.ui);
  const { buildings } = Buildingslist;

  const handlerMove = () => {
    if (!changeTitle) {
      dispatch(redux.ui.setChangeTitle(true));
      setTimeout(() => {
        dispatch(redux.ui.setChangeTitle(false));
      }, 3000);
    }
  };
  return (
    <Styled.PriceListWrapper onMouseMove={handlerMove}>
      {buildings.map((item) => {
        return <BuildingItem key={item.order} building={item} />;
      })}
    </Styled.PriceListWrapper>
  );
}
