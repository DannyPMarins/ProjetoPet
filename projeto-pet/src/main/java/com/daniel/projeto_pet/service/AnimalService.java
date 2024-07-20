package com.daniel.projeto_pet.service;

import com.daniel.projeto_pet.model.Animal;
import com.daniel.projeto_pet.repository.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnimalService {
    @Autowired
    private AnimalRepository repository;

    public ResponseEntity<Animal> salvar(Animal animal){
        try{
            return ResponseEntity.ok(this.repository.save(animal));
        }catch (Exception e){
            return ResponseEntity.badRequest().body(null);
        }
    }

    public  ResponseEntity<List<Animal>> listarTodos(){
        try{
            return ResponseEntity.ok(this.repository.findAll());
        }catch (Exception e){
            return ResponseEntity.notFound().build();
        }
    }

    public ResponseEntity remove(Long id){
        try{
            this.repository.deleteById(id);
            return ResponseEntity.ok().build();
        }catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
    }
    public ResponseEntity<Animal> editar(Animal animal){
        try{
            Animal animalEncontrado = this.repository.findById(animal.getId()).get();
            animalEncontrado.setNome(animal.getNome());
            animalEncontrado.setDescricao(animal.getDescricao());
            animalEncontrado.setUrlImagem(animal.getUrlImagem());
            animalEncontrado.setCategoria(animal.getCategoria());
            animalEncontrado.setDataNascimento(animal.getDataNascimento());
            animalEncontrado.setStatus(animal.getStatus());
            return ResponseEntity.ok(this.repository.save(animalEncontrado));
        }catch (Exception e){
            return ResponseEntity.notFound().build();
        }
    }
    public ResponseEntity<Animal> trocarStatus(Long id, Boolean status){
        try{
            Animal animalEncontrado = this.repository.findById(id).get();
            animalEncontrado.setStatus(status);
            return ResponseEntity.ok(this.repository.save(animalEncontrado));
        }catch (Exception e){
            return ResponseEntity.notFound().build();
        }
    }
}
