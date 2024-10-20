import { renderCategories } from './src/services/categories';
import { getProductsToStore } from './src/views/store';
import { openModal } from './src/views/modal';
import './style.css';
import { searchProductByName } from './src/services/search.bar';

// metoodo para setear categoria activa
export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn) => {
  categoriaActiva = categoriaIn;
};

// metodo para setear producto activo
export let productoActivo = null;
export const setProductoActivo = (productoIn) => {
  productoActivo = productoIn;
};

// metodo para renderizar categorias
renderCategories();
// metodo para obtener los productos y renderizarlos
getProductsToStore();

// evento para abrir modal
document.getElementById('btn_add').addEventListener('click', () => {
  setProductoActivo(null);
  openModal();
});

// evento para activar metodo de busqueda por nombre
document.getElementById('btn_search').addEventListener('click', () => {
  searchProductByName();
});

const toggleButton = document.getElementById('toggleButton');
const categoryList = document.getElementById('listFilter');

toggleButton.addEventListener('click', () => {
  // mostrar/ocultar categoria
  categoryList.classList.toggle('open');

  // rotar icono
  toggleButton.classList.toggle('rotated');
});
