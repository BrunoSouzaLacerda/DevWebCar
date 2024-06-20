import { useEffect, useState } from "react";
import { useCarDataUpdate } from "../../hooks/useCarDataUpdate.ts"; 
import { CarData } from "../../interface/CarData.ts";
import "../create-modal/modal.css";
import React from "react";

interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: any): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input
        value={value}
        onChange={(e) => updateValue(e.target.value)}
      ></input>
    </>
  );
};

interface EditModalProps {
  closeModal(): void;
  initialData: CarData; 
}

export function EditModal({ closeModal, initialData }: EditModalProps) {
  const [id] = useState(initialData.id);
  const [marca, setMarca] = useState(initialData.marca);
  const [nome, setNome] = useState(initialData.nome);
  const [imagem, setImage] = useState(initialData.imagem);
  const [valor, setValor] = useState(initialData.valor);
  const { mutate, isSuccess } = useCarDataUpdate(); 

  const botaoSubmit = () => {
    const updatedCarData: CarData = {
      id,
      marca,
      nome,
      imagem,
      valor,
    };

    mutate(updatedCarData); 
  };

  useEffect(() => {
    if (isSuccess) {
      closeModal();
    }
  }, [isSuccess, closeModal]);

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <div className="superior">
          <h2>Editar {initialData.marca} {initialData.nome}</h2> 
          <i className="fa-solid fa-x" onClick={closeModal}></i>
        </div>
        <form className="input-container" action="">
          <Input label="marca" value={marca} updateValue={setMarca} />
          <Input label="nome" value={nome} updateValue={setNome} />
          <Input label="imagem" value={imagem} updateValue={setImage} />
          <Input label="valor" value={valor} updateValue={setValor} />
        </form>
        <button onClick={botaoSubmit} className="btn-secundario">
          Salvar
        </button>
      </div>
    </div>
  );
}
