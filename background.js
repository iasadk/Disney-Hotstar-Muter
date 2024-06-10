// This file handles all the muting logic as per tab
chrome.runtime.onMessage.addListener(
    async function (request, sender, sendResponse) {
        const tabId = sender.tab.id;
        if(request.message === "mute"){
            let muted = true;
            await chrome.tabs.update(tabId, {muted});
        }else{
            let muted = false;
            await chrome.tabs.update(tabId, {muted});
        }
       
        sendResponse({success: true})
    }
);