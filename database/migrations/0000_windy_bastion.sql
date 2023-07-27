CREATE TABLE IF NOT EXISTS "user_api_limits" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" varchar NOT NULL,
	"count" smallint NOT NULL DEFAULT 0,
	"createdAt" timestamp DEFAULT NOT NULL now(),
	"updatedAt" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_subscriptions" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" varchar NOT NULL,
	"stripe_customer_id" varchar,
	"stripe_subscription_id" varchar,
	"stripe_price_id" varchar,
	"stripe_current_period_end" timestamp
);
