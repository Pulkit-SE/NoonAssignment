export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId); // Clear the previous timeout
    timeoutId = setTimeout(() => {
      func.apply(this, args); // Execute the function after the delay
    }, delay);
  };
};
