import styled from "styled-components";
import { assetUrl } from "../../constants/index";

export const TitleWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 30px;
  left: 0;
  text-align: center;
  z-index: 10;
  padding-top: 10px;
  padding-bottom: 10px;

  transition: all 1.5s ease-in-out;
  background: rgb(59, 76, 126);
  background: radial-gradient(
    circle,
    rgba(59, 76, 126, 1) 52%,
    rgba(255, 255, 255, 0) 100%
  );
  h1,
  h2 {
    color: #fff;
    font-family: "Open Sans", sans-serif;
    transition: opacity 1s ease, transform 1s ease;
  }
  h1 {
    text-transform: uppercase;
    font-size: 16px;
  }
  h2 {
    font-weight: 400;
    font-size: 18px;
  }
  @media (max-width: 767px) {
    padding-top: 4px;
    padding-bottom: 4px;
    top: 8px;
    h1 {
      font-size: 14px;
    }
    h2 {
      display: none;
    }
  }
  @media (min-width: 768px) and (max-width: 1290px) {
  }
  @media (min-width: 1291px) {
    h1 {
      font-weight: 700;
    }
  }
`;
export const BackgroundWrapper = styled.section<{ src: string }>`
  position: relative;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow-x: auto;
  &:scrollbar {
    display: none;
  }
  scrollbar-width: none;
  scrollbar-color: none;

  width: 100%;
  // overflow: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  .bg-slicer {
    background-image: url(${(props) => props.src});
    background-size: 100% 96%;
    background-position: bottom;
    background-repeat: no-repeat;
    height: 80vh;
    width: 270vw;

    @media (max-width: 767px) {
      height: 45vh;
      width: 350vw;
    }
    @media (min-width: 768px) and (max-width: 991px) {
      height: 45vh;
      width: 270vw;
    }
    @media (min-width: 992px) and (max-width: 1024px) {
      height: 72vh;
      width: 240vw;
    }
    @media (min-width: 1025px) and (max-width: 1190px) {
      height: 72vh;
      width: 207vw;
    }
    @media (min-width: 1191px) and (max-width: 1290px) {
      height: 72vh;
      width: 207vw;
    }
    @media (min-width: 1800px) {
      background-size: 100% 120%;
      background-position: bottom;
      background-repeat: no-repeat;
      height: 80vh;
      width: 270vw;
    }
  }
`;
export const ListWrapper = styled.section`
  .neighborhood-item {
  }
  .neighborhood-item:nth-child(even) {
    background: #f1f4f7;
  }
  h2 {
    font-size: 16px;
    line-height: 1.2;
    padding: 13px;
    text-align: center;
    font-weight: 600;
    color: #3b4c7e;
    @media (min-width: 768px) {
      font-size: 0.8rem;
    }
  }
  @media (min-width: 1291px) {
    display: none;
    .text-component {
    }
  }
  @media (min-width: 768px) {
    h2 {
      font-size: 0.8rem;
    }
  }
`;
export const ListItemWrapper = styled.article`
  border: 1px solid #e2e2e2;
  h4.price-title {
    font-weight: bolder;
  }
  p.price span {
    font-weight: 700;
    color: #3b4c7e;
  }
  .meta-text {
    span {
      font-weight: 700;
      color: #3b4c7e;
    }
  }
  .neighborhood-title {
    span.text {
      font-size: 11px;
      padding-right: 5px;
      line-height: 1.5;
    }
    display: flex;
    height: 50px;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
    flex-grow: 2;
    h3 {
      cursor: pointer;
      width: 100%;
      display: flex;
      padding-left: 10px;
      color: #333333;
      text-transform: uppercase;
      font-size: 14px;
      line-height: 1;
      font-weight: 600;
      span.text {
        font-size: 11px;
        padding-right: 5px;
        line-height: 1.5;
      }
      display: grid !important;
      grid-template-columns: 20px auto 47px;
      align-items: stretch;
      span.price {
        color: #3b4c7e;
        font-weight: 700;
        display: flex;
        align-items: center;
      }
    }
    .open-button {
      height: 30px;
      width: 30px;
      background: transparent;
      transform: rotate(180deg);
      transition: 0.5s;
      min-height: 30px;
    }
  }
  .neghborhood-buttons {
    max-width: 120px;
  }
  .neighborhood-content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
    height: 0;
    opacity: 0;
    transition: all 0.5s;
    padding: 0;
  }
  .check-list {
    border: 1px solid #2f4a7f;
  }
  &.opened {
    .open-button {
      transform: rotate(0deg);
    }
    .neighborhood-content {
      height: 107px;
      opacity: 1;
    }
  }
`;
export const PriceListWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  .price-list {
    position: relative;
  }
  button.independent-buttons {
    position: absolute;
    z-index: 30;
    bottom: 50%;
    width: 60px;
    height: 60px;
    background: transparent;
    display: block;
    transition: 0.5s;
    svg {
      fill: white !important;
      filter: drop-shadow(0px 1px 1px black);
      height: 45px;
    }
    @media (max-width: 767px) {
      bottom: 30%;
      width: 30px;
      height: 30px;
      svg {
        height: 20px;
      }
    }
  }

  .arrow-independent-left {
    left: 10px;
    @media (max-width: 767px) {
      left: 0px;
    }
  }
  .arrow-independent-right {
    right: 10px;
    @media (max-width: 767px) {
      right: 0px;
    }
  }
  .opacity-disabled {
    opacity: 0;
  }
`;
export const PriceItemWraper = styled.article`
  position: absolute;
  cursor: pointer;
  .select-building {
    display: flex;
    justify-content: space-between;
    gap: 3px;
    font-size: 0.6rem;
    background: #d1e5f9;
    align-items: center;
    width: 100%;
    font-weight: 600;
    padding: 3px;
    letter-spacing: -0.7px;
    line-height: 1;
  }
  .trigger-mobile {
    min-width: 30px;
    height: 30px;
    width: 30px;
    border-radius: 50px;
    background: white;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 1rem;
    @media (min-width: 1291px) {
      display: none;
    }
  }
  .trigger-container {
    width: 4.7vw;
    min-width: 70px;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    .price-container {
      background: #d1e5f9;
      text-align: center;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
      margin-bottom: 7px;
      font-size: 0.8rem;
      font-weight: 700;
      color: #333;
    }
    @media (max-width: 1290px) {
      display: none;
    }
    .img-container {
      background-color: white;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
  }
  .trigger {
    display: block;
    border-radius: 50px;
    background-color: transparent;
    font-size: 0;
    min-width: 30px;
    height: 30px;
    width: 30px;
    background-image: url(${assetUrl}/img/logos/circulo-icon.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    @media (max-width: 1290px) {
      display: none;
    }
    @media (min-width: 1600px) {
      min-width: 40px;
      height: 40px;
      width: 40px;
    }
  }
  &.shell-bay-residences {
    bottom: 65%;
    left: 1.1%;
  }
  &.pierty-sixty-six {
    bottom: 49%;
    left: 8%;
  }
  &.sixth-and-rio {
    bottom: 58%;
    left: 18.1%;
  }
  &.andare {
    bottom: 65%;
    left: 22%;
  }
  &.selene {
    bottom: 64%;
    left: 26.5%;
  }
  &.the-terraces-fort-lauderdale {
    bottom: 58%;
    left: 30.3%;
  }
  &.edition-residences-fort-lauderdale {
    bottom: 54%;
    left: 37%;
  }
  &.salato-pompano-beach {
    bottom: 58%;
    left: 47%;
  }
  &.ritz-carlton-pompano-beach {
    bottom: 63%;
    left: 53%;
  }
  &.waldorf-astoria-pompano-beach {
    bottom: 65%;
    left: 58.5%;
  }
  &.casamar-pompano-beach {
    bottom: 57%;
    left: 63.3%;
  }
  &.rosewood-residences-hillsboro-beach {
    bottom: 55%;
    left: 71%;
  }
  &.alina-210-boca-raton {
    bottom: 54%;
    left: 77.3%;
  }
  &.alina-220-boca-raton {
    bottom: 54%;
    left: 83%;
  }
  &.palm-beach-gardens {
    bottom: 54%;
    left: 1.1%;
  }
  &.ritz-carlton-residences-palm-beach-gardens {
    bottom: 54%;
    left: 92.2%;
  }
`;
export const ModalItemWrapper = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;
  width: 13vw;
  z-index: 11;
  padding: 15px;
  bottom: 50px;
  left: -4vw;
  min-width: 150px;
  font-size: 0.75rem;
  text-align: center;
  animation: fade 0.5s ease 0s 1 normal forwards;
  .close-modal {
    position: absolute;
    top: 5px;
    right: 5px;
    button {
      background-color: transparent;
    }
  }
  h4.price-title {
    font-weight: bolder;
  }
  .meta-text {
    span {
      font-weight: 700;
      color: #3b4c7e;
    }
  }
  p.price span {
    font-weight: 700;
    color: #3b4c7e;
  }

  .logo-modal-container {
    max-width: 130px;
    margin: auto;
    cursor: pointer;
  }
  .modal-button {
    display: block;
    min-width: 100%;
    button {
      width: 100%;
      padding: 5px;
      display: block;
      border-radius: 5px;
      background-color: #3b4c7e;
      color: white;
      text-transform: uppercase;
    }
  }
`;
export const FormWrapper = styled.section`
  width: 100%;
  input[type="text"] {
    width: 100%;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #2f4a7f;
    padding: 3px;
    color: #2f4a7f;
    margin-bottom: 10px;
    padding-left: 40px;
    background-repeat: no-repeat;
    background-position: 10px;
    font-size: 0.8rem;
    background-size: 18px;
  }
  input.name {
    background-image: url(${assetUrl}/img/user.svg);
  }
  input.email {
    background-image: url(${assetUrl}/img/email.svg);
  }
  input.phone {
    background-image: url(${assetUrl}/img/phone.svg);
  }
  input[type="text"]:placeholder {
    color: #2f4a7f;
  }
  input[type="text"].alert {
    border: 1px solid red;
  }
  .form-text {
    display: none;
  }
  @media (min-width: 1120px) {
    .form-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      max-width: 1500px;
      margin: auto;
    }
  }
  @media (max-width: 1291px) {
    background: #37344f;
    padding: 10px;
    .form-text {
      display: block;
      color: #fff;
      margin-bottom: 20px;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      font-size: 16px;
    }
  }
  @media (min-width: 1292px) {
    padding: 10px;
    position: absolute;
    bottom: 0px;
  }
  @media (min-width: 1800px) {
    bottom: 0;
    padding-bottom: 20px;
    padding-top: 15px;
    input[type="text"] {
      height: 40px;
      font-size: 1rem;
      padding: 0 1rem;
      padding-left: 40px;
    }
  }
`;
export const IncludeInput = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  background: #d3dfee;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 3px;
  align-items: center;
  gap: 10px;
  height: 40px;
  font-size: 1rem;
  background-size: 18px;

  &:last-type {
    margin-bottom: 0;
  }
  h3 {
    cursor: pointer;
    font-size: 0.8rem;
  }
  button {
    border: 1px solid #2f4a7f;
  }
  @media (min-width: 1119px) and (max-width: 1800px) {
    height: 30px;
    font-size: 0.8rem;

    button {
      height: 20px;
      width: 20px;
      img {
        height: 20px;
        width: 20px;
      }
    }
  }
`;
export const CheckWrapper = styled.button<{
  height: string;
  width: string;
}>`
  appearance: none;
  background-color: transparent;
  outline: none;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  min-height: ${(props) => props.height};
  min-width: ${(props) => props.width};
  border: none;
  cursor: pointer;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  background: white;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(59, 76, 126, 0.5) 20%,
    rgba(255, 255, 255, 1) 50% rgba(59, 76, 126, 1) 76%
  );
  border: 1px solid #2f4a7f29;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: all 0.2s ease-in-out;
    opacity: 0;
    transform: rotate3d(1, 1, 1, 45deg);
  }
  &.active {
    img {
      opacity: 1;
      transform: rotate3d(1, 1, 1, 0) scale(1.5);
      background: #2f4a7f;
    }
  }
`;
export const TextAreaWrapper = styled.label`
  background: #d3dfee;
  border-radius: 5px;
  border: 1px solid #2f4a7f;
  overflow: hidden;
  margin-bottom: 10px;
  h3 {
    color: #2f4a7f;
    padding: 9px;
    text-align: center;
    font-size: 0.8rem;
    font-weight: 500;
    text-transform: uppercase;
  }
  display: block;
  width: 100%;
  textarea {
    width: 100%;
    height: 49px;
    font-size: 1rem;
    margin: 0;
    position: relative;
    bottom: -3px;
    font-size: 0.8rem;
    text-align: center;
    padding-top: 7px;
  }
  @media (min-width: 1119px) and (max-width: 1800px) {
    textarea {
      height: 30px;
      font-size: 0.8rem;
    }
  }
`;
export const FormBtn = styled.div`
  button {
    background-color: #2f4a7f;
    color: white;
    border-radius: 5px;
    height: 40px;
    display: flex;
    font-size: 14px;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: 700;
    transition: all 0.5s ease-in-out;
    width: 100%;
    @media (min-width: 1119px) and (max-width: 1800px) {
      height: 30px;
    }
    &:disabled {
      cursor: not-allowed;
    }
    &.error {
      background-color: red;
      &:hover {
        background-color: red;
      }
    }
    &:hover {
      background-color: #39374f;
    }
  }
  .container-loader {
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    z-index: 99;
    top: 0;
    left: 0;
    background-color: rgba(47 74 127/0.5);
    .loader {
      width: 48px;
      height: 48px;
      border: 5px solid #fff;
      border-bottom-color: orange;
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export const ListNeighborhoodWrapper = styled.div`
  position: relative;
  width: 100%;
  left: 0;
  bottom: 25%;
  @media (min-width: 1800px) {
    bottom: 30%;
  }
  .list-neighborhood {
    display: inline-block;
    padding: 10px;
    h3 {
      background-color: rgb(118, 134, 124);
      padding: 5px;
      color: white;
      font-size: 15px;
      text-align: center;
      border-radius: 5px;
    }
    padding: 2px;
    h3 {
      font-size: 15px;
    }
    &#hallandale {
      h3 {
        min-width: 12vw;
      }
    }
    &#fort-lauderdale {
      h3 {
        min-width: 105vw;
      }
    }
    &#pompano-beach {
      h3 {
        min-width: 65vw;
      }
    }
    &#hillsboro-beach {
      h3 {
        min-width: 25vw;
      }
    }
    &#boca-raton {
      h3 {
        min-width: 30vw;
      }
    }
    &#palm-beach-gardens {
      h3 {
        min-width: 30vw;
      }
    }
    @media (max-width: 435px) {
      padding: 1vw;
      h3 {
        font-size: 9px;
      }
      &#hallandale {
        h3 {
          min-width: 12vw;
        }
      }
      &#fort-lauderdale {
        h3 {
          min-width: 122vw;
        }
      }
      &#pompano-beach {
        h3 {
          min-width: 86vw;
        }
      }
      &#hillsboro-beach {
        h3 {
          min-width: 31vw;
        }
      }
      &#boca-raton {
        h3 {
          min-width: 33vw;
        }
      }
      &#palm-beach-gardens {
        h3 {
          min-width: 40vw;
        }
      }
    }
    @media (min-width: 436px) and (max-width: 767px) {
      padding: 2px;
      h3 {
        font-size: 9px;
      }
      &#hallandale {
        h3 {
          min-width: 12vw;
        }
      }
      &#fort-lauderdale {
        h3 {
          min-width: 132vw;
        }
      }
      &#pompano-beach {
        h3 {
          min-width: 91vw;
        }
      }
      &#hillsboro-beach {
        h3 {
          min-width: 31vw;
        }
      }
      &#boca-raton {
        h3 {
          min-width: 39vw;
        }
      }
      &#palm-beach-gardens {
        h3 {
          min-width: 38vw;
        }
      }
    }
    @media (min-width: 768px) and (max-width: 991px) {
      padding: 2px;
      h3 {
        font-size: 12px;
      }
      &#hallandale {
        h3 {
          min-width: 12vw;
        }
      }
      &#fort-lauderdale {
        h3 {
          min-width: 102vw;
        }
      }
      &#pompano-beach {
        h3 {
          min-width: 68vw;
        }
      }
      &#hillsboro-beach {
        h3 {
          min-width: 22vw;
        }
      }
      &#boca-raton {
        h3 {
          min-width: 28vw;
        }
      }
      &#palm-beach-gardens {
        h3 {
          min-width: 30vw;
        }
      }
    }
    @media (min-width: 992px) and (max-width: 1024px) {
      padding: 2px;
      h3 {
        font-size: 12px;
      }
      &#hallandale {
        h3 {
          min-width: 8vw;
        }
      }
      &#fort-lauderdale {
        h3 {
          min-width: 92vw;
        }
      }
      &#pompano-beach {
        h3 {
          min-width: 60vw;
        }
      }
      &#hillsboro-beach {
        h3 {
          min-width: 22vw;
        }
      }
      &#boca-raton {
        h3 {
          min-width: 25vw;
        }
      }
      &#palm-beach-gardens {
        h3 {
          min-width: 25vw;
        }
      }
    }
    @media (min-width: 1025px) and (max-width: 1190px) {
      padding: 2px;
      h3 {
        font-size: 12px;
      }
      &#hallandale {
        h3 {
          min-width: 12vw;
        }
      }
      &#fort-lauderdale {
        h3 {
          min-width: 78vw;
        }
      }
      &#pompano-beach {
        h3 {
          min-width: 49vw;
        }
      }
      &#hillsboro-beach {
        h3 {
          min-width: 19vw;
        }
      }
      &#boca-raton {
        h3 {
          min-width: 22vw;
        }
      }
      &#palm-beach-gardens {
        h3 {
          min-width: 22vw;
        }
      }
    }
    @media (min-width: 1191px) and (max-width: 1290px) {
      padding: 2px;
      h3 {
        font-size: 12px;
      }
      &#hallandale {
        h3 {
          min-width: 12vw;
        }
      }
      &#fort-lauderdale {
        h3 {
          min-width: 78vw;
        }
      }
      &#pompano-beach {
        h3 {
          min-width: 49vw;
        }
      }
      &#hillsboro-beach {
        h3 {
          min-width: 19vw;
        }
      }
      &#boca-raton {
        h3 {
          min-width: 22vw;
        }
      }
      &#palm-beach-gardens {
        h3 {
          min-width: 22vw;
        }
      }
    }
    @media (min-width: 1800px) {
      font-size: 18px;
    }
  }
`;
export const ModalInfoWrapper = styled.div`
  transition: position 1s;
  &.modaled {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    .button-control {
      padding: 10px;
    }
    .modal-content {
      &:after {
        display: none;
      }
    }
  }
  .change-state {
    padding: 5px;
    border-radius: 5px;
    background-color: #41528e;
    color: white;
    font-weight: 700;
    width: 120px;
    text-align: center;
  }
  .modal {
    position: relative;
    justify-content: flex-end;
    display: flex;

    .modal-content {
      margin: 11px;
      background: white;
      padding: 13px;
      text-align: center;
      font-size: 0.8rem;
      border-radius: 5px;
      max-width: 260px;
      color: #41528e;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        height: 15px;
        width: 15px;
        background: white;
        top: calc(50% - 7px);
        transform: rotate(45deg);
        right: -8px;
      }
      @media (min-width: 1500px) {
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 1119px) {
    display: none;
  }
`;
