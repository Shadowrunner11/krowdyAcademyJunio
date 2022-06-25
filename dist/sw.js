(() => {
  // src/sw.js
  chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["./scripts/scrappingLinkedin.js"]
    });
  });
})();
