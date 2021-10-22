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

and a bunch of pre-made, hand-rolled(easily replace-able) components, that you almost always end up installing/using for any non-trivial project
- __Alert/Toast__ to notify your users of the outcome of an event - `success, `error` or `default` is supported
- __Modal__(WIP) as you always come back to `em
- __Loaders__ for reporting the progress of an API call + a page load

__Note__: Refer the [basic](https://github.com/one-aalam/solid-starter-kit/tree/basic) branch for a bare minimum starter structure with all the `essentials`

## How to Setup?
If new to Supabase
- Create account at [Supabase](https://app.supabase.io/)
- Create a Organisation, and a project

Once done, or if you already have a Supabase project
- Copy the generated project's API authentication details from `https://app.supabase.io/project/<your-awesome-solid-project>/api/default?page=auth`
- Place the details in `.env`/`.env.local` as `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`</li>
- Install NPM dependencies

Solid Start Kit supports profile and user avatars. To get the profile table and storage ready, execute the following query at `https://app.supabase.io/project/<your-awesome-solid-project>/editor/sql`

```sql
-- Create a table for Public Profiles
create table profiles (
  id uuid references auth.users not null,
  username text unique,
  avatar_url text,
  website text,
  updated_at timestamp with time zone,

  primary key (id),
  unique(username),
  constraint username_length check (char_length(username) >= 3)
);

alter table profiles enable row level security;

create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

-- Set up Storage!
insert into storage.buckets (id, name)
values ('avatars', 'avatars');

create policy "Avatar images are publicly accessible."
  on storage.objects for select
  using ( bucket_id = 'avatars' );

create policy "Anyone can upload an avatar."
  on storage.objects for insert
  with check ( bucket_id = 'avatars' );
```

and get started by running `yarn dev`

## Why Solid?

Landing from a different UI framework(React, Vue, Angular)? Learn more on the [Solid Website](https://solidjs.com) or join their [Discord](https://discord.com/invite/solidjs)

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
