//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  compatibilityDate: "2025-03-20",
  preset: "vercel",
  runtimeConfig: {
    public: {
      hemocioneIdApiUrl:
        process.env.HEMOCIONE_ID_API_URL ?? "http://localhost:8080",
    },
    secret: process.env.API_SECRET ?? "secret",
    hemocioneIdApiSecret: process.env.HEMOCIONE_ID_API_SECRET ?? "secret",
    eduSummit: {
      coupon: process.env.EDUSUMMIT_COUPON_CODE ?? "T3ST3",
      url: process.env.EDUSUMMIT_URL ?? "https://www.example.com",
      image:
        process.env.EDUSUMMIT_IMAGE ??
        "https://cdn.hemocione.com.br/events/prod/uploads/private/1747765373818-edusummit.png",
    },
  },
});
