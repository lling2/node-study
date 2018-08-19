var str = 
'\aaa\n\
\ndddmljoalzmx\
\nssssxx'
var str2 = str.replace(/^/gm,'<p>').replace(/$/gm,'</p>');
console.log(str2);