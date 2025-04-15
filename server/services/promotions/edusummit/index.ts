import { sendWppMsg } from "~/services/hemocione-id/service";
import { z } from "zod";

const payloadSchema = z.object({
  hemocioneId: z.string(),
});

export const webhookHandler = async (payload: unknown) => {
  const { hemocioneId } = payloadSchema.parse(payload);
  const config = useRuntimeConfig();

  const templateName = "edusummit_cupom_2025";
  const templateComponents = [
    {
      type: "body",
      parameters: [
        {
          type: "text",
          parameter_name: "coupon",
          text: config.eduSummit.coupon,
        },
      ],
    },
    {
      type: "button",
      sub_type: "url",
      index: "0",
      parameters: [
        {
          type: "text",
          text: "https://lets.4.events/edu%3Esummit-C24737E1"
        }
      ]
    }
  ]

  const wppPayload = { templateName, templateComponents, hemocioneId };
  sendWppMsg(wppPayload);
};
