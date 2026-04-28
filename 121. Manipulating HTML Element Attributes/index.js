let a = document.querySelector("a");
console.log(a);

let b = document.querySelector("a").attributes;
console.log(b);

let c =  document.querySelector("a").getAttribute("href");
console.log(c)

let d =  document.querySelector("a").setAttribute("href","https://www.bing.com");
console.log(d);

// Output:-

/*

index.js:5 NamedNodeMap
{0: href, href: href, length: 1}

The google href link will open bing

*/