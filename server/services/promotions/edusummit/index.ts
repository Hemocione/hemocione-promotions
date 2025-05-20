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
      type: "header",
      parameters: [
        {
          type: "image",
          image: {
            link: config.eduSummit.image,
          },
        },
      ],
    },
    {
      type: "body",
      parameters: [
        {
          type: "text",
          parameter_name: "coupon",
          text: config.eduSummit.coupon,
        },
      ],
    }
  ]

  const wppPayload = { templateName, templateComponents, hemocioneId };
  await sendWppMsg(wppPayload);
};
