
// console.log("RUNNING HOTSTART EXT.")

// This script runs on every tab automatically and whenever the logic coditions statisfyis it will do it's magic.
(async () => {

    async function muteTab() {
        chrome.runtime.sendMessage({ from: 'content_script', message: 'mute' });
    }
    function unmuteTab() {
        chrome.runtime.sendMessage({ from: 'content_script', message: 'unmute' });
        
    }
    const findAdVideoContainer = () => {
        const adVideoContainer = document.getElementById('ad-video-container');
        const getVideoElement = adVideoContainer?.getElementsByTagName('video');
        if (getVideoElement?.length && window.location.origin === "https://www.hotstar.com") {
            muteTab();
        } else {
            unmuteTab();
        }
    };

    const observer = new MutationObserver(findAdVideoContainer);
    observer.observe(document.body, { childList: true, subtree: true });

})();

