package com.treinamentos.javaspring.model;

import java.time.Instant;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity(name = "livros")
public class Livro {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;   

    private String nome;

    private String descricao;

    private String autor;
    
    private String anoLanc;
    
    private String paginas;

    @CreationTimestamp
    @DateTimeFormat(iso = ISO.DATE)
    private Instant dataCadastro;

    @UpdateTimestamp
    @DateTimeFormat(iso = ISO.DATE)
    private Instant dataAtualizacao;
}