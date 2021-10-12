const callApi = async (url) => {
  const response = await fetch("http://localhost:3002/api" + url);
  const data = await response.json();
  return data;
};

const api = {
  products: {
    list() {
      return callApi("/products");
    },
  },

  categorias: {
    list() {
      return callApi("/categorias");
    },
  },
};

export default api;
