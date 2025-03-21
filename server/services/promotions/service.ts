import { Promotion } from "./interface";
import { webhookHandler } from "./edusummit";

const promotions: Record<string, Promotion> = {
  eduSummit: {
    slug: "eduSummit",
    webhookHandler,
  },
};

export const getPromotion = (slug: string) => {
  return promotions[slug];
};
