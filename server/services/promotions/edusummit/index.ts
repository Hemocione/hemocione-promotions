import { sendWppMsg } from "~/services/hemocione-id/service";
import { Payload } from "./interface";
import { z } from "zod";

const payloadSchema = z.object({
  hemocioneId: z.string(),
});

export const webhookHandler = async (payload: Payload) => {
  const config = useRuntimeConfig();
  const { hemocioneId } = payload;

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
          text: config.eduSummit.url,
        },
      ],
    },
  ];

  const payloadToSend = { templateName, templateComponents, hemocioneId };

  // validate payload
  payloadSchema.parse(payloadToSend);

  sendWppMsg(payloadToSend);
};
