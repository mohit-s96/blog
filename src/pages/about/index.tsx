import Link from "next/link";
import React from "react";
import Footer from "../../components/footer/footer";
import CustomHead from "../../components/head";
import Layout from "../../components/layout";

type Props = {};

function index({}: Props) {
  return (
    <Layout
      render={(theme) => {
        return (
          <>
            <CustomHead
              uri="https://mohits.dev/about"
              description="Mohit is a software engineer. He writes about JavaScript, TypeScript, Node.JS, CSS, GraphQL and C++"
              title="About me - Mohit's Blog"
              image="https://mohits.dev/favicon/favicon.png"
            />
            <div className="2xl:w-7/12 xl:w-8/12 md:w-10/12 w-95-res mx-auto mb-2 h-[92vh] flex flex-col justify-between">
              <div className="px-4 pt-4 justify-between border-primary-accent-light border-l-2">
                <section>
                  <h1 className="translate-x-[-6px] text-4xl md:text-7xl md:leading-[4rem] text-primary-text-light dark:text-primary-text-dark py-4">
                    Hello, I'm Mohit
                  </h1>
                  <p className="xl:max-w-xl max-w-full leading-[1.8em] text-primary-text-light dark:text-light-gray py-2">
                    I am a software engineer from India currently working{" "}
                    <a
                      href="https://bigbinary.com"
                      className="text-primary-text-light dark:text-light-gray border-b-4 border-primary-accent-light hover:bg-primary-accent-light transition-all duration-200 dark:hover:text-primary-light"
                    >
                      @bigbinary
                    </a>
                    . I mostly work with web technologies and ocassionaly with
                    low level stuff. This website is my personal{" "}
                    <Link href="/blog">
                      <a className="text-primary-text-light dark:text-light-gray border-b-4 border-primary-accent-light hover:bg-primary-accent-light transition-all duration-200 dark:hover:text-primary-light">
                        blog
                      </a>
                    </Link>{" "}
                    where I (try to) post about things I learn. I also do open
                    source{" "}
                    <a
                      href="/#projects"
                      className="border-b-4 border-primary-accent-light hover:bg-primary-accent-light hover:text-white transition-all duration-200"
                    >
                      projects
                    </a>{" "}
                    where I build random things that I find interesting.
                  </p>
                  <p className="xl:max-w-xl max-w-full leading-[1.8em] text-primary-text-light dark:text-light-gray py-2">
                    I have worked with various clients and companies, mostly on
                    stuff related to JavaScript and it's surrounding ecosystem.
                    I am a life-long learner and like learning new things and
                    acquiring new perspective on things. I am{" "}
                    <span
                      title="as of Nov' 2023"
                      className="border-dotted border-b-2 border-primary-dark dark:border-primary-light"
                    >
                      currently
                    </span>{" "}
                    learning more about <i>JS engine internals</i>.
                  </p>
                </section>
                <aside>
                  <h2 className="mt-4 text-2xl dark:text-white font-bold text-primary-text-light inline-block border-b-2 border-primary-accent-light">
                    view my resume
                  </h2>
                  <br />
                  <a
                    className="p-0 my-2 inline-block text-primary-accent-light font-bold hover:underline focus-visible:underline focus-visible:bg-primary-accent-light transition-all duration-200"
                    href="https://firebasestorage.googleapis.com/v0/b/fir-auth-4f7e7.appspot.com/o/Mohit%20Srivastava%20Resume-23.docx?alt=media&token=0202c5eb-9ba8-45d9-a934-bbaf53837002"
                    rel="noopener"
                    referrerPolicy="no-referrer"
                  >
                    view as docx
                  </a>
                  <br />
                  <a
                    className="p-0 my-2 inline-block text-primary-accent-light font-bold hover:underline focus-visible:underline focus-visible:bg-primary-accent-light transition-all duration-200"
                    href="https://firebasestorage.googleapis.com/v0/b/fir-auth-4f7e7.appspot.com/o/Mohit%20Srivastava%20Resume-23.pdf?alt=media&token=37d17b44-536f-49b4-8d92-37d28ff7f6e3"
                    rel="noopener"
                    referrerPolicy="no-referrer"
                  >
                    view as pdf
                  </a>
                </aside>
              </div>
              <Footer theme={theme} />
            </div>
          </>
        );
      }}
    />
  );
}

export default index;
