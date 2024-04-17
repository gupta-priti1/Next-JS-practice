"use client";
import React, { useState } from "react";
import "@/app/style.css";
// import styles from '@/app/style.css';

import clsx from "clsx";
import { inter, lusitana } from "./fonts";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  // const [isLight, setIsLight] = useState(true);
  let isLight = true;
  let socialMedia = "insta"
  return (
    // <div className='text-center'>
    <div>
      <h1 className="heading font-newFont ">Welcome to my page!!</h1>
      <div>
        <p
          className={clsx(
            "inline-flex items-center rounded-full ",
            // custom fonts without tailwind
            lusitana.className,
            {
              "para-light": isLight,
              "para-dark": !isLight,
            }
          )}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eveniet
          ut incidunt est autem ipsam aut distinctio nulla harum dolorem, nemo
          quidem adipisci, nostrum modi ullam et necessitatibus illo. Quo.
        </p>

        <p className={`${inter.variable}`}>
          {/* custom font using variable */}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
          accusantium ex sed at veritatis deleniti velit, aut, provident
          adipisci dignissimos minima hic voluptas nihil repudiandae, nemo
          aspernatur fugit sunt? Ipsa.
        </p>
        <p
          // custom font using tailwind
          className=" font-tilt_neon"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          sapiente, nemo ipsam vitae molestiae eius sequi iure ut reprehenderit
          saepe facilis obcaecati impedit quae nobis adipisci sed, eaque fuga
          earum sunt maiores est animi possimus quis natus. Harum, libero
          eligendi!
        </p>
      </div>

      <div className="flex justify-around">

      <Image src="/book.jpg" width={800} height={800} alt="book" />

     
        <Link href="/about"> Click Here</Link>
      
      
      </div>
      <ul className="flex gap-5 justify-center p-20">
        <li><Link href="/contact">Contact Details</Link></li>
        <li><Link href="/about/services">Services</Link></li>
      </ul>

      <ul className="flex gap-5 justify-center p-20">
        <Link href={`/${socialMedia}`}>{`${socialMedia}`}</Link>
      </ul>
    </div>
  );
};

export default page;
