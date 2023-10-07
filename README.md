## ReactJS with Strapi and GraphQL

- headless CMS with API build with Strapi.io and GraphQL
- [Tutorial Guide Here](https://www.youtube.com/playlist?list=PL4cUxeGkcC9h6OY8_8Oq6JerWqsKdAPxn)
- ReactJs will basically use API routes to get all data from the Strapi
- [ReactJS Docs](https://react.dev/learn)

### Documentation

- [Strapi Docs](https://docs.strapi.io/dev-docs/quick-start)
- [Strapi Admin Panel Docs](https://docs.strapi.io/dev-docs/configurations/admin-panel)


## Structure

- backend Strapi will have its own directory
- react as a Frontend will have its own directory


### Installation Strapi

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
- after testing the content I found that the content has options like MarkDown short and long text. Markdown turn out to be the best option. In order to render this on the frontend install package `npm install react-markdow` and use it in the React component like `import ReactMarkDown from "react-markdown"`
- strapi end point to get images associated with the posts use this `http://localhost:1337/api/posts?populate=*`
- database export [read here](https://docs.strapi.io/dev-docs/data-management/export)
- import db to strapi [read docs](https://docs.strapi.io/dev-docs/data-management/import#:~:text=To%20import%20data%20into%20a,extension%2C%20and%20path%20are%20required.) . run command `npm run strapi import -- -f export_20221213105643.tar.gz.enc`
- install GraphQL in strapi by running this command `npm install @strapi/plugin-graphql`

### Admin Panel

- creating a post and defining the fields
- example `post` created is present in the `project-name/src/api/name-of-the-post` , in our case it's `post`
- [creating custom API endpoint docs](https://strapi.io/blog/how-to-create-a-custom-api-endpoint-in-strapi)

### Test the API endpoint with PostMan

- newly created Post collection type can be checked in POstMan via GET request and endpoint
- fetch all posts http://localhost:1337/api/posts/
- fetch single post http://localhost:1337/api/posts/post-id-check-the-admin-for-this/
- when Post collection type is created in Admin panel give it a sigular name, strapi will create plurar form so we can have many posts in Post Collection type
- make sure that the settings->Users&Permissins-plugin->Roles option for Public is set for  Post (find and findOne). This will make post visible for public for all posts and single post

### Install ReactJS

- in the root of your project install react in a separate directory by running the below command
- `npx create-react-app project-name`
- start the react by cd into the project directory and run below commands
- if error shows as conflict between  eslint-config-react-app, make sure that you have cd into project will correct uppercase/lowercase combination. This seems to be a Windows problem thus conflict shows up. Check and cd again and then run `npm start` again. Error should be gone now
  - `npm start`
    Starts the development server.

  - `npm run build`
    Bundles the app into static files for production.

  - `npm test`
    Starts the test runner.

- install React Router package `npm install react-router-dom` . this gives Reactjs option to use router for differents urls. See the main header file build for this at `react-frontend\src\components\SiteHeader.js`