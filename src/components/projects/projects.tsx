import React from "react";

interface Props {}

const projects = [
  {
    pName: "blog",
    uri: "https://github.com/mohit-s96/blog",
    about:
      "repository of this blog. built with a lot of services but mainly uses nextjs and tailwind.",
  },
  {
    pName: "blog cms",
    uri: "https://github.com/mohit-s96/blog-admin",
    about:
      "repository of the cms I built for my managing/creating my blogs. it includes a lot of features like image resizing pipeline, support for multiple formats, built-in editor, live-preview for various device sizes and many more.",
  },
  {
    pName: "tiny react",
    uri: "https://github.com/mohit-s96/tiny_react",
    about:
      "this is a minimal implementaion of the react reconciler and the dom renderer in typescript. supports useEffect, useState hooks, controlled components, concurrent mode etc. I work on improving this in spare time.",
  },
  {
    pName: "youtube video ocr",
    uri: "https://github.com/mohit-s96/youtube_ocr_extension",
    about:
      "this is a chrome extension for copying text from within a youtube video. it uses TesseractJS for the OCR stuff.",
  },
  {
    pName: "terminal reddit",
    uri: "https://github.com/mohit-s96/terminal-reddit",
    about:
      "this is the latest thing I am working on. it's a zero dependency reddit client for the terminal. it's still very early in development and I plan to add a lot of things.",
  },
];

function Projects({}: Props) {
  return (
    <div
      className="flex flex-col p-2 border-t-2 border-primary-accent-light mt-4"
      id="projects"
    >
      <div className="m-2 p-2 text-primary-accent-dark text-xl md:text-2xl flex justify-between">
        <span>some of my projects</span>
        <a
          href="https://github.com/mohit-s96?tab=repositories"
          className="text-primary-text-light dark:text-light-gray border-b-2 border-primary-accent-light hover:bg-primary-accent-light transition-all duration-200 dark:hover:text-primary-light"
        >
          all projects
        </a>
      </div>
      <div className="flex flex-col">
        {projects.map((x) => {
          return (
            <div className="p-2" key={x.pName}>
              <div>
                <a
                  className="text-xl text-primary-accent-light font-bold p-2 hover:underline"
                  href={x.uri}
                >
                  {x.pName}
                </a>
              </div>
              <p className="p-2 2xl:leading-6 leading-5 w-full md:w-8/12 text-gray-600 dark:text-gray-300 text-sm md:text-base">
                {x.about}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
