"use strict";

var imagePreview = document.getElementById('image-preview');
var fileinput = document.getElementById('file-input');
var fileLabel = document.getElementById('custom-file-label');
var addButton = document.getElementById('btn-add');
var galleryContainer = document.querySelector('.gallery-container');
var empty = document.querySelector('.empty');
fileinput.addEventListener('change', function () {
  var file = fileinput.files[0];
  if (file) {
    var reader = new FileReader();
    reader.onload = function (e) {
      imagePreview.src = e.target.result;
      imagePreview.style.display = 'block';
      fileLabel.textContent = "Cambiar Imagen";
    };
    reader.readAsDataURL(file);
  } else {
    imagePreview.src = '';
    imagePreview.style.display = 'none';
    fileLabel.textContent = 'Subir Imagen';
    empty.style.display = 'block';
  }
});
addButton.addEventListener('click', function (e) {
  e.preventDefault();
  var file = fileinput.files[0];
  if (file) {
    if (empty) {
      empty.style.display = 'none';
    }
    //creamos la imagen
    var galleryImage = document.createElement('img');
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