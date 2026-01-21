package com.NewHire.Service;

import com.NewHire.Entity.Users;
import com.NewHire.Exception.InvalidCredentialsException;
import com.NewHire.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    UserRepo userRepo;

    public void signup(Users users) {
        userRepo.save(users);
    }

    public Users login(String password, String email) {
      Users users = userRepo.findByEmail(email).orElseThrow(()-> new InvalidCredentialsException("User not found"));
      if(!users.getNewPassword().equals(password)){
          throw new InvalidCredentialsException("Invalid Password");
      }
      return users;
    }
}
