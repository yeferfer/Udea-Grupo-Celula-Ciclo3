const callApi = async (url, options = {}) => {
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

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
    delete(producto) {
      return callApi(`/products/${producto._id}`, {
        method: "DELETE",
      });
    },
    edit(producto) {
      return callApi(`/products/${producto._id}`, {
        method: "PATCH",
        body: JSON.stringify(producto),
      });
    },
    getProduct(id) {
      return callApi(`/products/${id}`);
    },
  },

  ventas: {
    list() {
      return callApi("/ventas");
    },
    create(venta) {
      return callApi("/ventas", {
        method: "POST",
        body: JSON.stringify(venta),
      });
    },
    delete(venta) {
      return callApi(`/ventas/${venta._id}`, {
        method: "DELETE",
      });
    },
    edit(venta) {
      return callApi(`/ventas/${venta._id}`, {
        method: "PATCH",
        body: JSON.stringify(venta),
      });
    },
    getVentas(id) {
      return callApi(`/ventas/${id}`);
    },
  },
};

export default api;
