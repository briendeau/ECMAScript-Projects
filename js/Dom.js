const photos = JSON.parse(content);


let section =  document.getElementById("parent");

for (let photo of photos) {
    let figEle = document.createElement("figure");
    let img = document.createElement("img");
    img.src = "./images/" + photo.filename;
    img.alt = photo.title;

    // create fig caption element that has child elements h2,p,spanx5
    let figCap = document.createElement("figcaption");
    let h2 = document.createElement("h2");
    h2.textContent = photo.title;

    let p = document.createElement("p");
    p.textContent = photo.description;
   
    // append figure to section then append img as child
    section.appendChild(figEle);
    figEle.appendChild(img);

    // append figcaption as child to section
    figEle.appendChild(figCap);

    // append child elements to fig caption
    figCap.appendChild(h2);
    figCap.appendChild(p);

      // Loop through color array and create span elements
    for (const color of photo.colors) {
        const colorElement = document.createElement("span");
        colorElement.style.backgroundColor = color.hex;
        figCap.appendChild(colorElement);
    };


 
}