import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'

if (!process.env.DATABASE_URL) {
  throw new Error('DB_CONNECTION is missing!')
}

const client = postgres({ ssl: 'require', max: 1 })
const db: PostgresJsDatabase = drizzle(client)

await migrate(db, { migrationsFolder: './migrations' })
