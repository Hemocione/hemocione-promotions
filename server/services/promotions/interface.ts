export interface Promotion {
  slug: string;
  webhookHandler: (payload: unknown) => Promise<void>;
}
