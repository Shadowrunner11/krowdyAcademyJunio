// src/utils/autoScroll.js
var autoScroll = () => new Promise((res) => {
  let scrollUnit = 80;
  const intervalId = setInterval(() => {
    window.scrollTo(0, scrollUnit);
    scrollUnit += 80;
    if (scrollUnit > document.body.scrollHeight) {
      clearInterval(intervalId);
      res();
    }
  }, 100);
});

// src/scripts/scrappingLinkedin.js
async function start() {
  await autoScroll();
  console.log("termine de scrollear");
}
start();
