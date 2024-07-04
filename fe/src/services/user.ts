import api from "./api";

export const postName = async (name: string) => {
  try {
    const response = await api.post("/name", { name });
    return response;
  } catch (error) {
    throw error;
  }
};
