import { Background, Form, List } from "./components";
import { Styled } from "./libs";

function App() {
  return (
    <Styled.PriceListWrapper>
      <Background /> <List /> <Form />
    </Styled.PriceListWrapper>
  );
}

export default App;
