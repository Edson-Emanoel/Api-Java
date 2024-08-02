package com.treinamentos.javaspring.controller;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.treinamentos.javaspring.model.Livro;
import com.treinamentos.javaspring.repostiory.LivroRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/livro")
public class LivroController {

    @Autowired
    private LivroRepository livroRepository;

    @CrossOrigin("*")
    @PostMapping("/cadastrar")
    public Livro cadastrar(@RequestBody Livro obj) {
        return livroRepository.save(obj);
    }

    @CrossOrigin("*")
    @GetMapping("/todos")
    public Iterable<Livro> listar() {
        return livroRepository.findAll();
    }

    @CrossOrigin("*")
    @GetMapping("/{id}")
    public Optional<Livro> listarUm(@PathVariable Long id) {
        return livroRepository.findById(id);
    }

    @CrossOrigin("*")
    @DeleteMapping("/remover/{id}")
    public ResponseEntity<Void> remover(@PathVariable Long id) {
        livroRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @CrossOrigin("*")
    @PutMapping("/alterar/{id}")
    public Livro atualizar(@RequestParam Livro obj) {
        if (obj.getId() != null) {
            return livroRepository.save(obj);    
        }   return obj;
    }
}