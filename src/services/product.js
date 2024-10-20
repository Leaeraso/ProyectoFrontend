import { closeModal } from '../views/modal';
import {
  getProductLocalStorage,
  setInLocaalStorage,
} from '../persistence/local.storage';
import { getProductsToStore, renderList } from '../views/store';
import { productoActivo } from '../../main';
import Swal from 'sweetalert2';

// metodo para guardar/modificar producto en el local storage
export const saveOrModifyProduct = () => {
  const nombre = document.getElementById('nombre').value;
  const img = document.getElementById('img').value;
  const precio = document.getElementById('precio').value;
  const categoria = document.getElementById('categoria').value;
  let object = null;

  if (productoActivo) {
    object = {
      ...productoActivo,
      nombre,
      img,
      precio,
      categoria,
    };
  } else {
    object = {
      id: new Date().toISOString(),
      nombre,
      img,
      precio,
      categoria,
    };
  }
  Swal.fire('Guardado', 'El producto se guardo correctamente', 'success');
  // guardamoos en el local storage
  setInLocaalStorage(object);
  // obtenemos los productos y los renderizamos
  getProductsToStore();
  // cerramos el modal
  closeModal();
};

// metodo para eliminar un producto del local storage
export const deleteProduct = () => {
  Swal.fire({
    title: '¿Desea eliminar el producto?',
    text: 'Si lo eliminas sera permanente!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar!',
  }).then((result) => {
    if (result.isConfirmed) {
      // obtenemos los productos del local storage
      const products = getProductLocalStorage();
      const result = products.filter(
        (product) => product.id !== productoActivo.id
      );
      // filtramos los productos y los guardamos en el local storage
      localStorage.setItem('products', JSON.stringify(result));
      // obtenemos los productos y los renderizamos
      const newProducts = getProductLocalStorage();
      renderList(newProducts);
    }
  });
};
