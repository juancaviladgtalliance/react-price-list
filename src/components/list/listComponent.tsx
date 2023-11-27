import { Styled, redux } from "../../libs";
import { Buildingslist, priceListTitles } from "../../constants";
import ListItemComponent from "./listItemComponent";

export default function ListComponent() {
  const { buildings } = Buildingslist;
  const { openOptions } = redux.hooks.useAppSelector((state) => state.ui);
  const { priceText } = priceListTitles;

  return (
    <Styled.ListWrapper>
      <div className="text-component">
        <h2>{priceText}</h2>
      </div>
      {buildings.map((item) => {
        const isOpened = openOptions.includes(item.order) ? true : false;
        return (
          <ListItemComponent
            opened={isOpened}
            key={item.order}
            building={item}
          />
        );
      })}
    </Styled.ListWrapper>
  );
}
