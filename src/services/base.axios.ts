import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { UNPROTECTED_PATH } from "../constants/path.route";
import { clearToken } from "../utils/storage";
import { IUser } from "./datasources/interfaces/user";

class BaseAxios {
  private instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    this.instance.interceptors.response.use(
      (response) => response,
      (err) => {
        if (err.response.status === 401) {
          this.handleUnAuthorized();
        }
        return Promise.reject(err);
      }
    );

    this.instance.interceptors.request.use(
      (config) => {
        const token = this.getToken();
        if (token?.trim()?.length > 0) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );
  }

  getInstance() {
    return this.instance;
  }

  private handleUnAuthorized() {
    if (window) {
      clearToken();
      window.location.href = UNPROTECTED_PATH.LOGIN;
    }
  }

  private getToken() {
    return (JSON.parse(localStorage.getItem("user") ?? "{}") as IUser)?.token;
  }
}

export default BaseAxios;
