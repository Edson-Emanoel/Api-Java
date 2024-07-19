package com.treinamentos.javaspring.controller;

import org.springframework.web.bind.annotation.RestController;

import com.treinamentos.javaspring.model.Aulas;
import com.treinamentos.javaspring.repostiory.AulasRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@RequestMapping("/api/aulas")
public class AulasController {
    
    @Autowired
    private AulasRepository aulasRepository;

    @CrossOrigin("*")
    @PostMapping("/cadastrar")
    public Aulas cadastrar(@RequestBody Aulas obj) {
        return aulasRepository.save(obj);
    }

    @CrossOrigin("*")
    @GetMapping("/")
    public Iterable<Aulas> listarTodos() {
        return aulasRepository.findAll();
    }

    @CrossOrigin("*")
    @GetMapping("/{id}")
    public Optional<Aulas> listarUm(@PathVariable Long id) {
        return aulasRepository.findById(id);
    }
    
    @CrossOrigin("*")
    @DeleteMapping("/remover/{id}")
    public ResponseEntity<Void> remover(@PathVariable Long id) {
        aulasRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @CrossOrigin("*")
    @PutMapping("/alterar/{id}")
    public Aulas atualizar(@RequestBody Aulas obj) {
        if (obj.getId() != null) {
            return aulasRepository.save(obj);    
        }   return obj;
    }

}
