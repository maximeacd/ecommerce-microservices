import apiClient from "./apiClient";

export const register = (user) => apiClient.post("/auth/register", user);
export const login = (credentials) => apiClient.post("/auth/login", credentials);
export const getProfile = () => apiClient.get("/users/me");