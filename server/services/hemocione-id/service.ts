export async function sendWppMsg(payload: any) {
  const config = useRuntimeConfig();
  const body = JSON.stringify(payload);
  console.warn("Sending WPP message to Hemocione ID:", body);
  await $fetch(`${config.public.hemocioneIdApiUrl}/send-wpp-msg`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-secret": config.hemocioneIdApiSecret,
    },
    body,
  });
}
