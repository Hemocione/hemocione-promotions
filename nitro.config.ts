//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  compatibilityDate: "2025-03-20",
  runtimeConfig: {
    public: {
      hemocioneIdApiUrl:
        process.env.HEMOCIONE_ID_API_URL ??
        "http://localhost:8080",
    },
    secret: process.env.API_SECRET ?? "secret"
  }
});