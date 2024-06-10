// This is the fill to handle pop-up mute and unmute toggle functionality
// you can also unmute/mute an individual tab but content script will unmute it if the tab is not of Disney + hotstar.
document.getElementById('mute-unmute').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let currentTab = tabs[0];
        if (currentTab) {
            let muted = !currentTab.mutedInfo.muted;
            chrome.tabs.update(currentTab.id, { muted: muted });
        }
    });
});

