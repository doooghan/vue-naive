import axios from 'axios';
import { reqResolve, reqReject, resResolve, resReject } from './interceptors';

export function createAxios(opitons = {}) {
  const defaultOptions = {
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 12000,
  };
  const service = axios.create({
    ...defaultOptions,
    ...opitons,
  });
  service.interceptors.request.use(reqResolve, reqReject);
  service.interceptors.response.use(resResolve, resReject);
  return service;
}

export const defAxios = createAxios();
export const testAxios = createAxios({ baseURL: import.meta.env.VITE_APP_BASE_API_TEST });