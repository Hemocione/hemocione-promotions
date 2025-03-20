import { getCoupon } from "./jobs/getCoupon";
import { sendWppMsg } from "./jobs/sendWppMsg";

export async function main(req) {
  const coupon = getCoupon();
  const { username, userEmail } = req.body;
  const data = await sendWppMsg(username, userEmail, coupon);
  return { status: data.status, message: data.message };
}