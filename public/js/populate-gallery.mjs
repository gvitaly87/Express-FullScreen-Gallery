import imgArr from './images.mjs';

const populateGallery = () => {
  // Get the gallery element so we can populate it
  const gallery = document.querySelector('#gallery');

  imgArr.forEach((picture) => {
    // insert the properties of each objects inside the array into the appropriate HTML field.
    gallery.innerHTML += `
        <figure class="hidden">
          <a href = "${picture.linkURL}"><h2>${picture.title}</h2></a>
          <img src = "./images/lg/${picture.imgName}-lg.${picture.imgExt}" 
              srcset="./images/sm/${picture.imgName}-sm.${picture.imgExt} 450w,
                      ./images/md/${picture.imgName}-md.${picture.imgExt} 750w,
                      ./images/lg/${picture.imgName}-lg.${picture.imgExt} 1920w" 
            alt = "${picture.title}" width = "${picture.width}" height = "${picture.height}" loading = "lazy" >          
          <figcaption>
            ${picture.description} Picture by: <a href = "${picture.creditURL}">${picture.credit}</a>
          </figcaption>
        </figure>  
    `;
  });
};

export default populateGallery;
