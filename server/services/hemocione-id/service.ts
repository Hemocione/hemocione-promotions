export async function sendWppMsg(payload: any) {
  const config = useRuntimeConfig();
  await $fetch(`${config.public.hemocioneIdApiUrl}/send-wpp-msg`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-secret": config.hemocioneIdApiSecret,
    },
    body: JSON.stringify(payload),
  });
}
