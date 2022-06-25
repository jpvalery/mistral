import React from "react";

import GitHub from "../../elements/icons/Github";
import LinkedIn from "../../elements/icons/Linkedin";
import Twitter from "../../elements/icons/Twitter";
import Unsplash from "../../elements/icons/Unsplash";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-4xl py-12 md:flex md:items-center md:justify-between text-stone-400">
        <div className="flex justify-center space-x-6 md:order-2">
          <a
            href="https://twitter.com/jpvalery"
            className="h-6 w-6 hover:text-stone-200"
          >
            <span className="sr-only">Twitter</span>
            <Twitter />
          </a>

          <a
            href="https://github.com/jpvalery"
            className="h-6 w-6 hover:text-stone-200"
          >
            <span className="sr-only">GitHub</span>
            <GitHub />
          </a>

          <a
            href="https://unsplash.com/@jpvalery"
            className="h-6 w-6 hover:text-stone-200"
          >
            <span className="sr-only">Unsplash</span>
            <Unsplash />
          </a>

          <a
            href="https://linkedin.com/in/jpvalery"
            className="h-6 w-6 hover:text-stone-200"
          >
            <span className="sr-only">LinkedIn</span>
            <LinkedIn />
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-base">
            &copy; 1992-{year} Jp Valery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
