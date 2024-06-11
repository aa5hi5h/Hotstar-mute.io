
let wasAdPlaying = false;

function checkForAds() {
    const adContainer = document.querySelector('#ad-video-container');
    const adVideo = adContainer ? adContainer.querySelector('video') : null;
    const mainVideoContainer = document.querySelector('#video-container');
    const mainVideo = mainVideoContainer ? mainVideoContainer.querySelector('video') : null;
    const muteButton = document.querySelector('button[data-testid="volume"]');

    if (adVideo && adContainer.getAttribute('aria-hidden') === 'false') {
        // Ad is playing
        if (!adVideo.muted) {
            adVideo.muted = true; 
            wasAdPlaying = true; 
        }
    } else {
        if (wasAdPlaying && mainVideoContainer && mainVideoContainer.getAttribute('aria-hidden') === 'false') {
            if (mainVideo && mainVideo.muted) {
                if (muteButton) {
                    muteButton.click();
                } else {
                    console.log("Mute button not found");
                }
            } else {
                console.log("Main video is already unmuted or not visible");
            }
            wasAdPlaying = false;
        }
    }
}

setInterval(checkForAds, 1000);
