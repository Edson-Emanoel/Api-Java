package com.treinamentos.javaspring.controller;

import org.springframework.web.bind.annotation.RestController;

import com.treinamentos.javaspring.model.Aluno;
import com.treinamentos.javaspring.repostiory.AlunoRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/alunos")
public class AlunoController {
    
    @Autowired
    private AlunoRepository alunoRepository;

    @CrossOrigin("*")
    @PostMapping("/cadastrar")
    public Aluno cadastrar(@RequestBody Aluno obj) {
        return alunoRepository.save(obj);
    }

    @CrossOrigin("*")
    @GetMapping("/todos")
    public Iterable<Aluno> listar() {
        return alunoRepository.findAll();
    }
    
    @CrossOrigin("*")
    @GetMapping("/aluno/{id}")
    public Optional<Aluno> listarUm(@PathVariable Long id) {
        return alunoRepository.findById(id);
    }

}
