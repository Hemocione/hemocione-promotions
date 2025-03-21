import { H3Event } from "h3";
import { getPromotion } from "~/services/promotions/service";

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody(event);
  const promotionSlug = getRouterParam(event, "promotionSlug");
  const promotion = getPromotion(promotionSlug);
  if (!promotion) {
    // throw not found
    throw new Error("Promotion not found");
  }
  // waitUntil da vercel - https://vercel.com/docs/functions/functions-api-reference/vercel-functions-package#waituntil
  // waitUntil(runWithinCall(promotion.webhookHandler), body);

  return {
    status: 200,
    body: {
      message: "Triggered",
    },
  };
});
