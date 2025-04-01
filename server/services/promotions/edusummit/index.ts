import { sendWppMsg } from "~/services/hemocione-id/service";
import { Payload } from "./interface";
import { z } from "zod"

const payloadSchema = z.object({
  templateComponents: z.array(
    z.object({
      type: z.union([z.literal("body"), z.literal("button")]),
      sub_type: z.literal("url").optional(), // Only present for buttons
      index: z.string().optional(), // Only present for buttons
      parameters: z.array(z.object({
        type: z.literal("text"),
        parameter_name: z.string().optional(), // Only present in some objects
        text: z.string()
      }))
    })
  ),
  templateName: z.string(),
  hemocioneId: z.string(),
})

export const webhookHandler = async (payload: Payload) => {
  const config = useRuntimeConfig()
  const { hemocioneId } = payload

  const templateName = 'edusummit_cupom_2025'

  const templateComponents = [
    {
      "type": "body",
      "parameters": [
        {
          "type": "text",
          "parameter_name": "coupon",
          "text": config.eduSummit.coupon
        }
      ]
    },
    {
      "type": "button",
      "sub_type": "url",
      "index": "0",
      "parameters": [
        {
          "type": "text",
          "text": config.eduSummit.url
        }
      ]
    }
  ]

  const payloadToSend = { templateName, templateComponents, hemocioneId }

  // validate payload
  payloadSchema.parse(payloadToSend)

  sendWppMsg(payloadToSend);
};
