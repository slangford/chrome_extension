var str = document.body.outerHTML;
var re = /email="(.*?)@(.*?)"/;
result = str.match(re);
result[1] + '@' + result[2]
