import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="py-20">
      <div className="max-w-xl mx-auto w-full flex flex-col items-center gap-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center leading-tight">
          Highlight your Syntax with{" "}
          <Link
            className="text-primary"
            href="https://rehype-pretty.pages.dev/"
          >
            Rehype
          </Link>{" "}
          and
          <Link className="text-primary" href="https://shiki.style/">
            {" "}
            Shiki.
          </Link>
        </h1>
        <Link
          href="https://github.com/robiuzzaman4/syntax-highlighting"
          target="_blank"
          className="px-4 py-2 w-fit text-sm font-medium rounded-full bg-slate-900 text-white"
        >
          View on Github
        </Link>
      </div>
    </section>
  );
};

export default Hero;
