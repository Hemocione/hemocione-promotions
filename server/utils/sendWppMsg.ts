// needs to define endpoint for wpp at hemocione-id
export async function sendWppMsg(username: string, userEmail: string, hemocioneID: string, coupon: string) {
  const data = await $fetch(`${process.env.hemocioneIdApiUrl}/wpp`, {
    method: 'POST',
    headers: {
      "content-type": "application/json"
    },
    body: {
      coupon,
      username,
      userEmail,
      hemocioneID
    }
  })

  // the data returned could be 'Message received', with status 200.
  return data
}