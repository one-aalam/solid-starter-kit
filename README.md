# Solid Starter Kit
_Solid Starter Kit_ is an opinionated boilerplate based off of [SolidJS](https://www.solidjs.com), with all the bells and whistles you want ready, up and running when starting a SolidJS project. Out of the box you get all the `essentials`
- __Typescript__ as the language choice
- __Tailwind CSS__ for quick styling without getting out of your HTML
- __Daisy UI__ for pre-made TailwindCSS component classes
- __FontSource__ for effortless custom font integration
- __Icons through Unplugin__ for thousands of icons as components that are available on-demand and universally
- __ESLint__ and __Prettier__ for static code analysis and code formatting
- __SEO__ pre-configured

with [Supabase](https://supabase.io/) as the 3rd Party Persistence Layer for
- __Authentication System__ with Supabase GoTrue
- __User Profiles__ available on `/profile` as an example for Supabase PostgREST (CRUD API)
- __User Avatar__ which is Supbase Storage(AWS S3 backed effortless uploads) supported
in the [main](https://github.com/one-aalam/solid-starter-kit/) branch

and a bunch of pre-made, hand-rolled(easily replace-able) components, that you almost always end up installing/using for any non-trivial project
- __Alert/Toast__ to notify your users of the outcome of an event - `success, `error` or `default` is supported
- __Loaders__ for reporting the progress of an API call + a page load

__Note__: Refer the [main](https://github.com/one-aalam/solid-starter-kit/) branch for a starter structure with all the Supabase goodies integrated

## Usage

```bash
$ npm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)
