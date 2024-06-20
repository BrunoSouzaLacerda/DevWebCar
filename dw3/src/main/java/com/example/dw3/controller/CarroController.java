package com.example.dw3.controller;


import com.example.dw3.carro.Carro;
import com.example.dw3.carro.CarroRepository;
import com.example.dw3.carro.dto.CarroResponseDTO;
import com.example.dw3.dto.CarroRequestDTO;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("carros")
public class CarroController {

    @Autowired
    private CarroRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<CarroResponseDTO> getAll(){
        List<CarroResponseDTO> Listacarros = repository.findAll().stream().map(CarroResponseDTO::new).toList();
        return  Listacarros;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/id/{id}")
    public List<CarroResponseDTO> getId(@PathVariable Long id){
        List<CarroResponseDTO> carroUnico = repository.findById(id).stream().map(CarroResponseDTO::new).toList();
        return  carroUnico;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/nome/{nome}")
    public List<CarroResponseDTO> getCarrosByNome(@PathVariable String nome) {
        List<Carro> carros = repository.findByNomeContainingIgnoreCase(nome);
        List<CarroResponseDTO> carrosDTO = carros.stream()
                .map(CarroResponseDTO::new)
                .collect(Collectors.toList());
        return carrosDTO;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveCar(@Valid @RequestBody CarroRequestDTO data){
        Carro carroData = new Carro(data);
        repository.save(carroData);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/{id}")
    public ResponseEntity<Void> updateCar(@PathVariable Long id, @Valid @RequestBody CarroRequestDTO data) {
        Optional<Carro> optionalCarro = repository.findById(id);
        if (optionalCarro.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        Carro carroToUpdate = optionalCarro.get();
        carroToUpdate.setMarca(data.marca());
        carroToUpdate.setNome(data.nome());
        carroToUpdate.setImagem(data.imagem());
        carroToUpdate.setValor(data.valor());
        repository.save(carroToUpdate);
        return ResponseEntity.ok().build();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCar(@PathVariable Long id){
        Optional<Carro> optionalCarro = repository.findById(id);
        if (optionalCarro.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        repository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
