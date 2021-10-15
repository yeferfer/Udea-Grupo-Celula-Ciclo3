const callApi = async (url, options = {}) => {
  const response = await fetch("http://localhost:3002/api" + url, options);
  const data = await response.json();
  return data;
};

const api = {
  products: {
    list() {
      return callApi("/products");
    },
    create(producto) {
      return callApi("/products", {
        method: "POST",
        body: JSON.stringify(producto),
      });
    },
  },

  ventas: {
    list() {
      return callApi("/ventas");
    },
    crete(ventas) {
      return callApi("/ventas", {
        method: "POST",
        body: JSON.stringify(ventas),
      });
    },
  },

  usuarios: {
    list() {
      return callApi("/usuarios");
    },
    create(usuarios) {
      return callApi("/usuarios", {
        method: "POST",
        body: JSON.stringify(usuarios),
      });
    },
  },

  categorias: {
    list() {
      return callApi("/categorias");
    },
  },
};

export default api;
