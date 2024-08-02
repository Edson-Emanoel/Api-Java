package com.treinamentos.javaspring.repostiory;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.treinamentos.javaspring.model.Funcionario;

@Repository
public interface FuncionarioRepository extends CrudRepository<Funcionario, Long> {
    
}
