package com.postgres.Boot.controller;

import java.util.List;

import javax.validation.Valid;

import com.postgres.Boot.dao.ToDoDao;
import com.postgres.Boot.exception.ResourceNotFoundException;
import com.postgres.Boot.model.ToDo;
import com.postgres.Boot.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/home")
public class ToDoController {

    @Autowired
    private ToDoDao toDoDao;

    @GetMapping
    public List<ToDo> getTodos(){
    	return toDoDao.findAll();
    }

    @PostMapping
    public ToDo createTodo(@Valid @RequestBody ToDo item) {

        return toDoDao.save(item);
    }

    @PutMapping("/{id}")
    public ToDo updateToDo(@PathVariable Long id,
                           @Valid @RequestBody ToDo toDo) {
        return toDoDao.findById(id)
                .map(t -> {
                    t.setTitle(toDo.getTitle());
                    t.setCompleted(toDo.getCompleted());
                    t.setDescription(toDo.getDescription());
                    return toDoDao.save(t);

                }).orElseThrow(()-> new ResourceNotFoundException("todo not found with id "+ id));

    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        return toDoDao.findById(id)
                .map(t -> {
                    toDoDao.delete(t);
                    return ResponseEntity.ok().build();
                }).orElseThrow(() -> new ResourceNotFoundException("user not found with id "+ id));

    }

    @DeleteMapping
    public HttpStatus deleteAll() {
        toDoDao.deleteAll();
        return HttpStatus.GONE;
    }


}