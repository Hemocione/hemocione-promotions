export const runWithinCall = async (
  fn: (payload: unknown) => Promise<void>,
  payload: unknown
) => {
  //  call will be registered at any db as an object
  // with info based on the call, like startedAt, endedAt, status, error
  const call: any = { startedAt: new Date(), payload }; // create the call
  try {
    await fn(payload);
    call.status = "success";
    console.log("Call success for payload: ", JSON.stringify(payload));
  } catch (e) {
    console.error("Error in runWithinCall", e);
    call.status = "error";
    call.error = e;
  }
  call.endedAt = new Date();
  // call?.save();
};
