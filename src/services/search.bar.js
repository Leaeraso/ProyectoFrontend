import { renderList } from '../views/store';
import { getProductLocalStorage } from '../persistence/local.storage';

// metodo para buscar los productos por nombre
export const searchProductByName = () => {
  const inputHeader = document.getElementById('inputHeader');
  const products = getProductLocalStorage();
  const result = products.filter((product) =>
    product.nombre.toLowerCase().includes(inputHeader.value.toLowerCase())
  );

  renderList(result);
};
