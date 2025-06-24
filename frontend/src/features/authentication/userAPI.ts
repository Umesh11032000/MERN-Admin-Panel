import API from "../../api/axios";

export const loginToSystem = (data: any) => API.post("/auth/sign-in", data);

export default {
  loginToSystem,
};