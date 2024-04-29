const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryStyle = document.createElement("style");
galleryStyle.textContent = `
  .gallery {
    background: linear-gradient(to bottom, #818589, #5472d3);
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    list-style: none;
  }

  .gallery-item {
    border: 2px dotted #000000;
    padding: 10px;
    flex: 0 0 calc(33.33% - 20px);
    margin: 10px; 
  }

  .gallery-image {
    width: 100%;
    height: 100%;
  }
`;
document.head.appendChild(galleryStyle);

const galleryList = document.querySelector(".gallery");
let galleryHTML = "";

images.forEach((image) => {
  const imgHTML = `<img src="${image.url}" alt="${image.alt}" class="gallery-image">`;
  const liHTML = `<li class="gallery-item">${imgHTML}</li>`;
  galleryHTML += liHTML;
});

galleryList.insertAdjacentHTML("beforeend", galleryHTML);
