"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const page = () => {
  
  const pathName = usePathname();

  console.log(pathName);
  
  let contactNo = 50;

  return (
    <div className="flex flex-col">
      Contact Details:
      <Link
        href="/contact/subContact/1"
        className={clsx(
          "flex h-[48px] grow items-center justify-center gap-2 rounded-md  p-3 text-sm font-medium  md:flex-none md:justify-start md:p-2 md:px-3",
          {
            " text-pink-600": pathName === "/contact/subContact/1",
          }
        )}
      >
        Contact 1
      </Link>
      <Link href="/contact/subContact/2">Contact 2</Link>
      <Link href="/contact/subContact/3">Contact 3</Link>
      <Link href={`/contact/subContact/${contactNo}`}>Contact {contactNo}</Link>
    </div>
  );
};

export default page;
