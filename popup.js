chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({ url: "C:/Users/1089376/Desktop/extension/popup.html" });
});