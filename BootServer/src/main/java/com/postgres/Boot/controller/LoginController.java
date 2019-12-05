package com.postgres.Boot.controller;

import com.postgres.Boot.dao.ToDoDao;
import com.postgres.Boot.dao.UserDao;
import com.postgres.Boot.model.DTO.LoginCredentials;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class LoginController {

    @Autowired
    private UserDao userDao;

    @PostMapping("/")
    public HttpStatus findByEmail(@RequestBody LoginCredentials loginCredentials ) {
//        System.out.println(loginCredentials.getEmail()).get());
        if (userDao.findByEmail(loginCredentials.getEmail()).isPresent()) {
            if (userDao.findByEmail(loginCredentials.getEmail()).get().getPassword()
            .equals(loginCredentials.getPassword())) {
                return HttpStatus.CREATED; //butt, face
            }
        }
        return HttpStatus.NOT_FOUND;
        //System.out.println(loginCredentials.toString());
    }

}
