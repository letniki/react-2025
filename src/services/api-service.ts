import axios from "axios";
import {ICar} from "../models/ICar.ts";

const baseUrl="http://185.69.152.209/carsAPI/v1";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers:{}
});
export const getCars = async ():Promise<ICar[]> =>{
   const axiosResponse = await axiosInstance.get<ICar[]>('/cars');
   return axiosResponse.data
}

export const createCar = async (car: ICar) =>{
    await axiosInstance.post('/cars',car);
}