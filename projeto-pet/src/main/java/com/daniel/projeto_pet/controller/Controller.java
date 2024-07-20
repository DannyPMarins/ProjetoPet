package com.daniel.projeto_pet.controller;

import com.daniel.projeto_pet.model.Animal;
import com.daniel.projeto_pet.service.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Controller {
    @Autowired
    private AnimalService service;

    @PostMapping("/animal")
    public ResponseEntity<Animal> salvar(@RequestBody Animal animal){
        return this.service.salvar(animal);
    }
    @GetMapping("/animal")
    public ResponseEntity<List<Animal>> listarTodos(){
        return this.service.listarTodos();
    }
    @DeleteMapping("/animal")
    public ResponseEntity remove(@RequestParam Long id){
       return this.service.remove(id);
    }
    @PutMapping("/animal")
    public ResponseEntity<Animal> editar(@RequestBody Animal animal){
        return this.service.editar(animal);
    }
    @PutMapping("/animal/status")
    public ResponseEntity<Animal> editar(@RequestParam Long id, @RequestParam Boolean status){
        return this.service.trocarStatus(id, status);
    }

}
