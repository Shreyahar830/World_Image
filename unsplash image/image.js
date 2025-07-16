
let client_id = "an-8PjMLtteTyAyvObs8zMWp_BO7UhY-ndizn7-3LVU";
let form = document.querySelector("form");
let inputBox = document.querySelector("input");
let container = document.querySelector(".image-main");
let loadmore = document.querySelector(".loadmore");

let page = 1;

let getData = async (keyword) => {

    try{
           let res = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${client_id}&per_page=10`);

           let data = await res.json();

           data.results.forEach(function (image){
             container.innerHTML += `<div class="image">
    <img src=${image.urls.regular} alt="">
</div>`
           });
        }catch(error){

          console.log(error)
    }
   
};
getData("random");

form.addEventListener("submit" , function(e) {
  
    e.preventDefault();
    container.innerHTML = "";
    let value = inputBox.value;
  getData(value);
});

 loadmore.addEventListener("click" , function() {
  page++
    let value = inputBox.value;
  getData(value || "random");
});

