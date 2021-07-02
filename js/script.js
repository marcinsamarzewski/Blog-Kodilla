'use strict';

function titleClickHandler(event){
  console.log('Link was clicked!');
  event.preventDefault();
  const clickedElement = this;
  console.log(event);

  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */
  clickedElement.classList.add('active');
  console.log('clickedElement:', clickedElement);

  /* [DONE] remove class 'active' from all article links  */
  const activeArticles = document.querySelectorAll('.posts .active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href')
  console.log(articleSelector)

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector)
  console.log(targetArticle)

  /* [DONE] add cla[DONE] ss 'active' to the correct article */
  targetArticle.classList.add('active');
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}



 /* moduł 5.4 */




const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  /* [DONE] remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector)
  titleList.innerHTML = ''

  /* [DONE] for each article */
const articles = document.querySelectorAll(optArticleSelector)
let html = '';
for(let article of articles){
  console.log(html)


    /* [DONE] get the article id */
const articleId = clickedElement.getAttribute('id')

    /* find the title element */
const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* get the title from the title element */
const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
console.log(linkHTML)
   
/* create HTML of the link */
titleList.insertAdjacentHTML(afterbegin,linkHTML)
 
    /* insert link into titleList */
    html = html + linkHTML;
}
titleList.innerHTML = html;
}

generateTitleLinks();