const accesskey = "B8s3XfJPyjibaEutLah-sHxlowuk0kGPJV0nhSyaPGk"

const formE1 = document.querySelector("form")
const inputE1 = document.getElementById("Search-input")
const Searchresults = document.querySelector(".Search-results")
const Showmore = document.getElementById("Show-more-button")

let inputData="";
let page=1;

async function Searchimages(){
  inputData = inputE1.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;

  const Response = await fetch(url);
  const data = await Response.json();

  const results = data.results;

  if (page===1){
    Searchresults.innerHTML = "";
  }

  results.map((result)=>{
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add("Search-result");
    const image = document.createElement('img');
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.target="_blank";
    imageLink.href = result.links.html;
    imageLink.textContent = result.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    Searchresults.appendChild(imageWrapper);
  });

  page++;
  if(page > 1){
   Showmore.style.display = "block";
  }
}

formE1.addEventListener("submit", (event) => {
  event.preventDefault();    
  page = 1;
  Searchimages();
});

Showmore.addEventListener("click",() => {
  Searchimages();
});
