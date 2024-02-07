import { Montserrat, Comfortaa, Roboto_Mono } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin-ext"],
  weight: ["300","400", "700"],
  display: 'swap',
});

export const comfortaa = Comfortaa({
  subsets: ["latin-ext"],
  weight: ['300',"400"],
  display: 'swap',
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin-ext"],
  weight: ["300","400", "700"],
  display: 'swap',
});