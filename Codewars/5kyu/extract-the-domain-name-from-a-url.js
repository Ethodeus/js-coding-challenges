//URL -> https://www.codewars.com/kata/514a024011ea4fb54200004b

//* NAME -> Extract the domain name from a URL

//TODO INSTRUCTIONS -> Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

/*
* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

//SOLUTION(S) ->



function domainName(url) {
  let domain
  let newUrl = url.replace('http://', '').replace('https://', '').replace('www.', '').split('')


  for (let i = 0; i < newUrl.length; i++) {
    if (newUrl[i] == '.') {
      domain = newUrl.slice(0, i)
      break
    }
  }

  return domain.join('')

}

//TEST CASES ->

console.log(domainName("http://www.google.com"), "google");
console.log(domainName("http://google.co.jp"), "google");
console.log(domainName("www.xakep.ru"), "xakep");
console.log(domainName("https://youtube.com"), "youtube");