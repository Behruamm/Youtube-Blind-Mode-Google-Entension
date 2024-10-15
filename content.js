// Function to hide view counts, like counts, and subscriber counts
function replaceViewCountsAndLikes() {
    // Replace view counts on the YouTube homepage (video thumbnails)
    const homeViewCounts = document.querySelectorAll('#metadata-line > span:nth-child(3)');
    homeViewCounts.forEach(viewCount => {
        viewCount.textContent = "0 views";
    });

    // Replace view counts on the YouTube video page
    const videoPageViewCount = document.querySelector('#info > span:nth-child(1)');
    if (videoPageViewCount) {
        videoPageViewCount.textContent = "0 views";
    }

    // Replace like counts on the YouTube video page
    const likeCount = document.querySelector('#top-level-buttons-computed > segmented-like-dislike-button-view-model > yt-smartimation > div > div > like-button-view-model > toggle-button-view-model > button-view-model > button > div.yt-spec-button-shape-next__button-text-content');
    if (likeCount) {
        likeCount.textContent = "0";
    }

    // Replace subscriber count on the YouTube video page
    const subscriberCount = document.querySelector('#owner-sub-count');
    if (subscriberCount) {
        subscriberCount.textContent = "0 Subscribers";
    }
}

// Observe changes to the DOM and re-apply replacing view counts, like counts, and subscriber counts
const observer = new MutationObserver(replaceViewCountsAndLikes);
observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Run the function initially when the content script is injected
replaceViewCountsAndLikes();
