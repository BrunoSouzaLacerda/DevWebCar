import React, { useState } from "react";
import "./card.css";
import { EditModal } from "../edit-modal/edit-modal.tsx"; // Importa o EditModal
import { DeleteModal } from "../delete-modal/delete-modal.tsx"; // Importa o DeleteModal

interface CardProps {
  id: number;
  valor: number;
  nome: string;
  marca: string;
  imagem: string;
}

export function Card({ id, valor, nome, marca, imagem }: CardProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const botaoOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const botaoCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const botaoOpenDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const botaoCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="card">
      <div className="botoesacao">
        <i className='far fa-edit' onClick={botaoOpenEditModal}></i>
        <i className="fa fa-trash-o" onClick={botaoOpenDeleteModal}></i>
      </div>
      <div className="image-container" style={{ backgroundImage: `url(${imagem})` }}></div>
      <div className="infoscarros">
        <h3 style={{ width: `100%` }}>{marca}</h3>
        <h2 style={{ width: `100%` }}>{nome}</h2>
        <p>
          R${valor}
        </p>
      </div>
      {isEditModalOpen && (
        <EditModal
          closeModal={botaoCloseEditModal}
          initialData={{ id, valor, nome, marca, imagem }}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteModal
          closeModal={botaoCloseDeleteModal}
          carData={{ id, valor, nome, marca, imagem }}
        />
      )}
    </div>
  );
}
