var getSelectedTab = (tab) => {
  var tabId = tab.id;
  var sendMessage = (messageObj) => chrome.tabs.sendMessage(tabId, messageObj);
  document.getElementById('start').addEventListener('click', () => sendMessage({ action: 'START' }));
  document.getElementById('terminate').addEventListener('click', () => sendMessage({ action: 'TERMINATE' }));
  
}
chrome.tabs.getSelected(null, getSelectedTab);