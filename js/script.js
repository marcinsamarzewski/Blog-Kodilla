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
  const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector);

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);

  /* [DONE] add cla[DONE] ss 'active' to the correct article */
  targetArticle.classList.add('active');
}





/* moduł 5.4 */




const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks(customSelector = ''){

  /* [DONE] remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  /* [DONE] for each article */

  const articles = document.querySelectorAll(optArticleSelector + customSelector);

  let html = '';
  console.log(html);

  for(let article of articles){



    /* [DONE] get the article id */

    const articleId = article.getAttribute('id');

    /*[DONE] find the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /*[DONE] get the title from the title element */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);

    /*[DONE] create HTML of the link */

    titleList.insertAdjacentHTML('afterbegin',linkHTML);

    /*[DONE] insert link into titleList */

    html = html + linkHTML;
  }


  titleList.innerHTML = html;
}

generateTitleLinks();

const links = document.querySelectorAll('.titles a');
console.log(links);

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

/* moduł 6.1 */


function generateTags(){
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  /* START LOOP: for every article: */
  for(let article of articles){

    /* find tags wrapper */
    const titleTag = article.querySelector(optArticleTagsSelector);

    /* make html variable with empty string */
    let html = '';

    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log(articleTags);
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray);

    /* START LOOP: for each tag */
    for(let tag of articleTagsArray){
      console.log(tag);
      /* generate HTML of the link */
      let TagHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
      /* add generated code to html variable */
      html = html + TagHTML;
    }

    /* END LOOP: for each tag */
    console.log(html);
    /* insert HTML of all the links into the tags wrapper */
    titleTag.innerHTML = html;
  /* END LOOP: for every article: */
  }
}
generateTags();

/* moduł 6.1 ADD ClickHandler*/

function tagClickHandler(event){
  console.log('Klik');
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const ClickedTag = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = ClickedTag.getAttribute('href');
  console.log(href);
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  console.log(tag);
  /* find all tag links with class active */
  const TagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  /* START LOOP: for each active tag link */
  for(let TagLink of TagLinks){
    console.log(TagLink);
    /* remove class active */
    TagLink.classList.remove('active');
    /* END LOOP: for each active tag link */
    console.log('RemoveClass');
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const HrefTagLinks = document.querySelectorAll('a[href="' + href + '"]');
  /* START LOOP: for each found tag link */
  for(let HrefTagLink of HrefTagLinks){
    console.log(HrefTagLink);
    /* add class active */
    HrefTagLink.classList.add('active');
  /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');


function addClickListenersToTags(){
  /* find all links to tags */

  /* START LOOP: for each link */

    /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
}

addClickListenersToTags();
}
