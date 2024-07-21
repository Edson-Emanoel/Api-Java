package com.treinamentos.javaspring.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.treinamentos.javaspring.model.Endereco;
import com.treinamentos.javaspring.repostiory.EnderecoRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/endereco")
public class EnderecoController {
    
    @Autowired
    private EnderecoRepository enderecoRepository;

    @CrossOrigin("*")
    @PostMapping("/cadastrar")
    public Endereco cadastrar(@RequestBody Endereco obj) {
        return enderecoRepository.save(obj);
    }
    
    @CrossOrigin("*")
    @GetMapping("/todos")
    public Iterable<Endereco> listar() {
        return enderecoRepository.findAll();
    }
    
    @CrossOrigin("*")
    @GetMapping("/{id}")
    public Optional<Endereco> listarUm(@PathVariable Long id) {
        return enderecoRepository.findById(id);
    }
    
    @CrossOrigin("*")
    @DeleteMapping("/remover/{id}")
    public ResponseEntity<Void> remover(@PathVariable Long id){
        enderecoRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/alterar")
    public Endereco atualizar(@RequestBody Endereco obj) {
        if (obj.getId() != null) {
            return enderecoRepository.save(obj);    
        }   return obj;
    }
}