package com.kylethompson.healthy_hub.Service;

import com.kylethompson.healthy_hub.Models.User;
import com.kylethompson.healthy_hub.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

//The service class contains the business logic and
//interacts with the repository to perform CRUD operations.
@Service
public class UserService {

    //We want to perform CRUD operations on User entities!
    //Create, read, update, delete

    private UserRepository userRepository;

    //Constructor
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    //We need to create a user and save to database table
    public User saveUser(User user) {

        //Will save user to database
        User savedUser = userRepository.save(user);

        //Return the user that we saved for various purposes
        return savedUser;
    }

    //We will make a method to fetch a user by id
    public Optional<User> findUserById(Long id) {
        Optional<User> user = userRepository.findById(id);
        return user;
    }

    //We will make a method to fetch a user by username
    public Optional<User> findUserByUsername(String username) {
        Optional<User> user = Optional.ofNullable(userRepository.findByUsername(username));
        return user;
    }

    //Let's have a method that returns all users
    public List<User> findAllUsers() {
        List<User> myList = new ArrayList<>();
        myList = userRepository.findAll();
        return myList;
    }

    //Let's create a method to delete a user based on id
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    //Should add a method to UPDATE the user info



}
