<!--

  ./README.md

  Copyright (C) 2022, Anokidev. This file is 
  part of Anokidev's website. Anokidev's website 
  is open-source and is licensed in MIT License.

  README file.

-->

<div style="display: grid; grid-template-row: auto auto; grid-template-column: auto;" align="center">
  <h1>Website</h1>
  <i><a href="https://anokidev.netlify.app">https://anokidev.netlify.app</a></i>
</div>

<hr>

Welcome! This is the official repository for my [website](https://anokidev.netlify.app), I use this website for numerous things that are simple and basic, such as:

- My about website.
- My resume website (Later, when I will graduate).
- My blogging website.
- My projects website.

## Table of Contents:

1. [Technologies](#technologies)
2. [Running the Project](#running)
3. [Contributing](#contributing)
4. [Directory Structure](#structure)
5. [Reusable Components List](#components)
5. [Pages List](#pages)

## Technologies <a id="technologies"></a>

This website is powered by numerous web technologies:

- Language:
  - Typescript (For scripting, Javascript's replacement).
  - SCSS / Sassy CSS (For styling, CSS's replacement).
  - TSX (For React template, JSX's replacement).
- Frameworks:
  - React (For frontend framework).
  - Next.JS (For helper framework).
- Tools:
  - ESLint (For linting tools).
  - NPM (For dependency management).

## Running the Project <a id="running"></a>

First of all, you need a tool called "Git". Clone the repository, and then change your current directory to the repo's root directory.

```bash
git clone https://www.github.com/anokidev/website # Clone the repository.
cd website # Change your current directory.
```

Now, you have to install all dependencies, make sure that NPM is installed!

```bash
npm ci # See all dependencies in package.json
```

Then, straight up run the project in **development mode**:

```bash
npm run dev
```

If you want to run the project in **production mode**, you have to build the project first.

```bash
npm run build # Build the project.
npm run start # Start the server.
```

Everytime you made a change, don't forget to lint!

```bash
npm run lint # Lint the code.
```

## Contributing <a id="contributing"></a>

See [CONTRIBUTING.md](/CONTRIBUTING.md).

## Directory Structure <a id="structure"></a>

- ```./.github/``` : For Github related files.
- ```./public/``` : Every images and contents are located in here.
  - ```content/``` : Content folder.
  - ```images/``` : Images folder.
- ```./src/``` : Source code.
  - ```libs/``` : Reusable React components.
  - ```pages/``` : Next.js pages.
  - ```styles/``` : SCSS stylesheet folder.
- ```./.eslintrc.json``` : ESLint config file.
- ```./.gitignore``` : Git Ignore file.
- ```./.projectile``` : Projectile config file.
- ```./CODE_OF_CONDUCT.md``` : Code of conduct file.
- ```./CONTRIBUTING.md``` : Contribution guide file.
- ```./LICENSE.md``` : License file.
- ```./netlify.toml``` : Netlify config file.
- ```./next-env.d.ts``` : Next.js env file, should not be edited!
- ```./next.config.js``` : Next.JS config file.
- ```./package.json``` : Dependency list file.
- ```./package-lock.json``` : "A manifestation of the manifest".
- ```./README.md``` : README file.
- ```./tsconfig.json``` : Typescript configuration file.

## Reusable Components List <a id="components"></a>

- ```blog``` : For blogs preview box. You can see these components in action by going to ```/blogs/```.
- ```footer``` : For page footer. Containing copyright message, and powered by message.
- ```header``` : For page header. Containing a navigation bar (navbar).
- ```md``` : For parsing markdown contents.
- ```preview``` : Similar to blogs, but this time there are no "released" and "last modified" messages. Used for project lists (```/projects```) and website intro at ```/home```.
- ```slideshow``` : For images slideshow.
- ```under-construction``` : For under construction warning banner.

## Pages List <a id="pages"></a>

- ```/home``` : Homepage.
- ```/projects``` : Projects.
- ```/blogs``` : Blogs.
- ```/about``` : About.