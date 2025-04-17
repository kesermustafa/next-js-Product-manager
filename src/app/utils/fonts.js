import {Exo, Roboto} from "next/font/google";

const exo = Exo({
    variable: "--font-exo",
    subsets: ["latin"],
    weight: ["100","200","300","400","500","600","700","800","900"]
});

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: ["100","300","400","500","700","900"]
})

export {exo, roboto}