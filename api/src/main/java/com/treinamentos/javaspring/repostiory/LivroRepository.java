package com.treinamentos.javaspring.repostiory;

import org.springframework.data.repository.CrudRepository;

import com.treinamentos.javaspring.model.Livro;

public interface LivroRepository extends CrudRepository<Livro, Long> {}