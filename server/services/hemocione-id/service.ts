export async function sendWppMsg(payload: any) {
  const config = useRuntimeConfig();
  $fetch(`${config.public.hemocioneIdApiUrl}/send-wpp-msg`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'x-secret': 'secret'
    },
    body: JSON.stringify(payload),
  });
}
