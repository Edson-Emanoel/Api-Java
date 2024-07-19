package com.treinamentos.javaspring.controller;

import org.springframework.web.bind.annotation.RestController;

import com.treinamentos.javaspring.model.Aula;
import com.treinamentos.javaspring.repostiory.AulaRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/aula")
public class AulaController {
    @Autowired
    private AulaRepository aulaRepository;

    @CrossOrigin("*")
    @PostMapping("/cadastrar")
    public Aula cadastrar(@RequestBody Aula obj) {
        return aulaRepository.save(obj);
    }

    @CrossOrigin("*")
    @GetMapping("/todos")
    public Iterable<Aula> listar() {
        return aulaRepository.findAll();
    }

    @CrossOrigin("*")
    @GetMapping("/aula/{id}")
    public Optional<Aula> listarUm(@PathVariable Long id) {
        return aulaRepository.findById(id);
    }

    @CrossOrigin("*")
    @DeleteMapping("/remover/{id}")
    public ResponseEntity<Void> remover(@PathVariable Long id) {
        aulaRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
    
    @CrossOrigin("*")
    @PutMapping("/alterar/{id}")
    public Aula atualizar(@RequestBody Aula obj) {
        if (obj.getId() != null) {
            return aulaRepository.save(obj);    
        }   return obj;
    }
}