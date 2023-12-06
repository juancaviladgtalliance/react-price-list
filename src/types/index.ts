export interface DataForm {
  ib_tags: string;
  action: "idxboost_contact_inquiry";
  name: InputData;
  email: InputData;
  phone: InputData;
  message: MesageData;
  response: DataFormResponse;
}
export enum StatusInput {
  idle = "idle",
  success = "success",
  error = "error",
}
export interface InputData {
  status: StatusInput;
  value: string;
}
export interface PriceListTitles {
  appTitle: string;
  priceText: string;
  formTextMobile: string;
}
export interface DataFormResponse {
  success: null | boolean;
  status: StatusResponse;
  message: string;
}
export type StatusResponse = "idle" | "success" | "error" | "pending";
export interface MesageData {
  options: string[];
  includes: string[];
  another_properties: string;
}

export interface IuDataInfo {
  changeTitle: boolean;
  openOptions: number[];
  activeModal: boolean;
}
export interface RangePriceItem {
  min: number;
  minSimbol: string;
  max: number;
  maxSimbol: string;
}
export interface BuildingIem {
  order: number;
  neighborhood: string;
  target: string;
  property_style: string;
  title: string;
  prices: {
    min: number | null;
    min_sufix: string;
    max_sufix: string;
    max: number | null;
  };
  bed_rooms: { min: number | null; max: number | null };
  completation_date: number;
  site_url: string;
  logo_image_url: string;
  description: string | null;
  independent_review_url: string | null;
}
export interface IncludesTypes {
  value: string;
  name: string;
}
export interface BuildingItems {
  includes: IncludesTypes[];
  buildings: BuildingIem[];
}
export interface NeighborhoodIndex {
  text: string;
  id: string;
}
