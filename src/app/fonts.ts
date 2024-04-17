import { Inter, Lusitana, Roboto, Tilt_Neon } from "next/font/google";

// defining custom fonts
export const roboto = Roboto({
    subsets: ['latin'],
    weight:['300', '500', '700', '900'],
})
export const inter = Inter({ 
    subsets: ['latin'],
    variable: "--font-inter"
});
export const lusitana = Lusitana({
    subsets:['latin'],
    weight:'700',
    variable: "--font-lusitana"
}) 

export const tilt_Neon = Tilt_Neon({
    subsets:['latin-ext'],
    variable: "--font-tilt_neon",
})