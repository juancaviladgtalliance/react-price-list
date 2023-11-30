import styled from "styled-components";
import { assetUrl } from "../../constants/index";

export const TitleWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 40px;
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
  h1 {
    color: #fff;
    font-family: "Open Sans", sans-serif;
    transition: opacity 1s ease, transform 1s ease;
    @media (max-width: 767px) {
      font-size: 0.6rem;
      padding: 5px;
    }
    .ver1 {
      animation: fade 2s ease 0s 1 normal forwards;
    }
    .ver2 {
      animation: revfade 2s ease 0s 1 normal forwards;
    }
  }
  @media (max-width: 767px) {
    top: 10px;
    padding-top: 3px;
    padding-bottom: 3px;
    .title {
      display: none;
    }
    .no-title {
      font-size: 16px;
    }
  }
  @media (min-width: 768px) and (max-width: 1290px) {
    h1 {
      font-size: 0px;
      &.ver1,
      span.title {
        font-size: 0rem !important;
      }
      .no-title {
        font-size: 1.5rem;
      }
    }
  }
  @media (min-width: 1291px) {
    h1 {
      font-size: 1.5rem;
      .no-title {
        display: none;
      }
    }
  }
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes revfade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
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
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    height: 98vh;
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
  }
`;
export const ListWrapper = styled.section`
  .neighborhood-item {
  }
  .neighborhood-item:nth-child(even) {
    background: #f1f4f7;
  }
  h2 {
    font-size: 0.8rem;
    line-height: 1.2;
    padding: 15px;
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
    bottom: 51%;
    left: 1.1%;
  }
  &.pierty-sixty-six {
    bottom: 39%;
    left: 8%;
  }
  &.sixth-and-rio {
    bottom: 45%;
    left: 18.1%;
  }
  &.andare {
    bottom: 50%;
    left: 22%;
  }
  &.selene {
    bottom: 49%;
    left: 26.5%;
  }
  &.the-terraces-fort-lauderdale {
    bottom: 45%;
    left: 30.3%;
  }
  &.edition-residences-fort-lauderdale {
    bottom: 42%;
    left: 37%;
  }
  &.salato-pompano-beach {
    bottom: 43%;
    left: 47%;
  }
  &.ritz-carlton-pompano-beach {
    bottom: 48%;
    left: 53%;
  }
  &.waldorf-astoria-pompano-beach {
    bottom: 51%;
    left: 58.5%;
  }
  &.casamar-pompano-beach {
    bottom: 45%;
    left: 63.3%;
  }
  &.rosewood-residences-hillsboro-beach {
    bottom: 42%;
    left: 71%;
  }
  &.alina-220-boca-raton {
    bottom: 43%;
    left: 77.3%;
  }
  &.alina-210-boca-raton {
    bottom: 42%;
    left: 83%;
  }
  &.palm-beach-gardens {
    bottom: 51%;
    left: 1.1%;
  }
  &.ritz-carlton-residences-palm-beach-gardens {
    bottom: 43%;
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
  background: rgba(0, 0, 0, 0.5);
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
      grid-template-columns: repeat(3, 1fr);
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
      font-size: 12px;
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

  button {
    height: 35px;
    width: 35px;
    img {
      height: 35px;
      width: 35px;
    }
  }
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
  src: string;
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
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  background-image: url(${(props) => props.src});
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
      transform: rotate3d(1, 1, 1, 0);
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
