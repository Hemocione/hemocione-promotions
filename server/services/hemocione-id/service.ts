const config = useRuntimeConfig();


export async function sendWppMsg(payload: any) {
  $fetch(`${config.public.hemocioneIdApiUrl}/send-wpp-msg`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'x-secret': 'secret'
    },
    body: JSON.stringify(payload),
  });
}
