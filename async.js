// async function hello() {}

// const sing = async () => {
//   return "la la la la";
// };

// const sing = async () => {
//   //   throw new Error("UH OH");
//   throw "OH NO, Problem";
//   return "la la la la";
// };

// const login = async (username, password) => {
//   if (!username || !password) {
//     throw "missing credential";
//   }
//   if (password === "hi") {
//     return "welcome";
//   }
//   throw "invalid pass";
// };

// login("asdf", "hi")
//   .then(msg => {
//     console.log("logged in!");
//     console.log(msg);
//   })
//   .catch(err => {
//     console.log("ERROR!!");
//     console.log(err);
//   });

/* ========================= */

/* await */

// We can only use await keyword inside of functions declared with async
// await will pause the execution of the function,
// *** waiting for a promise to be resolved

// const delayedColorChange = (color, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// };

// async function rainbow() {
//   delayedColorChange("red", 1000);
//   delayedColorChange("orange", 1000);
// }

// async function rainbow() {
//   await delayedColorChange("red", 1000);
//   delayedColorChange("orange", 1000);
// }

// async function rainbow() {
//   await delayedColorChange("red", 1000);
//   await delayedColorChange("orange", 1000);
//   await delayedColorChange("yellow", 1000);
//   await delayedColorChange("green", 1000);
//   await delayedColorChange("blue", 1000);
//   await delayedColorChange("indigo", 1000);
//   await delayedColorChange("violet", 1000);
//   return "All done!";
// }

// rainbow().then(() => console.log("End of rainbow"));

// async function printRainbow() {
//   await rainbow();
//   console.log("end of rainbow");
// }

//and the most important:

// const fakeRequest = url => {
//   return new Promise((resolved, reject) => {
//     const delay = Math.random() * 4500 + 500;
//     setTimeout(() => {
//       if (delay > 4000) {
//         reject("connection timeout");
//       } else {
//         resolved("here is your fake data:", url);
//       }
//     });
//   });
// };

// async function makeTwoRequests() {
//   let data1 = await fakeRequest("/page1");
//   console.log(data1);
// }

// ERROR AND HANDLE ERROR
// MAKE SURE COMMENT OUT EVERYTHING UP TO HERE

// try {
//   abcd.log("asdf");
// } catch (e) {
//   console.log("we have an error");
// }

const fakeRequest = url => {
  return new Promise((resolved, reject) => {
    const delay = Math.random() * 4500 + 500;
    setTimeout(() => {
      if (delay > 2000) {
        reject("connection timeout");
      } else {
        resolved("here is your fake data:", url);
      }
    });
  });
};

async function makeTwoRequests() {
  try {
    let data1 = await fakeRequest("/page1");
    console.log(data1);
    let data2 = await fakeRequest("/page2");
    console.log(data2);
  } catch (e) {
    console.log("caught an error!");
    console.log("error is:", e);
  }
}
