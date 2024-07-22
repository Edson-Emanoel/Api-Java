package com.treinamentos.javaspring.repostiory;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.treinamentos.javaspring.model.Produto;

@Repository
public interface ProdutoRepository extends CrudRepository<Produto, Long> {}