// Called when the user clicks on the browser action
var toggle = false;
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!

  if(!toggle) {
    console.log('Turning ' + tab.url + ' black!');
    chrome.tabs.executeScript({
      code: 'var prevBgColor=document.body.style.backgroundColor;var prevColor=document.body.style.color;document.body.style.backgroundColor="black"; document.body.style.color="gray";'
    });
    toggle = !toggle;
  } else {
    console.log("Refreshing ...")
    chrome.tabs.executeScript({
      code:  'document.body.style.backgroundColor=prevBgColor;document.body.style.color=prevColor' 
    }); 
    toggle = !toggle;
  }
});
