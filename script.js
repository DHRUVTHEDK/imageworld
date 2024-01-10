const accesskey = "aEfn8Ike4XkMec E4Sir8r2Y20cv6_mlvfODHH2RCacs"

const formE1 = document.querySelector("form")
const inputE1 = document.getElementById("Search-input")
const SearchResults = document.querySelector(".Search-results")
const Showmore = document.getElementById("Show-more-button")

let inputData=""
let page=1;

async function Searchimages(){
    inputData = inputE1.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`

    const Response = await fetch(url)
    const data = await Response.json()

    const results = data.results

    if (page===1){
        SearchResults.innerHTML = ""
    }
    results.map((result)=>{
        const imageWrapper = document.createElement('div')
        imageWrapper.classlist.add("search-result")
        const image = document.createElement('img')
    })
}