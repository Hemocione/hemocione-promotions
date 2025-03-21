export const runWithinCall = async (
  fn: (payload: unknown) => Promise<void>,
  payload: unknown
) => {
  const call: any = { startedAt: new Date(), payload }; // create the call
  try {
    await fn(payload);
    call.status = "success";
  } catch (e) {
    call.status = "error";
    call.error = e;
  }
  call.endedAt = new Date();
  call?.save();
};
