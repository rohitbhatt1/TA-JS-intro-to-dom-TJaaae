
let root = document.querySelector(".main-list");

 got.houses.forEach((cv) =>{
     card(cv.people);
 }) 

//  <div class="img-parent">
//  <div class="flex">
//    <img style="border-radius: 50%; margin-right: 20px;" src="https://raw.githubusercontent.com/nnnkit/json-data-collections/master/game-of-thrones/game-of-thrones-eddard-stark.jpg" alt="">
//    <h2>Eddard"Ned"Stark</h2>
//  </div>
//  <p class="para">Lord of Winterfell - Warden of the North - Hand of the King - Married to Catelyn (Tully) Stark" </p>
//  <a class="btn" href="">Learn More!</a>
// </div>

function card(data){
    data.forEach(cv=>{
        let div = document.createElement("div");
        div.classList.add("img-parent");
        let div1 = document.createElement("div");
        div1.classList.add("flex");
        let img = document.createElement("img");
        img.src = cv.image;
        img.style.borderRadius = "50%";
        img.style.marginRight = "20px";
        let h2 = document.createElement("h2");
        h2.innerText = cv.name;
        div1.append(img,h2);
        let p = document.createElement("p");
        p.innerText = cv.description;
        div1.classList.add("para");
        let a = document.createElement("a");
        a.classList.add("btn");
        a.href = cv.wikiLink;
        a.innerText = "Learn More!";
        div.append(div1,p,a);
        root.append(div);
    })
}