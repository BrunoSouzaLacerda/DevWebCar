import axios, { AxiosPromise } from "axios";
import { CarData } from "../interface/CarData.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const putData = async (data: CarData): AxiosPromise<any> => {
  const response = await axios.put(API_URL + '/carros/' + data.id, data);
  return response;
}

export function useCarDataUpdate(){
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: putData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['car-data'] });
    },
  });

  return mutate;
}
