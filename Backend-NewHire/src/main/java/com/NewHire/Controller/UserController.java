package com.NewHire.Controller;

import com.NewHire.Entity.Users;
import com.NewHire.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/new")
public class UserController {
  @Autowired
  UserService userService;

  @PostMapping("/save")
  public ResponseEntity<?> saveUser(@RequestBody Users users){
     userService.saveUser(users);
     return ResponseEntity.ok("User created successfully...");

  }
}
