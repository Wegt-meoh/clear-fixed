chrome.runtime.onMessage.addListener(function (request) {
    if (request.message === "clear all position fixed elements") {
        const elements = document.querySelectorAll('*');
        const badElements = []
        elements.forEach(element => {
            if (window.getComputedStyle(element).getPropertyValue('position')==='fixed') {
                badElements.push(element);
                console.log('get')
            }
        })
        badElements.forEach(e => {
            e.remove()
        })
        alert('remove all fixed element')
    }
});