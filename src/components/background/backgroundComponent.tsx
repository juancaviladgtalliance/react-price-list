import { useEffect } from "react";
import { assetUrl } from "../../constants";
import { Styled } from "../../libs";
import TitleComponent from "../title/titleComponent";
import ListComponent from "./listComponent";
import ListNeighborhood from "../listNeighborhood";

export default function BackgroundComponent() {
  useEffect(() => {
    let scrollAmount: number = 0;
    function sideScroll(
      element: Element,
      direction: string,
      speed: number,
      distance: number,
      step: number
    ) {
      scrollAmount = 0;
      const slideTimer = setInterval(function () {
        if (direction == "left") {
          element.scrollLeft -= step;
        } else {
          element.scrollLeft += step;
        }
        scrollAmount += step;
        // console.log(scrollAmount);
        if (scrollAmount >= distance) {
          window.clearInterval(slideTimer);
        }
      }, speed);
    }
    const scrollContainer = document.querySelector(".review-wrapper")!;
    const arrowLeft = document.querySelector(".arrow-independent-left")!;
    const arrowRight = document.querySelector(".arrow-independent-right")!;
    const slideItem = document.querySelector(".bg-slicer")!;

    //detect scrolling
    scrollContainer?.addEventListener("scroll", () => {
      const slideWidth = slideItem.clientWidth;
      const width = (slideItem.parentNode! as HTMLElement).clientWidth;
      const scrollType = slideItem.parentNode! as HTMLElement;
      const scrollDistance = scrollType.scrollLeft + scrollType.clientWidth;

      if (scrollDistance == width) {
        if (!arrowLeft.classList.contains("opacity-disabled")) {
          arrowLeft.classList.add("opacity-disabled");
        }
      }
      if (scrollDistance > width) {
        if (arrowLeft.classList.contains("opacity-disabled")) {
          arrowLeft.classList.remove("opacity-disabled");
        }
      }
      if (scrollDistance == slideWidth) {
        if (!arrowRight.classList.contains("opacity-disabled")) {
          arrowRight.classList.add("opacity-disabled");
        }
      }

      if (scrollDistance !== slideWidth) {
        if (arrowRight.classList.contains("opacity-disabled")) {
          arrowRight.classList.remove("opacity-disabled");
        }
      }
    });
    arrowLeft?.addEventListener("click", () => {
      sideScroll(scrollContainer!, "left", 10, 100, 10);
    });
    arrowRight?.addEventListener("click", () => {
      sideScroll(scrollContainer!, "right", 25, 100, 10);
    });
  }, []);

  return (
    <div className="price-list">
      <TitleComponent />
      <Styled.BackgroundWrapper
        className="review-wrapper"
        src={`${assetUrl}/img/price-list-fortlauder-bg.jpg`}
      >
        <div className="bg-slicer">
          <ListComponent />
          <ListNeighborhood />
        </div>
      </Styled.BackgroundWrapper>
      <button className="arrow-independent-left independent-buttons opacity-disabled">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            style={{ fill: "#323046" }}
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
          />
        </svg>
      </button>
      <button className="arrow-independent-right independent-buttons">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            style={{ fill: "#323046" }}
            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
          />
        </svg>
      </button>
    </div>
  );
}
