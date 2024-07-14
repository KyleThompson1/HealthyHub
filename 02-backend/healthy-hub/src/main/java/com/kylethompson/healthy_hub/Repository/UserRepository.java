package com.kylethompson.healthy_hub.Repository;

import com.kylethompson.healthy_hub.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//The repository interface is responsible for data access.
//It extends JpaRepository, which provides basic CRUD operations.

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);
}
