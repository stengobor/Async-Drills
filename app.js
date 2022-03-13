// TIMING OUT
// STEPS 1-3
function greet() {
  console.log("Hello!");
}

let timeOut;

function myFunction() {
  timeOut = setTimeout(greet, 2000);
}
greet();
myFunction(greet);

// STEP 4
const words = message => console.log(message);

const getWords = () => {
  words("Hello");

  setTimeout(() => {
    words("Again");

    setTimeout(() => {
      words("Whats");

      setTimeout(() => {
        words("Up");
      }, 1000);
    }, 2000);
  }, 3000);
};

getWords();

// CALLBACKS/RECURSION
