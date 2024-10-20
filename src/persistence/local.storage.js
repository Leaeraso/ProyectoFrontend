// metodo para obtener los productos del local storage
export const getProductLocalStorage = () => {
  const products = JSON.parse(localStorage.getItem('products')) || [];
  return products;
};

// metodo para guardar un producto en el local storage
export const setInLocaalStorage = (product) => {
  let products = getProductLocalStorage();
  const existingIndex = products.findIndex((productLocal) => {
    return productLocal.id === product.id;
  });

  if (existingIndex !== -1) {
    products[existingIndex] = product;
  } else {
    products.push(product);
  }

  localStorage.setItem('products', JSON.stringify(products));
};
