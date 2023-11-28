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
  ib_tags: "Price List",
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
      prices: { min: 2.5, min_sufix: "M", max_sufix: "M+", max: 10 },
      bed_rooms: { min: 1, max: 4 },
      completation_date: 2026,
      site_url:
        "https://luxlifemiamiblog.com/condos/the-residences-at-shell-bay-in-hallandale-beach/",
      logo_image_url: `${assetUrl}/img/logos/logo14.png`,
      description: null,
      independent_review_url: null,
    },
    {
      order: 2,
      neighborhood: "Sunny Isles",
      target: "sunny-isles",
      property_style: "st-regis-sunny-isles",
      title: "St Regis Sunny Isles",
      prices: { min: 5, min_sufix: "M", max_sufix: "M+", max: 26 },
      bed_rooms: { min: 2, max: 5 },
      completation_date: 2026,
      site_url: "https://luxlifemiamiblog.com/condos/st-regis-sunny-isles/",
      logo_image_url: `${assetUrl}/img/logos/logo12.png`,
      description: null,
      independent_review_url:
        "https://luxlifemiamiblog.com/the-independent-review-of-the-st-regis-sunny-isles-beach/",
    },
    {
      order: 3,
      neighborhood: "Sunny Isles",
      target: "sunny-isles",
      property_style: "bentley-residences",
      title: "Bentley Residences Miami",
      prices: { min: 5.7, min_sufix: "M", max_sufix: "M+", max: 25 },
      bed_rooms: { min: 3, max: null },
      completation_date: 2026,
      site_url: "https://luxlifemiamiblog.com/condos/bentley-residences-miami/",
      logo_image_url: `${assetUrl}/img/logos/logo13.png`, ///public/img/logos/logo13.png
      description: null,
      independent_review_url:
        "https://luxlifemiamiblog.com/bentley-residences-sunny-isles-an-independent-review/",
    },
    {
      order: 4,
      neighborhood: "Surfside, Bal Harbour and Bay Harbor",
      target: "surfside",
      property_style: "rivage",
      title: "Rivage Bal Harbour",
      prices: { min: 7, min_sufix: "M", max_sufix: "M+", max: 21 },
      bed_rooms: { min: 3, max: 4 },
      completation_date: 2026,
      site_url: "https://luxlifemiamiblog.com/condos/rivage-bal-harbour/",
      logo_image_url: `${assetUrl}/img/logos/logo2.png`, ///public/img/logos/logo2.png,
      description: null,
      independent_review_url:
        "https://luxlifemiamiblog.com/rivage-in-bal-harbour-is-this-the-best-new-construction-condo-for-bal-harbour-and-surfside/",
    },
    {
      order: 5,
      neighborhood: "Surfside, Bal Harbour and Bay Harbor",
      target: "surfside",
      property_style: "baia-bay",
      title: "La Baia North",
      prices: { min: 1.3, min_sufix: "M", max_sufix: "M", max: 5 },
      bed_rooms: { min: 2, max: 4 },
      completation_date: 2024,
      site_url: "https://luxlifemiamiblog.com/condos/la-baia-north-bay-harbor/",
      logo_image_url: `${assetUrl}/img/logos/logo1.png`, ///public/img/logos/logo1.png
      description: null,
      independent_review_url:
        "https://luxlifemiamiblog.com/la-baia-bay-harbor-islands-an-independent-review/",
    },
    {
      order: 6,
      neighborhood: "Miami Beach",
      target: "miami-beach",
      property_style: "perigon",
      title: "The Perigon",
      prices: {
        min: 4,
        min_sufix: "M",
        max_sufix: "M+",
        max: 37,
      },
      bed_rooms: { min: 2, max: 5 },
      completation_date: 2025,
      site_url: "https://luxlifemiamiblog.com/condos/the-perigon-miami-beach/",
      logo_image_url: `${assetUrl}/img/logos/logo9.png`, ///public/img/logos/logo9.png
      description: null,
      independent_review_url:
        "https://luxlifemiamiblog.com/the-perigon-miami-beach-an-independent-review/",
    },
    {
      order: 7,
      neighborhood: "Miami Beach",
      target: "miami-beach",
      property_style: "shore-club",
      title: "Shore Club",
      prices: { min: 6, min_sufix: "M", max_sufix: "M+", max: 35 },
      bed_rooms: { min: 2, max: 4 },
      completation_date: 2026,
      site_url:
        "https://luxlifemiamiblog.com/condos/shore-club-private-collection/",
      logo_image_url: `${assetUrl}/img/logos/logo10.png`, //public/img/logos/logo10.png
      description: null,
      independent_review_url:
        "https://luxlifemiamiblog.com/the-residences-at-the-shore-club-private-collection-in-miami-beach/",
    },
    {
      order: 8,
      neighborhood: "Miami Beach",
      target: "miami-beach",
      property_style: "five-park",
      title: "Five Park",
      prices: { min: 1.2, min_sufix: "M", max_sufix: "M+", max: 25 },
      bed_rooms: { min: 1, max: 5 },
      completation_date: 2024,
      site_url: "https://luxlifemiamiblog.com/condos/five-park-miami-beach/",
      logo_image_url: `${assetUrl}/img/logos/logo6.png`, //public/img/logos/logo6.png
      description: null,
      independent_review_url:
        "https://luxlifemiamiblog.com/five-park-miami-beach-is-this-the-best-new-condo-in-miami-beach/",
    },
    {
      order: 9,
      neighborhood: "Edgewater / Downtown",
      target: "edgewater",
      property_style: "villa-miami",
      title: "VILLA Miami",
      prices: { min: 4.6, min_sufix: "M", max_sufix: "M+", max: 10 },
      bed_rooms: { min: 3, max: 5 },
      completation_date: 2026,
      site_url: "https://luxlifemiamiblog.com/condos/villa-miami/",
      logo_image_url: `${assetUrl}/img/logos/logo8.png`, ///public/img/logos/logo8.png
      description: null,
      independent_review_url:
        "https://luxlifemiamiblog.com/villa-miami-residences-in-edgewater-an-independent-review/",
    },
    {
      order: 10,
      neighborhood: "Edgewater / Downtown",
      target: "edgewater",
      property_style: "edition-residences",
      title: "Edition Edgewater",
      prices: { min: 1.7, min_sufix: "M", max_sufix: "M", max: 7.5 },
      bed_rooms: { min: 1, max: 4 },
      completation_date: 2025,
      site_url:
        "https://luxlifemiamiblog.com/condos/the-edition-residences-miami-in-edgewater/",
      logo_image_url: `${assetUrl}/img/logos/logo7.png`, //public/img/logos/logo7.png
      description: null,
      independent_review_url:
        "https://luxlifemiamiblog.com/the-edition-residences-miami-an-independent-review/",
    },
    {
      order: 11,
      neighborhood: "Brickell",
      target: "brickell",
      property_style: "cipriani",
      title: "Cipriani",
      prices: { min: 1.6, min_sufix: "M", max_sufix: "M", max: 22 },
      bed_rooms: { min: 1, max: 4 },
      completation_date: 2026,
      site_url:
        "https://luxlifemiamiblog.com/condos/cipriani-residences-miami/",
      logo_image_url: `${assetUrl}/img/logos/logo5.png`, //public/img/logos/logo5.png
      description: null,
      independent_review_url:
        "https://luxlifemiamiblog.com/cipriani-residences-brickell-an-independent-review/",
    },
    {
      order: 12,
      neighborhood: "Brickell",
      target: "brickell",
      property_style: "residence-1428",
      title: "1428",
      prices: { min: 2.5, min_sufix: "M", max_sufix: "M", max: 20 },
      bed_rooms: { min: 2, max: 4 },
      completation_date: 2026,
      site_url:
        "https://luxlifemiamiblog.com/condos/the-residences-at-1428-brickell/",
      logo_image_url: `${assetUrl}/img/logos/logo4.png`, ///public/img/logos/logo4.png
      description: null,
      independent_review_url:
        "https://luxlifemiamiblog.com/the-residences-at-1428-brickell-an-independent-review/",
    },
    {
      order: 13,
      neighborhood: "Brickell",
      target: "brickell",
      property_style: "regis",
      title: "St Regis Brickell",
      prices: { min: 3.8, min_sufix: "M", max_sufix: "M", max: 35 },
      bed_rooms: { min: 2, max: 6 },
      completation_date: 2027,
      site_url: "https://luxlifemiamiblog.com/condos/st-regis-brickell/",
      logo_image_url: `${assetUrl}/img/logos/logo3.png`, //public/img/logos/logo3.png
      description: null,
      independent_review_url:
        "https://luxlifemiamiblog.com/st-regis-brickell-miami-an-independent-review/",
    },
    {
      order: 14,
      neighborhood: "Coconut Grove",
      target: "coconut-grove",
      property_style: "vitagrove",
      title: "VITA",
      prices: { min: 5.8, min_sufix: "M+", max_sufix: "M+", max: null },
      bed_rooms: { min: 3, max: 5 },
      completation_date: 2024,
      site_url: "https://luxlifemiamiblog.com/condos/vita-grove-isle/",
      logo_image_url: `${assetUrl}/img/logos/logo11.png`, //public/img/logos/logo11.png
      description: null,
      independent_review_url:
        "https://luxlifemiamiblog.com/vita-coconut-grove-an-independent-review/",
    },
  ],
};
export const priceListTitles: PriceListTitles = {
  appTitle: "The Best New Construction Condos in Miami",
  priceText: `Below is a list of what we consider the best new construction condos in Miami. For pricing information on select buildings, please tick the corresponding boxes.`,
  formTextMobile:
    "Above is a list of what we consider the best new construction condos in Miami. For pricing information on select buildings, please tick the corresponding boxes.",
};
export const neighborhoodIndex: NeighborhoodIndex[] = [
  { text: "Hallandale Beach", id: "hallandale" },
  { text: "Sunny Isles", id: "sunny-isles" },
  { text: "Surfside, Bal Harbour and Bay Harbor", id: "surfside" },
  { text: "Miami Beach", id: "miami-beach" },
  { text: "Edgewater <br> Downtown", id: "edgewater" },
  { text: "Brickell", id: "brickell" },
  { text: "Coconut Grove", id: "coconut-grove" },
];
