import { categoriaActiva } from '../../main';
import { getProductLocalStorage } from '../persistence/local.storage';
import { renderList } from '../views/store';

// metodo para filtrar productos por categoria
const filterProductsByCategory = (categoryIn) => {
  // obtenemos los productos del local storage
  const products = getProductLocalStorage();

  switch (categoryIn) {
    case 'Todo':
      renderList(products);
      break;
    case categoriaActiva:
      renderList(products);
      break;
    case 'Hamburguesas':
    case 'Papas':
    case 'Gaseosas':
      const result = products.filter(
        (product) => product.categoria === categoryIn
      );
      renderList(result);
      break;
    case 'mayorPrecio':
      const result2 = products.sort((a, b) => b.precio - a.precio);
      renderList(result2);
      break;
    case 'menorPrecio':
      const result3 = products.sort((a, b) => a.precio - b.precio);
      renderList(result3);
      break;
    default:
      break;
  }
};

// renderizado de las categorias
export const renderCategories = () => {
  const ulList = document.getElementById('listFilter');
  ulList.innerHTML = `
    <li class="liActive" id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="mayorPrecio">Mayor Precio</li>
    <li id="menorPrecio">Menor Precio</li>
    `;

  // evento para estilar categoria activa
  const liElements = document.querySelectorAll('#listFilter li');
  liElements.forEach((li) => {
    li.addEventListener('click', (e) => {
      filterProductsByCategory(e.target.id);
      liElements.forEach((li) => {
        li.classList.remove('liActive');
      });
      e.target.classList.add('liActive');
    });
  });
};
