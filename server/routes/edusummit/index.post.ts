import { H3Event } from 'h3'
import { getCoupon } from '~~/promotion/edusummit/jobs/getCoupon';

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody(event)
  const coupon = getCoupon()

  try {
    sendWppMsg(body.username, body.userEmail, body.hemocioneID, coupon)
    // registerMetric()
    setResponseStatus(event, 200)
    return {
      message: 'Message received'
    }
  } catch (e) {
    setResponseStatus(event, 500)
    // registerMetric()
    return {
      message: 'Error sending message'
    }
  }
});
