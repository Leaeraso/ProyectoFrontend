import { productoActivo } from '../../main';
import { deleteProduct, saveOrModifyProduct } from '../services/product';

// evento para guardar/modificar producto
document.getElementById('acceptButton').addEventListener('click', () => {
  saveOrModifyProduct();
});

// evento para cerrar modal
document.getElementById('cancelButton').addEventListener('click', () => {
  closeModal();
});

// evento para eliminar un producto
document.getElementById('deleteButton').addEventListener('click', () => {
  deleteProduct();
  closeModal();
});

// metodo para abrir modal
export const openModal = () => {
  document.getElementById('modalPopUp').style.display = 'flex';
  const btnDelete = document.getElementById('deleteButton');
  if (productoActivo) {
    btnDelete.style.display = 'block';
    const nombre = document.getElementById('nombre');
    const img = document.getElementById('img');
    const precio = document.getElementById('precio');
    const categoria = document.getElementById('categoria');

    nombre.value = productoActivo.nombre;
    img.value = productoActivo.img;
    precio.value = productoActivo.precio;
    categoria.value = productoActivo.categoria;
  } else {
    btnDelete.style.display = 'none';
  }
};

// metodo para cerrar modal
export const closeModal = () => {
  document.getElementById('modalPopUp').style.display = 'none';
  resetModal();
};

// metodo para resetear modal
const resetModal = () => {
  const nombre = document.getElementById('nombre');
  const img = document.getElementById('img');
  const precio = document.getElementById('precio');
  const categoria = document.getElementById('categoria');

  nombre.value = '';
  img.value = '';
  precio.value = '';
  categoria.value = 'Seleccione una categoria';
};
