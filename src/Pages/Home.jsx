import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 2, ease: "Power3.easeOut" } });
    tl.from([h11.current, h12.current, h13.current], {
      x: "-100%",
      opacity: 0,
      stagger: 0.2,
    }).from(
      myimageref.current,
      {
        x: "200%",
        opacity: 0,
      },
      "<"
    );
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center gap-10">
      <div>
        <h1 ref={h11} className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Hello, 👋<br></br>My Name is<br></br>
        </h1>
        <h1 ref={h12} className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          {name}
        </h1>
        <h2 ref={h13} className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          {tagline}
        </h2>
      </div>
      <div className="mt-5 md:mt-0">
      <img
        ref={myimageref}
        className="w-1/2 lg:w-full md:ml-auto"
        src={img}
        alt={`Portrait of ${name}`}
        loading="lazy"
      />
      </div>
    </main>
  );
}

export default Home;
