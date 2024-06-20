import axios, { AxiosPromise } from "axios";
import { CarData } from "../interface/CarData.ts";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<CarData[]> => {
    const response = axios.get(API_URL + '/carros');
    return response;
}

const fetchDataByName = async (name: string): AxiosPromise<CarData[]> => {
    const response = axios.get(`${API_URL}/carros/nome/${name}`);
    return response;
}

export function useCarData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['car-data'],
        retry: 2
    });

    return {
        ...query,
        data: query.data?.data
    }
}

export function useCarDataByName(name: string) {
    const query = useQuery({
        queryFn: () => fetchDataByName(name),
        queryKey: ['car-data', name],
        retry: 2
    });

    return {
        ...query,
        data: query.data?.data
    }
}
