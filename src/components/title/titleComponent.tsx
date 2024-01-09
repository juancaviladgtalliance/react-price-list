import { priceListTitles } from "../../constants";
import { Styled } from "../../libs";

export default function TitleComponent() {
  const { appTitle, priceText } = priceListTitles;

  return (
    <Styled.TitleWrapper>
      <h1>{appTitle}</h1>
      <h2>{priceText}</h2>
    </Styled.TitleWrapper>
  );
}
