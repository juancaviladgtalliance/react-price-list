import {
  BuildingItems,
  DataForm,
  IuDataInfo,
  NeighborhoodIndex,
  PriceListTitles,
  StatusInput,
} from "../types";
export const assetUrl = import.meta.env.DEV
  ? import.meta.env.VITE_DEV_ASSET_URL
  : import.meta.env.VITE_PROD_ASSET_URL;

export const dataInitialState: DataForm = {
  ib_tags: "Price List Fort Lauderdale",
  action: "idxboost_contact_inquiry",
  name: { status: StatusInput.idle, value: "" },
  email: { status: StatusInput.idle, value: "" },
  phone: { status: StatusInput.idle, value: "" },
  message: { options: [], includes: [], another_properties: "" },
  response: { success: null, status: "idle", message: "" },
};

export const uiInitialState: IuDataInfo = {
  changeTitle: false,
  openOptions: [],
};

export const Buildingslist: BuildingItems = {
  includes: [
    { name: "Include Drone Footage", value: "drone-footage" },
    { name: "Include Condo Rankings", value: "condo-rankings" },
  ],

  buildings: [
    {
      order: 1,
      neighborhood: "Hallandale",
      target: "hallandale",
      property_style: "shell-bay-residences",
      title: "Shell Bay Residences Hallandale Beach",
      prices: { min: 2.5, min_sufix: "M+", max_sufix: "M+", max: null },
      bed_rooms: { min: 1, max: 4 },
      completation_date: 2026,
      site_url:
        "https://luxlifemiamiblog.com/condos/the-residences-at-shell-bay-in-hallandale-beach/",
      logo_image_url: `${assetUrl}/img/logos/logo1.png`,
      description: null,
      independent_review_url: null,
    },
    {
      order: 2,
      neighborhood: "Fort Lauderdale",
      target: "fort-lauderdale",
      property_style: "pierty-sixty-six",
      title: "Residences at Pier Sixty-Six Fort Lauderdale",
      prices: { min: 3.6, min_sufix: "M+", max_sufix: "M+", max: null },
      bed_rooms: { min: 2, max: 4 },
      completation_date: 2024,
      site_url:
        "https://luxlifemiamiblog.com/condos/the-residences-at-pier-sixty-six/",
      logo_image_url: `${assetUrl}/img/logos/logo2.png`,
      description: null,
      independent_review_url:
        "https://luxlifemiamiblog.com/the-residences-at-pier-66-fort-lauderdale-our-independent-review-of-this-brand-new-condo-in-fort-lauderdale/",
    },
    {
      order: 3,
      neighborhood: "Fort Lauderdale",
      target: "fort-lauderdale",
      property_style: "sixth-and-rio",
      title: "Sixth and Rio, Fort Lauderdale",
      prices: { min: 800, min_sufix: "K+", max_sufix: "M+", max: null },
      bed_rooms: { min: 1, max: 3 },
      completation_date: 2024,
      site_url:
        "https://luxlifemiamiblog.com/condos/sixth-and-rio-fort-lauderdale/",
      logo_image_url: `${assetUrl}/img/logos/logo3.png`,
      description: null,
      independent_review_url: null,
    },
    {
      order: 4,
      neighborhood: "Fort Lauderdale",
      target: "fort-lauderdale",
      property_style: "andare",
      title: "Andare",
      prices: { min: 1.6, min_sufix: "M+", max_sufix: "M+", max: null },
      bed_rooms: { min: 2, max: 4 },
      completation_date: 2027,
      site_url: "https://luxlifemiamiblog.com/condos/andare-fort-lauderdale/",
      logo_image_url: `${assetUrl}/img/logos/logo4.png`,
      description: null,
      independent_review_url: null,
    },
    {
      order: 5,
      neighborhood: "Fort Lauderdale",
      target: "fort-lauderdale",
      property_style: "selene",
      title: "Selene Fort Lauderdale",
      prices: { min: 2.5, min_sufix: "M+", max_sufix: "M+", max: null },
      bed_rooms: { min: 2, max: 4 },
      completation_date: 2024,
      site_url: "https://luxlifemiamiblog.com/condos/selene-fort-lauderdale/",
      logo_image_url: `${assetUrl}/img/logos/logo5.png`,
      description: null,
      independent_review_url: null,
    },
    {
      order: 6,
      neighborhood: "Fort Lauderdale",
      target: "fort-lauderdale",
      property_style: "the-terraces-fort-lauderdale",
      title: "The Terraces Fort Lauderdale",
      prices: { min: 2, min_sufix: "M+", max_sufix: "M+", max: null },
      bed_rooms: { min: 1, max: 3 },
      completation_date: 2023,
      site_url: "https://luxlifemiamiblog.com/condos/the-terraces/",
      logo_image_url: `${assetUrl}/img/logos/logo6.png`,
      description: null,
      independent_review_url: null,
    },
    {
      order: 7,
      neighborhood: "Fort Lauderdale",
      target: "fort-lauderdale",
      property_style: "edition-residences-fort-lauderdale",
      title: "Edition Residences, Fort Lauderdale",
      prices: { min: 2.3, min_sufix: "M+", max_sufix: "M+", max: null },
      bed_rooms: { min: 1, max: 4 },
      completation_date: 2025,
      site_url:
        "https://luxlifemiamiblog.com/condos/the-edition-residences-fort-lauderdale/",
      logo_image_url: `${assetUrl}/img/logos/logo7.png`,
      description: null,
      independent_review_url: null,
    },
    {
      order: 8,
      neighborhood: "Pompano Beach",
      target: "pompano-beach",
      property_style: "salato-pompano-beach",
      title: "Salato Pompano Beach",
      prices: { min: 1.8, min_sufix: "M+", max_sufix: "M+", max: null },
      bed_rooms: { min: 3, max: null },
      completation_date: 2025,
      site_url: "https://luxlifemiamiblog.com/condos/salato-pompano-beach/",
      logo_image_url: `${assetUrl}/img/logos/logo8.png`,
      description: null,
      independent_review_url: null,
    },
    {
      order: 9,
      neighborhood: "Pompano Beach",
      target: "pompano-beach",
      property_style: "ritz-carlton-pompano-beach",
      title: "Ritz Carlton Pompano Beach",
      prices: { min: 5.5, min_sufix: "M+", max_sufix: "M+", max: null },
      bed_rooms: { min: 1, max: 4 },
      completation_date: 2024,
      site_url:
        "https://luxlifemiamiblog.com/condos/ritz-carlton-pompano-beach/",
      logo_image_url: `${assetUrl}/img/logos/logo9.png`,
      description: null,
      independent_review_url:
        "https://luxlifemiamiblog.com/does-the-ritz-carlton-in-pompano-beach-offer-the-best-value-ocean-front-living-in-south-florida/",
    },
    {
      order: 10,
      neighborhood: "Pompano Beach",
      target: "pompano-beach",
      property_style: "waldorf-astoria-pompano-beach",
      title: "Waldorf Astoria, Pompano Beach",
      prices: { min: 2.5, min_sufix: "M+", max_sufix: "M+", max: null },
      bed_rooms: { min: 2, max: 5 },
      completation_date: 2027,
      site_url:
        "https://luxlifemiamiblog.com/condos/waldorf-astoria-residences-pompano-beach/",
      logo_image_url: `${assetUrl}/img/logos/logo10.png`,
      description: null,
      independent_review_url:
        "https://luxlifemiamiblog.com/waldorf-astoria-pompano-beach-an-independent-review/",
    },
    {
      order: 11,
      neighborhood: "Pompano Beach",
      target: "pompano-beach",
      property_style: "casamar-pompano-beach",
      title: "Casamar Pompano Beach",
      prices: { min: 2.2, min_sufix: "M+", max_sufix: "M+", max: null },
      bed_rooms: { min: 1, max: 4 },
      completation_date: 2025,
      site_url: "https://luxlifemiamiblog.com/condos/casamar-pompano-beach/",
      logo_image_url: `${assetUrl}/img/logos/logo11.png`,
      description: null,
      independent_review_url:
        "https://luxlifemiamiblog.com/casamar-pompano-beach-the-investment-value-of-casamar-in-pompano-beach/",
    },
    {
      order: 12,
      neighborhood: "Hillsboro Beach",
      target: "hillsboro-beach",
      property_style: "rosewood-residences-hillsboro-beach",
      title: "Rosewood Residences, Hillsboro Beach",
      prices: { min: 4.4, min_sufix: "M+", max_sufix: "M+", max: null },
      bed_rooms: { min: 2, max: 5 },
      completation_date: 2026,
      site_url:
        "https://luxlifemiamiblog.com/condos/rosewood-residences-hillsboro-beach/",
      logo_image_url: `${assetUrl}/img/logos/logo12.png`,
      description: null,
      independent_review_url: null,
    },
    {
      order: 13,
      neighborhood: "Boca Raton",
      target: "boca-raton",
      property_style: "alina-210-boca-raton",
      title: "Alina Residences Boca Raton | Alina 210",
      prices: { min: 4, min_sufix: "M+", max_sufix: "M+", max: 10 },
      bed_rooms: { min: 1, max: 4 },
      completation_date: 2024,
      site_url:
        "https://luxlifemiamiblog.com/condos/alina-residences-boca-raton-aline-210/",
      logo_image_url: `${assetUrl}/img/logos/logo14.png`,
      description: null,
      independent_review_url: null,
    },
    {
      order: 14,
      neighborhood: "Boca Raton",
      target: "boca-raton",
      property_style: "alina-220-boca-raton",
      title: "Alina Residences Boca Raton | Alina 220",
      prices: { min: 2, min_sufix: "M+", max_sufix: "M+", max: 10 },
      bed_rooms: { min: 1, max: 4 },
      completation_date: 2024,
      site_url:
        "https://luxlifemiamiblog.com/condos/alina-residences-boca-raton-alina-220/",
      logo_image_url: `${assetUrl}/img/logos/logo13.png`,
      description: null,
      independent_review_url: null,
    },

    {
      order: 15,
      neighborhood: "Palm Beach Gardens",
      target: "palm-beach-gardens",
      property_style: "ritz-carlton-residences-palm-beach-gardens",
      title: "Ritz Carlton Residences, Palm Beach Gardens",
      prices: { min: 4, min_sufix: "M+", max_sufix: "M+", max: null },
      bed_rooms: { min: 3, max: 5 },
      completation_date: 2025,
      site_url:
        "https://luxlifemiamiblog.com/condos/ritz-carlton-residences-palm-beach-gardens/",
      logo_image_url: `${assetUrl}/img/logos/logo15.png`,
      description: null,
      independent_review_url: null,
    },
  ],
};
export const priceListTitles: PriceListTitles = {
  appTitle: "The Best New Construction Condos in Fort Lauderdale",
  priceText: `Below is a list of what we consider the best new construction condos in Fort Lauderdale. For pricing information on select buildings, please tick the corresponding boxes.`,
  formTextMobile:
    "Above is a list of what we consider the best new construction condos in Fort Lauderdale. For pricing information on select buildings, please tick the corresponding boxes.",
};
export const neighborhoodIndex: NeighborhoodIndex[] = [
  { text: "Hallandale Beach", id: "hallandale" },
  { text: "Fort Lauderdale", id: "fort-lauderdale" },
  { text: "Pompano Beach", id: "pompano-beach" },
  { text: "Hillsboro Beach", id: "hillsboro-beach" },
  { text: "Boca Raton", id: "boca-raton" },
  { text: "Palm Beach Gardens", id: "palm-beach-gardens" },
];
