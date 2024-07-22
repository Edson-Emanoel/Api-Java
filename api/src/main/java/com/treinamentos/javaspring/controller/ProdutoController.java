package com.treinamentos.javaspring.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.treinamentos.javaspring.model.Produto;
import com.treinamentos.javaspring.repostiory.ProdutoRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/produto")
public class ProdutoController {
    
    @Autowired
    private ProdutoRepository produtoRepository;

    @CrossOrigin("*")
    @PostMapping("/cadastrar")
    public Produto cadastrar(@RequestBody Produto obj) {
        return produtoRepository.save(obj);
    }

    @CrossOrigin("*")
    @GetMapping("/todos")
    public Iterable<Produto> listar() {
        return produtoRepository.findAll();
    }
    
    @CrossOrigin("*")
    @GetMapping("/{id}")
    public Optional<Produto> listarUm(@PathVariable Long id) {
        return produtoRepository.findById(id);
    }

    @CrossOrigin("*")
    @DeleteMapping("/remover/{id}")
    public ResponseEntity<Void> remover(@PathVariable Long id){
        produtoRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
    
    @CrossOrigin("*")
    @PutMapping("/alterar")
    public Produto atualizar(@RequestBody Produto obj) {
        if (obj.getId() != null) {
            return produtoRepository.save(obj);
        } return obj;
    }
}