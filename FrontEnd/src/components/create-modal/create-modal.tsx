import { useEffect, useState } from "react"
import { useCarDataMutate } from "../../hooks/useCarDataMutate.ts";
import { CarData } from "../../interface/CarData.ts";
import "./modal.css";
import React from "react";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}
const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={e => updateValue(e.target.value)}></input>
        </>
    )
}

interface ModalProps {
    closeModal(): void;
}
export function CreateModal({ closeModal }: ModalProps) {
    const [marca, setMarca] = useState("");
    const [nome, setNome] = useState("");
    const [imagem, setImage] = useState("");
    const [valor, setValor] = useState(0);
    const { mutate, isSuccess } = useCarDataMutate();

    const submit = () => {
        const carData: CarData = {
            marca,
            nome,
            imagem,
            valor
        }

        mutate(carData)
    }

    useEffect(() => {
        if (!isSuccess) return
        closeModal();
    }, [isSuccess])


    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <div className="superior">
                    <h2>Cadastre um novo Carro</h2>
                    <i className="fa-solid fa-x" onClick={closeModal}></i>
                </div>

                <form className="input-container" action="">
                    <Input label="marca" value={marca} updateValue={setMarca} />
                    <Input label="nome" value={nome} updateValue={setNome} />
                    <Input label="imagem" value={imagem} updateValue={setImage} />
                    <Input label="valor" value={valor} updateValue={setValor} />
                </form>
                <button onClick={submit} className="btn-secundario">Cadastrar</button>
            </div>
        </div>
    )
}