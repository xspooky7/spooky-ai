import { MAX_FREE_USAGE } from '@/constants'
import { dbClient } from '@/database/client'
import { NewUserApiLimit, UserApiLimit, userApiLimit } from '@/database/schema'
import { auth } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'

export const increaseApiLimit = async () => {
  const { userId } = auth()

  if (!userId) return

  const response: UserApiLimit[] = await dbClient
    .select()
    .from(userApiLimit)
    .where(eq(userApiLimit.userId, userId))

  const userLimit = response[0]
  if (userLimit) {
    await dbClient
      .update(userApiLimit)
      .set({ count: userLimit.count + 1 })
      .where(eq(userApiLimit.userId, userId))
  } else {
    const newUserLimit: NewUserApiLimit = {
      userId,
      count: 1,
    }
    await dbClient.insert(userApiLimit).values(newUserLimit)
  }
}

export const checkApiLimit = async () => {
  const { userId } = auth()
  if (!userId) return false

  const response: { count: number }[] = await dbClient
    .select({
      count: userApiLimit.count,
    })
    .from(userApiLimit)
    .where(eq(userApiLimit.userId, userId))

  const userLimit = response[0]
  return !userLimit.count || userLimit.count < MAX_FREE_USAGE
}

export const getApiLimitCount = async () => {
  const { userId } = auth()

  if (!userId) return 0

  const response: { count: number }[] = await dbClient
    .select({
      count: userApiLimit.count,
    })
    .from(userApiLimit)
    .where(eq(userApiLimit.userId, userId))

  const userLimit = response[0]

  if (!userLimit.count) return 0

  return userLimit.count
}

// TODO: REMOVE BEFOR PRODUCTION
export const resetFreeTokens = async () => {
  const { userId } = auth()

  if (!userId) return

  const response: UserApiLimit[] = await dbClient
    .select()
    .from(userApiLimit)
    .where(eq(userApiLimit.userId, userId))

  const userLimit = response[0]
  if (userLimit) {
    await dbClient
      .update(userApiLimit)
      .set({ count: 0 })
      .where(eq(userApiLimit.userId, userId))
  } else {
    const newUserLimit: NewUserApiLimit = {
      userId,
      count: 1,
    }
    await dbClient.insert(userApiLimit).values(newUserLimit)
  }
}
