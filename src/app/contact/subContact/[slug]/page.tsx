"use client";

import { notFound, useRouter } from "next/navigation";

// import { useRouter } from 'next/router';

const page = ({ params }: { params: { slug: string } }) => {
  // const router = useRouter();
  const { slug } = params;
  // console.log(router);
  console.log(typeof slug);

  const currentContactNo = parseInt(slug);
  // console.log(typeof(currentContactNo));

  // if (isNaN(currentContactNo)) {
  //   notFound();
  // } else {
  //   return <div>Dynamic navigation</div>;
  // }

  if (currentContactNo >= 1 && currentContactNo <= 5) {
    return <div>Dynamic navigation</div>;
  } else {
    notFound();
  }
};

export default page;

// slug of dynamic page
// not found function on not a number

// navbar
