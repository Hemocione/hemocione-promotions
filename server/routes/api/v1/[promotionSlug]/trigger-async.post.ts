import { H3Event } from "h3";
import { getPromotion } from "~/services/promotions/service";
import { waitUntil } from '@vercel/functions';
import { runWithinCall } from "~/services/promotions-call/service";

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody(event);
  const promotionSlug = getRouterParam(event, "promotionSlug");
  const promotion = getPromotion(promotionSlug);
  if (!promotion) {
    throw createError({ statusCode: 404, statusMessage: "Promotion not found" });
  }

  waitUntil(runWithinCall(promotion.webhookHandler, body));

  return {
    status: 200,
    body: {
      message: "Triggered",
    },
  };
});
