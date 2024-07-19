package com.treinamentos.javaspring.repostiory;

import org.springframework.data.repository.CrudRepository;

import com.treinamentos.javaspring.model.Aula;

public interface AulaRepository extends CrudRepository<Aula, Long> {}