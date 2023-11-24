import { Styled, redux } from "../../libs";
import { Buildingslist } from "../../constants/index";
import ListItemComponent from "./listItemComponent";

export default function ListComponent() {
  const { buildings } = Buildingslist;
  const { openOptions } = redux.hooks.useAppSelector((state) => state.ui);
  return (
    <Styled.ListWrapper>
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
