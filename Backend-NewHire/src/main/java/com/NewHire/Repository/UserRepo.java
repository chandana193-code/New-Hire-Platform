package com.NewHire.Repository;

import com.NewHire.Entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface UserRepo extends JpaRepository<Users,Long> {

   boolean existsByUserName (String username);
}
