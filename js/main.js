const imagePreview = document.getElementById('image-preview');
const fileinput = document.getElementById('file-input');
const fileLabel = document.getElementById('custom-file-label');
const addButton = document.getElementById('btn-add');
const galleryContainer = document.querySelector('.gallery-container');
const empty = document.querySelector('.empty');

fileinput.addEventListener('change', () =>{
    const file = fileinput.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
            fileLabel.textContent = "Cambiar Imagen";
        }
        reader.readAsDataURL(file);
    }else{
        imagePreview.src= '';
        imagePreview.style.display = 'none';
        fileLabel.textContent = 'Subir Imagen'
        empty.style.display = 'block';
    }
 });

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    const file = fileinput.files[0];
    if(file) {
        if (empty) {
            empty.style.display = 'none';
        }
        //creamos la imagen
        const galleryImage = document.createElement('img');
        galleryImage.src = imagePreview.src; // Muestra la imagen seleccionada
        galleryImage.alt = 'Imagen de la galería';
        galleryImage.classList.add('thumbnail');
        // Añadir la imagen a la galería
        galleryContainer.appendChild(galleryImage);
        // Resetear la vista previa y el input
        fileinput.value = '';
        imagePreview.src = '';
        imagePreview.style.display = 'none';
        fileLabel.textContent = 'Subir Imagen';
    } else {
        alert('Por favor selecciona una imagen primero.');
    }
});
