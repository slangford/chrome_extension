chrome.tabs.executeScript( {
   code: "window.getSelection().toString();"
}, function(selection) {
    document.getElementById("output").innerText = selection[0];
});