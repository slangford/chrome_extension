//chrome.tabs.executeScript( {
//   code: "window.getSelection().toString();"
//}, function(selection) {
//    document.getElementById("output").innerText = selection[0];
//});

chrome.tabs.executeScript( {
  file: "regex.js"
}, function(selection) {
    document.getElementById("output").innerText = selection[0];
});