import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

if (!process.env.DATABASE_URL) {
  throw new Error('DB_CONNECTION is missing!')
}

const queryClient = postgres(process.env.DATABASE_URL, { ssl: 'require' })
export const dbClient: PostgresJsDatabase = drizzle(queryClient)
