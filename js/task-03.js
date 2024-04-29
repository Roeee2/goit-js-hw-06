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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around; /* Adjust as needed */
  }

  .gallery-item {
    flex: 0 0 calc(33.33% - 20px); /* Adjust item width */
    margin: 10px; /* Adjust spacing between items */
  }

  .gallery-image {
    width: 100%;
    height: auto;
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
