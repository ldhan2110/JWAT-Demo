console.log(globalThis == global) //Access the "Global" Object without the context

// In Browser, the Global object will be "self, windows, frames"
// However, when go to the server (especially SSR), with different context, the issue might arise -> using globalThis could prevent this cause.
// "globalThis" provide a safe way to access global object accross the environments.