// const preloaderElement = document.querySelector(".preloader");
// // генерим собственное кастомное событие

// preloaderElement.addEventListener("animationend", (event) => {
//   if (event.animationName === "fade-out") {
//     preloaderElement.dispatchEvent(
//       new CustomEvent("preloaderClose", {
//         bubbles: true,
//         detail: {
//           closeAnimationName: event.animationName,
//           closeAnimationDuration: event.elapsedTime,
//         },
//       })
//     );
//   }
// });
