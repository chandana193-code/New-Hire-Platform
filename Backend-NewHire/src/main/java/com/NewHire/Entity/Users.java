package com.NewHire.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Users {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private  String userName;
  private String email;
  private  String newPassword;
  private  String conformPassword;


}
