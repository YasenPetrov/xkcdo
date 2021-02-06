// This is where we will add our text to
comic = document.getElementById("comic");

// Get alt text
imgTitle = comic.getElementsByTagName("img")[0].title;
titlePara = document.createElement("p");
titlePara.appendChild(document.createTextNode(imgTitle));
titlePara.style.paddingLeft = "30px";
titlePara.style.paddingRight = "30px";

// find permalink to get ID
comicId = document.getElementById("middleContainer").innerText.match(/(\d+)/g)[0];
explainUrl = "https://www.explainxkcd.com/" + comicId;

// create paragraph with link
explainPara = document.createElement("p");
explainLink = document.createElement("a");
explainLink.setAttribute("href", explainUrl);
explainLink.appendChild(document.createTextNode(explainUrl));
explainPara.appendChild(document.createTextNode("Explanation: "));
explainPara.appendChild(explainLink);

// add paragraphs to comic div
comic.appendChild(titlePara);
comic.appendChild(explainPara);