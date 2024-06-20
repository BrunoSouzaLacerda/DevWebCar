import axios, { AxiosPromise } from 'axios';
import { useMutation, UseMutationOptions, useQueryClient } from '@tanstack/react-query';
import { CarData } from '../interface/CarData';

const API_URL = 'http://localhost:8080';

interface DeleteCarDataParams {
  carId: number | undefined; // ou o tipo apropriado para o ID do carro
}

const deleteCarData = async (data: CarData): AxiosPromise<any> => {
  const response = await axios.delete(`${API_URL}/carros/${data.id}`);
  return response.data; // Retorna os dados da resposta, se necessário
};

export function useCarDataDelete(){
    const queryClient = useQueryClient();
  
    const mutate = useMutation({
      mutationFn: deleteCarData,
      retry: 2,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['car-data'] });
      },
    });
  
    return mutate;
  }
