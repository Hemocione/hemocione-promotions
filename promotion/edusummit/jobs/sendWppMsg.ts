// needs to define endpoint for wpp at hemocione-id
export async function sendWppMsg(username: string, userEmail: string, coupon: string) {
  const data = await $fetch(`${process.env.hemocioneIdApiUrl}/wpp`, {
    method: 'POST',
    headers: {
      "content-type": "application/json"
    },
    body: {
      coupon,
      username,
      userEmail
    }
  })

  return data
}