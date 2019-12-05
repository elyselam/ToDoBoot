package com.postgres.Boot.dao;

import com.postgres.Boot.model.ToDo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ToDoDao extends JpaRepository<ToDo, Long> {
}