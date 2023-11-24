/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_PROD_URL_ENDPOINT: string;
  readonly VITE_DEV_URL_ENDPOINT: string;
  readonly VITE_DEV_ASSET_URL: string;
  readonly VITE_PROD_ASSET_URL: string;

  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
