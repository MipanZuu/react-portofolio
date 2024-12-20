import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const { html, css, js, react, tailwind, bootstrap, vscode, git, github, npm, spring, intellij, webstorm, figma, laravel, mySQL, c, cpp, python } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">Tech Stack</h1>
        <p className="text-content py-2 lg:max-w-3xl">Technologies I've been working with recently in my life.</p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <a href="https://www.w3schools.com/c/c_intro.php" target="_blank" rel="noopener noreferrer">
          {" "}
          <img src={c} title="C" alt="C" />{" "}
        </a>
        <a href="https://devdocs.io/cpp/" target="_blank" rel="noopener noreferrer">
          {" "}
          <img src={cpp} title="CPP" alt="CPP" />{" "}
        </a>
        <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
          {" "}
          <img src={python} title="Python" alt="Python" />{" "}
        </a>
        <a href="https://www.w3schools.com/html/default.asp" target="_blank" rel="noopener noreferrer">
          {" "}
          <img src={html} title="html" alt="html" />{" "}
        </a>
        <a href="https://www.w3schools.com/css/default.asp" target="_blank" rel="noopener noreferrer">
          {" "}
          <img src={css} title="css" alt="css" />{" "}
        </a>
        <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
          {" "}
          <img src={js} title="js" alt="js" />{" "}
        </a>
        <a href="https://spring.io/projects/spring-boot/" target="_blank" rel="noopener noreferrer">
          {" "}
          <img src={spring} title="spring" alt="spring" />{" "}
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
          {" "}
          <img src={react} title="reactjs" alt="reactjs" />{" "}
        </a>
        <a href="https://laravel.com/" target="_blank" rel="noopener noreferrer">
          {" "}
          <img src={laravel} title="laravel" alt="laravel" />{" "}
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
          {" "}
          <img src={tailwind} title="tailwind" alt="tailwind" />{" "}
        </a>
        <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
          {" "}
          <img src={bootstrap} title="bootstrap" alt="bootstrap" />{" "}
        </a>
        <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
          {" "}
          <img src={mySQL} title="mySQL" alt="mySQL" />{" "}
        </a>
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">Tools</h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
          {" "}
          <img src={vscode} title="vscode" alt="vscode" />{" "}
        </a>
        <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
          {" "}
          <img src={git} title="git" alt="git" />{" "}
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          {" "}
          <img src={github} title="github" alt="github" />{" "}
        </a>
        <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
          {" "}
          <img src={figma} title="figma" alt="figma" />{" "}
        </a>
        <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">
          {" "}
          <img src={npm} title="npm" alt="npm" />{" "}
        </a>
        <a href="https://www.jetbrains.com/idea/" target="_blank" rel="noopener noreferrer">
          {" "}
          <img src={intellij} title="Intellij" alt="Intellij" />{" "}
        </a>
        <a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noopener noreferrer">
          {" "}
          <img src={webstorm} title="webstorm" alt="webstorm" />{" "}
        </a>
      </section>
    </main>
  );
}

export default Technologies;
