import React, { useState, useEffect } from 'react';
import { useCarDataDelete } from '../../hooks/useCarDataDelete.ts'; // Importa o hook de exclusão
import { CarData } from '../../interface/CarData.ts';
import "../create-modal/modal.css"; 

interface DeleteModalProps {
  closeModal(): void;
  carData: CarData;
}

export function DeleteModal({ closeModal, carData }: DeleteModalProps) {
  const [id] = useState(carData.id);
  const [marca, setMarca] = useState(carData.marca);
  const [nome, setNome] = useState(carData.nome);
  const [imagem, setImage] = useState(carData.imagem);
  const [valor, setValor] = useState(carData.valor);
  const { mutate, isSuccess } = useCarDataDelete();

  const botaoDelete = async () => {
    const deleteCarData: CarData = {
        id,
        marca,
        nome,
        imagem,
        valor,
      };
      mutate(deleteCarData); 
    };

  useEffect(() => {
    if (isSuccess) {
      closeModal();
    }
  }, [isSuccess, closeModal]);

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h4>Tem certeza que deseja excluir o <b>{marca} {nome}</b>?</h4>
        {/* <p>
          Marca: {carData.marca} <br />
          Nome: {carData.nome} <br />
          Imagem: {carData.imagem} <br />
          Valor: {carData.valor}
        </p> */}
        <div className='superior' style={{ gap: `20px` }}>
        <button onClick={closeModal} className="btn-secundario">
          Cancelar
        </button>
        <button onClick={botaoDelete} className="btn-secundario" id='excluir'>
          Excluir           
        </button>
        
        </div>
        
      </div>
    </div>
  );
}
