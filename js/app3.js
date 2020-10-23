(function () {

const article= document.querySelector('article');
const articles=document.querySelectorAll("article");
const links=document.querySelectorAll('a');
const btn=document.querySelector('button');
const userInput=document.querySelector('input');

//const colorValue=document.querySelector('input');
// console.log(article);
//console.log(articles);



btn.addEventListener('click', changeBg);

function changeBg(){
    article.style.background=colorValue.value;
}




for (let a in articles){
    articles[a].addEventListener("click", function changeBg()
    {
        articles[a].style.background = 'tomato';
    });
    }

for (let l=0; l<links.length;l++){
    links[l].href = 'http://www.kitm.lt';
}

})();

