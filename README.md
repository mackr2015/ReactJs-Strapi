## ReactJS with Strapi 

- headless CMS with API build in


### Documentation

- [Strapi Docs](https://docs.strapi.io/dev-docs/quick-start)
- [Strapi Admin Panel Docs](https://docs.strapi.io/dev-docs/configurations/admin-panel)


## Structure

- backend Strapi will have its own directory
- react as a Frontend will have its own directory


### Installation

- make sure that you have nodejs installed
- install strapi into a folder example `npx create-strapi-app--quickstart` . this will installation sets up Strapi with a SQLite database. more commands and uses at https://docs.strapi.io/dev-docs/installation/cli 
- strapi commands:
    - `npm run develop`
  Start Strapi in watch mode. (Changes in Strapi project files will trigger a server restart)
    - `npm run start`
  Start Strapi without watch mode.
    - `npm run build`
  Build Strapi admin panel.
    - `npm run strapi`
  Display all available commands.
- by default strapi will start the local development with port 1337 and will install admin panel
- to change the port edit `project-name/.env` and `project-name/config/server.js` but we need to cover this when we come to deployment. Lets cover this as separate tutorial

### Admin Panel

- creating a post and defining the fields
- example `post` created is present in the `project-name/src/api/name-of-the-post` , in our case it's `post`
