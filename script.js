const button = document.getElementById("button");

// debounce handler
function debounce(fn, delay) {
  let timeoutId;

  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn();
    }, delay);
  };
}

button.addEventListener(
  "click",
  debounce(function () {
    console.log("clicked");
  }, 500)
);
