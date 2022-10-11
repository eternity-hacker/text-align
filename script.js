const container = document.querySelector("#container");
console.log(container.value);

const blockquote = document.querySelector("#blockquote");
console.log(blockquote.value);

const cite = document.querySelector("#cite");
console.log(cite.value);

const button = document.querySelector('input[type="submit"]');

const blockquoteHtml = `<figure>
<blockquote>
  <p>
    ${blockquote.value} 
  </p>
</blockquote>
<figcaption>
   <cite>${cite.value}</cite>
</figcaption>
</figure>
`;

button.addEventListener("click", function (event) {
  event.preventDefault();
  container.insertAdjacentHTML("afterbegin", blockquoteHtml);
});
