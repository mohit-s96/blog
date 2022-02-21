import React, { useEffect, useState } from "react";
import Link from "next/link";

type Props = {};

function Heromain({}: Props) {
  const [catImage, setCatImage] = useState("/assets/cat.jpeg");

  useEffect(() => {
    let id: any;
    if (window && window.innerWidth >= 768) {
      id = setInterval(() => {
        fetch("https://cataas.com/cat?type=sq").then(async (res) => {
          const data = await res.blob();
          const objectURL = URL.createObjectURL(data);
          setCatImage(objectURL);
        });
      }, 15000);
    }
    return () => {
      id && clearInterval(id);
    };
  }, []);

  return (
    <>
      <div className="flex px-4 pt-4 justify-between">
        <section>
          <h1 className="translate-x-[-6px] text-4xl md:text-7xl md:leading-[4rem] text-primary-text-light dark:text-primary-text-dark py-4">
            Hello, I'm Mohit
          </h1>
          <p className="xl:max-w-xl max-w-full leading-[1.8em] text-primary-text-light dark:text-light-gray py-4">
            I am a software engineer from India. I mostly work with web
            technologies and ocassionaly with low level stuff. This website is
            my personal{" "}
            <Link href="/blog">
              <a className="text-primary-text-light dark:text-light-gray border-b-4 border-primary-accent-light hover:bg-primary-accent-light transition-all duration-200 dark:hover:text-primary-light">
                blog
              </a>
            </Link>{" "}
            where I (try to) post about things I learn. I also do open source{" "}
            <a
              href="#projects"
              className="border-b-4 border-primary-accent-light hover:bg-primary-accent-light hover:text-white transition-all duration-200"
            >
              projects
            </a>{" "}
            where I build random things that I find interesting. I also like
            cats 🐱
          </p>
        </section>
        <section className="flex-col items-center hidden md:flex">
          <div className="w-[200px] h-[200px] overflow-hidden rounded-full">
            <img
              loading="lazy"
              className="hidden md:flex"
              src={catImage}
              alt="random picture of a cat"
              width={200}
              height={200}
            />
          </div>
          <a
            href="https://cataas.com"
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noopener"
            className="italic text-gray-400 mt-4 text-sm"
          >
            source: cat api
          </a>
        </section>
      </div>
      <Link href="/about">
        <a className="text-primary-text-light dark:text-primary-text-dark m-4 px-4 py-2 inline-block border-2 border-primary-accent-light rounded-sm outline-none bg-transparent hover:bg-primary-accent-light focus-visible:bg-primary-accent-light transition-all duration-200">
          about me
        </a>
      </Link>
    </>
  );
}

export default Heromain;
