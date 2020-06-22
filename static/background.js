const windows = {};
console.log('whatever');

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  console.log(sender.tab ?
              "from a content script:" + sender.tab.url :
              "from the extension");
  if (request.greeting == "hello") {
    sendResponse({farewell: "goodbye"});
  }
});
