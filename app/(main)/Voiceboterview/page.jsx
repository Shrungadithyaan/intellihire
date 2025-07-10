'use client'
// import React from 'react'


// import { useRouter } from "next/router";

// const Voiceboterview = () => {

//    const router = useRouter();


//    const handleClick = () => {
//     router.push("http://localhost:3000/"); 
//   };


//   return (
//     <>
//      <div>Voiceboterview</div>
//     <button onClick={handleClick}>go to</button>
//     </>
//   )
// }

// export default Voiceboterview


// pages/index.js or any component inside pages/
// Inside a component
// pages/index.js
import { useEffect } from "react";

export default function Voiceboterview() {
  useEffect(() => {
    console.log("Current URL:", window.location.href); // 👉 prints the full URL
    // Example: Redirect to /about
    window.location.href = "https://voice-ai-smoky.vercel.app/";
  }, []);

  return <h1>Redirecting please wait ...</h1>;
}


