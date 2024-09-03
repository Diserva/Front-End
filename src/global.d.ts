// src/global.d.ts
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "*.txt" {
  const src: string;
  export default src;
}