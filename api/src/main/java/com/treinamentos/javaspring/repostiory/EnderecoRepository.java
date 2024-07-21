package com.treinamentos.javaspring.repostiory;

import org.springframework.data.repository.CrudRepository;

import com.treinamentos.javaspring.model.Endereco;

public interface EnderecoRepository extends CrudRepository<Endereco, Long>{}