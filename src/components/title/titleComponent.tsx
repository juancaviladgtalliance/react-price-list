import { priceListTitles } from "../../constants";
import useMountTransition from "../../hooks/useTransition";
import { Styled, redux } from "../../libs";

export default function TitleComponent() {
  const { appTitle, priceText } = priceListTitles;
  const dispatch = redux.hooks.useAppDispatch();
  const { changeTitle } = redux.hooks.useAppSelector((state) => state.ui);
  const hasTransitionedIn = useMountTransition(changeTitle, 1000);
  const text = changeTitle && hasTransitionedIn ? priceText : appTitle;

  const handlerMove = () => {
    if (!changeTitle) {
      dispatch(redux.ui.setChangeTitle(true));
      setTimeout(() => {
        dispatch(redux.ui.setChangeTitle(false));
      }, 3000);
    }
  };

  return (
    <Styled.TitleWrapper>
      <h1
        className={`title${changeTitle ? " ver1" : " ver2"}`}
        onMouseEnter={handlerMove}
      >
        {text}
      </h1>
    </Styled.TitleWrapper>
  );
}
