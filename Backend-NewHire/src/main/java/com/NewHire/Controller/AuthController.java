package com.NewHire.Controller;

import com.NewHire.DTO.Login;
import com.NewHire.DTO.Signup;
import com.NewHire.Entity.Users;
import com.NewHire.Service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
@RestController
@RequestMapping("/new")
public class AuthController {

@Autowired
  AuthService authService;

  @PostMapping("/signup")
  public ResponseEntity<?> signup(@RequestBody Signup signup){
    Users users = new Users();

    users.setEmail(signup.getEmail());
    users.setConformPassword(signup.getConformPassword());
    users.setNewPassword(signup.getNewPassword());
  authService.signup(users);
  return ResponseEntity.ok("User Register Successfully");

  }
  @PostMapping("/login")
  public  ResponseEntity<?> login(@RequestBody Login login){
    Users users = authService.login(login.getNewPassword(),login.getEmail());
    if(users==null){
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
    }
    return ResponseEntity.ok(Map.of(
            "email",users.getEmail(),
            "Message","Login Successfully"));
  }
}
