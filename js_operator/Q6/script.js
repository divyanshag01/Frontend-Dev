let count = 0;

function increment() {
  count++;
  console.log(count);
  function innerIncrement() {
    console.log("Inner Count: " + count);
    console.log("Shows function scope");
  }
  innerIncrement();
}
function decrement() {
  count--;
  console.log(count);
}
increment();
increment();
decrement();
