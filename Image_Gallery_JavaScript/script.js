

// Function to add image to the gallery
function addImage() {
    let imageUrl = document.getElementById('image-url').value;

    // check if input is not empty
    if (imageUrl) {

        //get gallery container
        let gallery = document.getElementById('gallery');

        // create gallery item div
        let galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        // create image element
        let img = document.createElement('img');
        img.src = imageUrl;
        
        // create remove button
        let removeBtn = document.createElement('button');
        removeBtn.innerText = 'Remove';
        removeBtn.classList.add('remove-btn');

        //remove image when button is clicked
        removeBtn.onclick =() => {
            gallery.removeChild(galleryItem);
        };

        // append image and button to gallery item
        galleryItem.appendChild(img);
        galleryItem.appendChild(removeBtn);

        // append gallery item to gallery
        gallery.appendChild(galleryItem);
        
        // clear input field
        document.getElementById('image-url').value = '';
    }
}

// Add event listener to the button
document.getElementById('add-image-btn').addEventListener('click', addImage);
        