chrome.action.onClicked.addListener(
    tab => {
        chrome.tabs.sendMessage(
            tab.id,
            {
                message:"clear all position fixed elements"
            },
        );
    }
)

// chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//     chrome.tabs.sendMessage(
//         tabs[0].id,
//         {
//             message:"clear all position fixed elements"
//         },
//     );
// });