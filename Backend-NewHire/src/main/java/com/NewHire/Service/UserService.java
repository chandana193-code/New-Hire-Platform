package com.NewHire.Service;

import com.NewHire.Entity.Users;
import com.NewHire.Exception.UserAlreadyExistsException;
import com.NewHire.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
  @Autowired
  UserRepo userRepo;


  public Users saveUser(Users users) {
    if (userRepo.existsByUserName(users.getUserName())) {
       throw new UserAlreadyExistsException("User is already exists");
    }
    return userRepo.save(users);
  }
}
