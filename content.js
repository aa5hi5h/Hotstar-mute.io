alert("khalo choco by vice chancellor and his wifey oh hoh oh ");

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
            adVideo.muted = true; // Mute the ad video
            console.log("Ad detected: Muting ad video");
            alert("Ad detected: Muting ad video");
            wasAdPlaying = true; // Set the flag indicating ad is playing
        }
    } else {
        console.log("No ad detected or ad has ended");

        if (wasAdPlaying && mainVideoContainer && mainVideoContainer.getAttribute('aria-hidden') === 'false') {
            if (mainVideo && mainVideo.muted) {
                if (muteButton) {
                    muteButton.click(); // Simulate button click to unmute main video
                    console.log("Main video visible: Unmuting main video by clicking mute button");
                    alert("Main video visible: Unmuting main video by clicking mute button");
                } else {
                    console.log("Mute button not found");
                }
            } else {
                console.log("Main video is already unmuted or not visible");
            }
            wasAdPlaying = false; // Reset the flag since the ad has ended
        }
    }
}

// Run checkForAds every second
setInterval(checkForAds, 1000);
