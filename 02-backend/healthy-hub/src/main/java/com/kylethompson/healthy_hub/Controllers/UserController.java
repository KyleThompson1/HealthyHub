package com.kylethompson.healthy_hub.Controllers;

import com.kylethompson.healthy_hub.Models.User;
import com.kylethompson.healthy_hub.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

//CORS Configuration with Annotations
//        Add CORS settings to your controller using the @CrossOrigin annotation:
//This annotation allows requests from http:
//localhost:3000 specifically for the endpoints defined in the UserController.

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000") //Allows front end to talk to back end (Allow requests from this origin)
public class UserController {

    //Example Workflow for Deployment --- (MySQL Database) ---
    //Development: Develop and test your application locally with a
    //             local MySQL database.
    //Staging: Deploy your application to a staging environment
    //with a separate MySQL server for testing in a production-like environment.
    //Production: Finally, deploy your application to the
    //production environment with a production-grade MySQL server.

    //This is where we use PUT, POST, GET, DELETE
    //This is where our ENDPOINTS will chill

    //An endpoint is a specific URL pattern that a client can
    //use to interact with the backend service, and each of these
    //methods corresponds to a different endpoint that performs a
    //particular operation (like creating a user and retrieving a user).

    //We need to make a userService instance in our controller
    private UserService userService;

    //Need the constructor
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    //With ResponseEntity, you can control the HTTP status code that
    //is returned to the client. This is useful for indicating success,
    //errors, or other conditions (e.g., 200 OK, 201 Created, 400 Bad
    //Request, 404 Not Found, 500 Internal Server Error).

    //This is our endpoint that creates a user
    @PostMapping("/create")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User savedUser = userService.saveUser(user);
        return ResponseEntity.ok(savedUser);
    }

    //ResponseEntity.ok() is a convenient way to create a ResponseEntity
    //with an HTTP status of 200 OK and the provided body (in this case,
    //the list of users).

    //I will also make an endpoint that fetches all users
    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> myList = userService.findAllUsers(); //findAllUsers() returns list, no need to make a new one
        return ResponseEntity.ok(myList);
    }

    //This endpoint would be useful for updating a users info in a
    //profile edit use case.
    //We also need to include the id in the parameters
    @PutMapping("/update/{id}") //Gonna need an id
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {

        //First we need to find the user in the database
        Optional<User> existingUser = userService.findUserById(id);

        //We need to check if the user in null, whether it exists or not
        if (!existingUser.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        //At this point we know the user exists, so we will update the info
        User convertedUser = existingUser.get(); //We are converting the optional object type to user type

        //Now we update the user information
        convertedUser.setFirstName(convertedUser.getFirstName());
        convertedUser.setLastName(convertedUser.getLastName());
        convertedUser.setUsername(convertedUser.getUsername());
        convertedUser.setPassword(convertedUser.getPassword());

        //Now we need to save this updated user
        User finalUser = userService.saveUser(convertedUser);

        //Need to return a response entity type
        return ResponseEntity.ok(finalUser);
    }

    //Im going to make an endpoint to verify a user for authentication in my app
    @PostMapping("/authenticate") //CAN USE GET mapping, but POST is safer for username and password
    //public ResponseEntity<?> authenticateUser(@RequestBody User user){
    public ResponseEntity<?> authenticateUser(@RequestBody User user) {

        //Need to make a user to return, this has the info for the stored credentials
        Optional<User> storedUser = userService.findUserByUsername(user.getUsername());

        if (!storedUser.isPresent()) {
            return ResponseEntity.status(401).body("Invalid username or password");
        }

        //Convert
        User convertedStoredUser = storedUser.get();

        //I need to check and see if the username exists, if it does, then
        //check the given password with the stored password
        //Here the username exists, so check passwords
        if (Objects.equals(user.getPassword(), convertedStoredUser.getPassword())) {
            //Then we can log them in
            return ResponseEntity.ok(convertedStoredUser); //This RETURNS JSON
        } else {
            return ResponseEntity.status(401).body("Invalid username or password");
        }
    }
}


//}

//    User Management API
//        Purpose: To provide endpoints for managing user data, such
//        as creating new users, retrieving user information, updating
//        user details, and deleting users.
//
//        Components:
//
//        Controller: UserController - This controller handles HTTP requests related to user operations.
//        Service: UserService - This service contains the business logic for user operations and interacts with the repository.
//        Repository: UserRepository - This repository interface provides methods for interacting with the database to perform CRUD operations on user entities.
//        Model: User - This entity represents the user data structure in the application.
//        Example Endpoints in User Management API
//        Create User:
//
//        Endpoint: POST /api/users/create
//        Method: createUser(User user)
//        Description: Creates a new user and saves it to the database.

//    How They Work Together
//        Controller: Receives HTTP requests from the client and maps them to the corresponding method.
//        Service: Contains the business logic to process the request. It may include validation, processing, and invoking repository methods.
//        Repository: Interacts with the database to perform the actual data operations (CRUD).
//        Model: Represents the user data that is being managed.