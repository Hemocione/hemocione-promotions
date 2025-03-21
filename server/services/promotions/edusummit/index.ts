import { sendWppMsg } from "~/services/hemocione-id/service";
import { Payload } from "./interface";
import { z } from "zod"

const payloadSchema = z.object({
  name: z.string(),
  email: z.string(),
  hemocioneId: z.number(),
})

export const webhookHandler = async (payload: Payload) => {
  // get code from env, maybe?
  const coupon = 'fixedCode'

  // validate payload
  payloadSchema.parse(payload)

  sendWppMsg({ ...payload, coupon });
};
