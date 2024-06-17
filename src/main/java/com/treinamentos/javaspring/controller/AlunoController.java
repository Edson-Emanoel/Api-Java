package com.treinamentos.javaspring.controller;

import org.springframework.web.bind.annotation.RestController;

import com.treinamentos.javaspring.model.Aluno;
import com.treinamentos.javaspring.repostiory.AlunoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/alunos")
public class AlunoController {
    
    @Autowired
    private AlunoRepository alunoRepository;

    @PostMapping("/cadastrar")
    public Aluno cadastrar(@RequestBody Aluno obj) {
        return alunoRepository.save(obj);
    }

    @GetMapping("/todos")
    public Iterable<Aluno> listar() {
        return alunoRepository.findAll();
    }
    
}
