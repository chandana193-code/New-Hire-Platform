package com.NewHire.Repository;

import com.NewHire.Entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface UserRepo extends JpaRepository<Users,Long> {

   Optional<Users> findByEmail(String email);

//   boolean existsByUserName (String username);
}
