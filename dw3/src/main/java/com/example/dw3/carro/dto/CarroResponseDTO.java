package com.example.dw3.carro.dto;

import com.example.dw3.carro.Carro;

public record CarroResponseDTO(Long id, String marca, String nome, String imagem, Integer valor) {

    public CarroResponseDTO (Carro carro) {
        this(carro.getId(), carro.getMarca(), carro.getNome(), carro.getImagem(), carro.getValor());
    }
}
