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
  const coupon = 'fixedCode'

  const templateName = 'edusummit_cupom_2025'

  const templateComponents = [
    {
      "type": "body",
      "parameters": [
        {
          "type": "text",
          "parameter_name": "coupon",
          "text": "Pi"
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
          "text": "https://hemocione.com.br/"
        }
      ]
    }
  ]

  // validate payload
  payloadSchema.parse(payload)

  sendWppMsg({ templateName, templateComponents, coupon });
};
