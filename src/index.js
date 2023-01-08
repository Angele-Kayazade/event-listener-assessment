
/*
Add event listeners to the `.expand_button` buttons
*/
function expandArticleBody() {
  // your code here
  
  const allBtns = document.querySelectorAll(".expand_button");

  allBtns.forEach(btn => {
    btn.addEventListener("click", (event) => {
      const button = event.target;
      let article = button.parentNode.parentNode.parentNode;
      if (btn.innerText == "V") {
        article.querySelector(".article_body").style.display = 'none';
        btn.innerText = ">";
      }
      else {
        article.querySelector(".article_body").style.display = 'block';
        btn.innerText = "V";
      }
    })
  });
}


/*
Add event listeners to the `.highlightBtn` buttons
*/
function highlightArticle() {
  // your code here
   const allBtns = document.querySelectorAll(".highlightBtn");
  
  allBtns.forEach(btn => {
    btn.addEventListener("click", (event) => {
      const button = event.target;
      let article = button.parentNode.parentNode.parentNode;
      if (btn.innerText == "+") {
        article.classList.add("highlight");
        btn.innerText = "-";
      }
      else {
        article.classList.remove("highlight");
        btn.innerText = "+";
      }
    })
  });
}

function main() {
  expandArticleBody();
  highlightArticle();
}

main();
