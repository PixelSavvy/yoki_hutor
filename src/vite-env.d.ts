/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_IMAGEKIT_URL: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}