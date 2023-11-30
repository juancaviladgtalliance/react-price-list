import { neighborhoodIndex } from "../../constants";
import { Styled } from "../../libs";
import ListNeighborhoodItem from "./listNeighborhoodItem";

//<ListNeighborhoodItem />
export default function ListNeighborhood() {
  return (
    <Styled.ListNeighborhoodWrapper>
      {neighborhoodIndex.map((item) => {
        return (
          <ListNeighborhoodItem key={item.id} text={item.text} id={item.id} />
        );
      })}
    </Styled.ListNeighborhoodWrapper>
  );
}
