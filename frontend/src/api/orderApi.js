import apiClient from "./apiClient";

export const createOrder = (order) => apiClient.post("/orders", order);
export const getAllOrders = () => apiClient.get("/orders");
export const getOrderById = (id) => apiClient.get(`/orders/${id}`);
export const getMyOrders = (email) => apiClient.get("/orders/my-orders", { params: { userEmail: email } });