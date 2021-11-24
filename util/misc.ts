import redis from "redis";
// redis client inference because the don't export types by default
export type RedisClientType = typeof redis.createClient extends () => infer ResultType
  ? ResultType
  : never;

export function transformRedisKey(key: string) {
  return key.split(" ").join("-");
}

export function getUri(): string {
  let uri: string;
  if (process.env.NODE_ENV === "development") uri = "http://localhost:5000";
  else uri = "https://mohits.dev";

  return uri;
}
//@ts-ignore
export function debounce(func, wait, immediate) {
  // 'private' variable for instance
  // The returned function will be able to reference this due to closure.
  // Each call to the returned function will share this common timer.
  //@ts-ignore

  var timeout;

  // Calling debounce returns a new anonymous function
  return function () {
    // reference the context and args for the setTimeout function
    //@ts-ignore

    var context = this,
      args = arguments;

    // Should the function be called now? If immediate is true
    //   and not already in a timeout then the answer is: Yes
    //@ts-ignore

    var callNow = immediate && !timeout;

    // This is the basic debounce behaviour where you can call this
    //   function several times, but it will only execute once
    //   [before or after imposing a delay].
    //   Each time the returned function is called, the timer starts over.
    //@ts-ignore

    clearTimeout(timeout);

    // Set the new timeout
    timeout = setTimeout(function () {
      // Inside the timeout function, clear the timeout variable
      // which will let the next execution run when in 'immediate' mode
      timeout = null;

      // Check if the function already ran with the immediate flag
      if (!immediate) {
        // Call the original function with apply
        // apply lets you define the 'this' object as well as the arguments
        //    (both captured before setTimeout)
        func.apply(context, args);
      }
    }, wait);

    // Immediate mode and no wait timer? Execute the function..
    if (callNow) func.apply(context, args);
  };
}
