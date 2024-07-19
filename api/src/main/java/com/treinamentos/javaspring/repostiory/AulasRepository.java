package com.treinamentos.javaspring.repostiory;

import org.springframework.data.repository.CrudRepository;

import com.treinamentos.javaspring.model.Aulas;

public interface AulasRepository extends CrudRepository<Aulas, Long> {}