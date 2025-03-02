import React from "react";
import { techStackDetails } from "../Details";

// Placeholder image if a tech logo is missing
const PLACEHOLDER_IMAGE = "https://via.placeholder.com/100?text=Coming+Soon";

function Technologies() {
  const { html, css, js, react, nextjs, tailwind, bootstrap, payload, express, spring, laravel, mySQL, c, cpp, python, swift, websocket, grafana, prometheus, vscode, git, github, npm, intellij, webstorm, figma } = techStackDetails;

  return (
    <main className="container mx-auto max-width pt-24 pb-20 px-6">
      {/* Tech Stack Section */}
      <section className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-wide">
          Tech <span className="text-cyan-600 dark:text-cyan-400">Stack</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">Technologies I've been working with recently.</p>
      </section>

      {/* Web Development Section */}
      <TechCategory
        title="Web Development"
        items={[
          { src: html, name: "HTML", url: "https://www.w3schools.com/html/" },
          { src: css, name: "CSS", url: "https://www.w3schools.com/css/" },
          { src: js, name: "JavaScript", url: "https://www.javascript.com/" },
          { src: react, name: "ReactJS", url: "https://reactjs.org/" },
          { src: nextjs, name: "Next.js", url: "https://nextjs.org/" },
          { src: tailwind, name: "Tailwind CSS", url: "https://tailwindcss.com/" },
          { src: bootstrap, name: "Bootstrap", url: "https://getbootstrap.com/" },
          { src: payload, name: "Payload CMS", url: "https://payloadcms.com/" },
        ]}
      />

      {/* Backend Development Section */}
      <TechCategory
        title="Backend Development"
        items={[
          { src: express, name: "Express.js", url: "https://expressjs.com/" },
          { src: spring, name: "Spring Boot", url: "https://spring.io/projects/spring-boot/" },
          { src: laravel, name: "Laravel", url: "https://laravel.com/" },
          { src: websocket, name: "WebSockets", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" },
          { src: mySQL, name: "MySQL", url: "https://www.mysql.com/" },
        ]}
      />

      {/* DevOps & Monitoring Section */}
      <TechCategory
        title="DevOps & Monitoring"
        items={[
          { src: grafana, name: "Grafana", url: "https://grafana.com/" },
          { src: prometheus, name: "Prometheus", url: "https://prometheus.io/" },
        ]}
      />

      {/* Tools Section */}
      <TechCategory
        title="Tools I Use"
        items={[
          { src: vscode, name: "VS Code", url: "https://code.visualstudio.com/" },
          { src: git, name: "Git", url: "https://git-scm.com/" },
          { src: github, name: "GitHub", url: "https://github.com/" },
          { src: figma, name: "Figma", url: "https://www.figma.com/" },
          { src: npm, name: "NPM", url: "https://www.npmjs.com/" },
          { src: intellij, name: "IntelliJ", url: "https://www.jetbrains.com/idea/" },
          { src: webstorm, name: "WebStorm", url: "https://www.jetbrains.com/webstorm/" },
        ]}
      />
    </main>
  );
}

/* Reusable Tech Category Section */
const TechCategory = ({ title, items }) => {
  return (
    <section className="relative max-w-5xl mx-auto mt-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-6">{title}</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">
        {items.map(({ src, name, url }, index) => (
          <TechCard key={index} src={src} name={name} url={url} />
        ))}
      </div>
    </section>
  );
};

/* Reusable Tech Card Component */
const TechCard = ({ src, name, url }) => {
  const imageSrc = src ? src : PLACEHOLDER_IMAGE; // Use placeholder if image is missing

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group p-3 rounded-lg backdrop-blur-lg bg-white/10 dark:bg-black/20 border border-gray-700 shadow-md hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
    >
      <img src={imageSrc} alt={name} title={name} className="w-20 h-20 mx-auto filter group-hover:scale-110 transition-transform duration-300" />
      <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 px-3 py-1 text-xs font-semibold text-gray-900 dark:text-white bg-white/20 dark:bg-black/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {name}
      </span>
    </a>
  );
};

export default Technologies;
