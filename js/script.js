'use strict';
const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post-author',
  optTagsListSelector = '.tags.list',
  optCloudClassCount = 5,
  optCloudClassPrefix = 'tag-size-';

function titleClickHandler(event){
  console.log('Link was clicked!');
  event.preventDefault();
  const clickedElement = this;
  console.log(event);

  const activeLinks = document.querySelectorAll('.titles a.active');
  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
  clickedElement.classList.add('active');
  console.log('clickedElement:', clickedElement);
  const activeArticles = document.querySelectorAll('.posts .active');
  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }
  const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector);
  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);
  targetArticle.classList.add('active');
}

/* moduł 5.4 */

function generateTitleLinks(customSelector =''){
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  let html = '';
  for(let article of articles){
    const articleId = article.getAttribute('id');
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);
    html = html + linkHTML;
  }
  titleList.innerHTML = html;
  const links = document.querySelectorAll('.titles a');
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}
generateTitleLinks();

/* moduł 6.1 */
function calcuateTagsParams(tags){
  const params = {
    max: 0,
    min: 999999,
  };
  for(let tag in tags){
    if(tags[tag] > params.max){
      params.max = tags[tag];
    }
    if(tags[tag] < params.min){
      params.min = tags[tag];
    }
  }
  console.log(tags);
  return params;

}
function calculateTagClass(count, params){
  const normalizedCount = count - params.min;
  const normalizedMax = params.max - params.min;
  const percentage = normalizedCount / normalizedMax;
  const classNumber = Math.floor(percentage * (optCloudClassCount - 1) + 1);
  return optCloudClassPrefix + classNumber;
}
function generateTags(){
  let allTags = {};
  const articles = document.querySelectorAll(optArticleSelector);
  for(let article of articles){
    const titleTag = article.querySelector(optArticleTagsSelector);
    let html = '';
    const articleTags = article.getAttribute('data-tags');
    const articleTagsArray = articleTags.split(' ');
    for(let tag of articleTagsArray){
      const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
      html = html + linkHTML;

      if(!allTags.hasOwnProperty(tag)){
        allTags[tag]= 1;
      } else {
        allTags[tag]++;
      }
    }
    titleTag.innerHTML = html;
  }
  const tagList = document.querySelector('.tags');
  const tagsParams = calcuateTagsParams(allTags);
  let allTagsHTML = '';
  for(let tag in allTags){
    const tagLinkHTML = '<li><a class="' + calculateTagClass(allTags[tag], tagsParams) + '" href="#tag-' + tag + '">' + tag +  '</a></li> ';
    allTagsHTML += tagLinkHTML;
  }
  tagList.innerHTML = allTagsHTML;
}

generateTags();

/* moduł 6.1 ADD ClickHandler*/

function tagClickHandler(event){
  event.preventDefault();
  const ClickedTag = this;
  console.log('Tag klikniety');
  const href = ClickedTag.getAttribute('href');
  console.log(href);
  const tag = href.replace('#tag-', '');
  console.log(tag);
  const TagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  for(let TagLink of TagLinks){
    console.log(TagLink);
    TagLink.classList.remove('active');
    console.log('RemoveClass');
  }
  const HrefTagLinks = document.querySelectorAll('a[href="' + href + '"]');
  for(let HrefTagLink of HrefTagLinks){
    console.log(HrefTagLink);
    HrefTagLink.classList.add('active');
  }
  generateTitleLinks('[data-tags~="' + tag + '"]');
}
addClickListenersToTags();

function addClickListenersToTags(){
  const Taglinks = document.querySelectorAll('a[href^="#tag-"]');
  for(let Taglink of Taglinks){
    Taglink.addEventListener('click', tagClickHandler);
  }
}
/* moduł 6.1 ADD Author*/

function generateAuthors(){
  const articles = document.querySelectorAll(optArticleSelector);
  for (let article of articles){
    const boxAuthors = article.querySelector(optArticleAuthorSelector);
    let html = '';
    const articleAuthors = article.getAttribute('data-author');
    const linkHTMLAuthor = '<a href="#author-'+ articleAuthors +'">'+ articleAuthors +'</a>';
    html = linkHTMLAuthor;
    boxAuthors.innerHTML = html;
  }
}
generateAuthors();

/* moduł 6.1 ADD authorClickHandler*/

function authorClickHandler(event){
  event.preventDefault();
  const clickedAuthor = this;
  const href = clickedAuthor.getAttribute('href');
  const author = href.replace('#author-', '');
  const AuthorLinks = document.querySelectorAll('a.active[href^="#author-"]');
  for (let AuthorLink of AuthorLinks){
    AuthorLink.classList.remove('active');
  }
  const AuthorLinksHref = document.querySelectorAll('a[href="' + href + '"]');
  for (let AuthorLinkHref of AuthorLinksHref){
    AuthorLinkHref.classList.add('active');
  }
  generateTitleLinks('[data-author="' + author + '"]');
}
/* moduł 6.1 Binding the button to the author*/
function addClickListenersToAuthors(){
  const links = document.querySelectorAll('a[href^="#author-"]');
  console.log({links});
  for(let link of links){
    link.addEventListener('click', authorClickHandler);
  }
}
addClickListenersToAuthors();
