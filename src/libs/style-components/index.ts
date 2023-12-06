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
        font-size: 1.1rem;
      }
    }
  }
  @media (min-width: 1291px) {
    h1 {
      font-size: 1.2rem;
      &.ver1 {
        font-size: 1rem;
      }
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
  background-image: url(${(props) => props.src});
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  aspect-ratio: 14/7;
`;
export const ListWrapper = styled.section`
  .neighborhood-item {
  }
  .neighborhood-item:nth-child(even) {
    background: #f1f4f7;
  }
  h2 {
    font-size: 0.75rem;
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
    height: 40px;
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
`;
export const PriceItemWraper = styled.article`
  position: absolute;
  cursor: pointer;
  .trigger-mobile {
    min-width: 17px;
    height: 17px;
    width: 17px;
    border-radius: 50px;
    background: white;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 0.7rem;
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
    bottom: 44%;
    left: 1.4%;
  }
  &.st-regis-sunny-isles {
    bottom: 54%;
    left: 8.5%;
  }
  &.bentley-residences {
    left: 15%;
    bottom: 53%;
  }
  &.rivage {
    left: 22.6%;
    bottom: 53%;
  }
  &.baia-bay {
    left: 33.3%;
    bottom: 41%;
  }
  &.perigon {
    left: 44%;
    bottom: 48%;
  }
  &.shore-club {
    left: 49.7%;
    bottom: 50%;
  }
  &.five-park {
    left: 55%;
    bottom: 51%;
  }
  &.villa-miami {
    left: 60%;
    bottom: 58%;
  }
  &.edition-residences {
    left: 65%;
    bottom: 51%;
  }
  &.cipriani {
    left: 70%;
    bottom: 56%;
  }
  &.residence-1428 {
    left: 75%;
    bottom: 53%;
  }
  &.regis {
    left: 80.3%;
    bottom: 58%;
  }
  &.vitagrove {
    left: 90%;
    bottom: 39%;
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
  // background: rgba(0, 0, 0, 0.5);
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
  background-size: 18px;
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
