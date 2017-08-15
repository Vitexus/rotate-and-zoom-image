var clickedImage = null;

document.addEventListener('contextmenu', function(e){
    if (e.target.tagName.toLowerCase() == 'img') {
        clickedImage = e.target;
    } else {
        clickedImage = null;
    }
}, true);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    switch (request.type) {
        case 'rotate':
            if (request.value == null) {
                clickedImage.style.transform = null;
            } else {
                clickedImage.style.transform = `rotate(${request.value}deg)`;
            }
            break;
        case 'zoom':
            if (request.value == null) {
                clickedImage.style.transform = null;
            } else {
                clickedImage.style.transform = `scale(${request.value})`;
            }
            break;
    }
});
