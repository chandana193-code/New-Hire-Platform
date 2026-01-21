package com.NewHire.Controller;

import com.NewHire.DTO.Signup;
import com.NewHire.Entity.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class AuthController {

@Autowired

  @PostMapping("/signup")
  public ResponseEntity<?> signup(@RequestBody Signup signup){
    Users users = new Users();
    users.setUserName(signup.getUsername());
    users.setEmail(signup.getEmail());
    users.setConformPassword(signup.getConformPassword());
    users.setNewPassword(signup.getNewPassword());


  }
}
