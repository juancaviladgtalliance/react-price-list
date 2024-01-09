import { Styled } from "../../libs";
import { Buildingslist } from "../../constants";
import BuildingItem from "./buildingItem";

export default function ListComponent() {
  const { buildings } = Buildingslist;

  return (
    <Styled.PriceListWrapper>
      {buildings.map((item) => {
        return <BuildingItem key={item.order} building={item} />;
      })}
    </Styled.PriceListWrapper>
  );
}
