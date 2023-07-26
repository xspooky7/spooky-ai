import { pgTable, serial, varchar, smallint, timestamp } from 'drizzle-orm/pg-core';
 
export const userApiLimit = pgTable('user_api_limits', {
  id: serial('id').primaryKey(),
  userId: varchar('userId'),
  count: smallint('count').default(0),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt')
});

 
// model UserApiLimit {
//   id        String   @id @default(cuid())
//   userId    String   @unique
//   count     Int      @default(0)
//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt
// }


export const userSubscription = pgTable('user_subscriptions', {
  id: serial('id').primaryKey(),
  userId: varchar('userId'),
  stripeCustomerId: varchar('stripe_customer_id'),
  stripeSubscriptionId: varchar('stripe_subscription_id'),
  stripePriceId: varchar('stripe_price_id'),
  stripeCurrentPeriodEnd: timestamp('stripe_current_period_end')
});


// model UserSubscription {
//   id        String      @id @default(cuid())
//   userId    String      @unique
//   stripeCustomerId       String?   @unique @map(name: "stripe_customer_id")
//   stripeSubscriptionId   String?   @unique @map(name: "stripe_subscription_id")
//   stripePriceId          String?   @map(name: "stripe_price_id")
//   stripeCurrentPeriodEnd DateTime? @map(name: "stripe_current_period_end")
// }