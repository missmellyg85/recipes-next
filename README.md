# Recipes (Next.js)

Learning Next.js by applying it to a real world example I might end up using.

# Technologies

- Next.js
- Typescript
- React-testing-library

# Running Locally

```
npm i
npm run dev
```

## Prisma

This is an ORM that connects the app to a PostgreSQL database hosted in Heroku. You can read more [here]('https://www.prisma.io/docs/getting-started/quickstart')

I used [this tutorial]('https://vercel.com/guides/nextjs-prisma-postgres') when bootstrapping it in this app.

`npx prisma studio` runs the interactive database

`npx prisma generate` generates your prisma schema. You should run this every time you update the schema file.
