# Spooky-AI | SaaS AI Platform with Next.js 13, React, Tailwind, Drizzle, Clerk

[<img src="https://github.com/xspooky7/spooky-ai/blob/main/public/preview.png"/>](https://spooky-ai.vercel.app/)

### Tech Stack

| [<img src="https://skillicons.dev/icons?i=nextjs" height="40px" width="40px"/>](https://nextjs.org/) |[<img src="https://skillicons.dev/icons?i=react" height="40px" width="40px"/>](https://react.dev/) | [<img src="https://skillicons.dev/icons?i=tailwind" height="40px" width="40px"/>](https://tailwindcss.com/) | [<img src="https://avatars.githubusercontent.com/u/108468352?s=280&v=4" height="40px"/>](https://orm.drizzle.team/) | [<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjpGukzh9ZfzARbsH-wb6lnhnsS3_B6L-0DiABOCWCSA&s" height="40px"/>](https://clerk.com/) | [<img src="https://skillicons.dev/icons?i=postgres" height="40px" width="40px"/>](https://www.postgresql.org/) |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|:-----:|
| Next.js | React | Tailwind | Drizzle | Clerk | PostgreSQL |

### Key Features

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Clerk Authentication (Email, Google, 9+ Social Logins)
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Image Generation Tool (Open AI)
- Video Generation Tool (Replicate AI)
- Conversation Generation Tool (Open AI)
- Music Generation Tool (Replicate AI)
- Free tier with API limiting

### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/xspooky7/spooky-ai.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Setup Drizzle

Add Postgres Database (I used Neon)


### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
