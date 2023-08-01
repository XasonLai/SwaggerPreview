chrome.action.onClicked.addListener(function(tab) {
  try {
    let targetUrl = tab.url;
    if (targetUrl.startsWith("https://raw.githubusercontent.com/")) {
      let encodedUrl = encodeURIComponent(targetUrl);
      let redirectUrl = "https://petstore.swagger.io/?url=" + encodedUrl;
      chrome.tabs.update({ url: redirectUrl });
    }
  } catch (error) {
    console.log("網址不正確");
  }
});

