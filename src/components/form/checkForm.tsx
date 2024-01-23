import { Styled } from "../../libs";
import Check from "../../../public/img/logos/check.png";

function CheckForm({
  checked,
  height,
  width,
  className,
  activeChecked,
}: {
  checked: boolean;
  height: string;
  width: string;
  className?: string;
  activeChecked: () => void;
}) {
  const isActive = checked ? " active" : "";
  return (
    <Styled.CheckWrapper
      height={height}
      width={width}
      onClick={activeChecked}
      className={`${className ? className : ""} ${isActive}`}
    >
      <img
        src={Check}
        height={height}
        width={width}
        className="check"
        alt="checked"
      />
    </Styled.CheckWrapper>
  );
}

export default CheckForm;
