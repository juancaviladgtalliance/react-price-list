import { assetUrl } from "../../constants";
import { Styled } from "../../libs";
import TitleComponent from "../title/titleComponent";
import ListComponent from "./listComponent";

export default function BackgroundComponent() {
  return (
    <Styled.BackgroundWrapper src={`${assetUrl}/img/price-list-bg.jpg`}>
      <TitleComponent />
      <ListComponent />
    </Styled.BackgroundWrapper>
  );
}
