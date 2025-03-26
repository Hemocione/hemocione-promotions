export async function sendWppMsg(payload: any) {
  $fetch("https://hemocione-id.com/send-wpp-msg", {
    method: "POST",
    headers: {
       'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
  });
}
