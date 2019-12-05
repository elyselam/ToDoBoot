package com.postgres.Boot.controller;

import com.postgres.Boot.dao.UserDao;
import com.postgres.Boot.exception.ResourceNotFoundException;
import com.postgres.Boot.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin
@RestController
public class UserController {

    @Autowired
    private UserDao userDao;

    @GetMapping("/users")
    List<User> getUsers() {
        return userDao.findAll();

    }

    @PostMapping("/register")
    HttpStatus saveUsers(@Valid @RequestBody User user){
         userDao.save(user);
         return HttpStatus.CREATED;
    }

    @PutMapping("/users/{id}")
    public User updateUser(@PathVariable Long id,
                           @Valid @RequestBody User user) {
        return userDao.findById(id)
        .map(u -> {
            u.setEmail(user.getEmail());
            u.setPassword(user.getPassword());
            return userDao.save(u);

        }).orElseThrow(()-> new ResourceNotFoundException("user not found with id "+ id));

    }


    @DeleteMapping("/users/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        return userDao.findById(id)
                .map(u -> {
                    userDao.delete(u);
                    return ResponseEntity.ok().build();
                }).orElseThrow(() -> new ResourceNotFoundException("user not found with id "+ id));

    }


}
