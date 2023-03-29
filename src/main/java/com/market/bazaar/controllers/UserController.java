package com.market.bazaar.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.market.bazaar.models.User;
import com.market.bazaar.services.UserService;

@RestController
@RequestMapping(value = "/users")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class UserController {
	
	@Autowired          
	private UserService userService;
	
	@GetMapping
	public ResponseEntity<List<User>> getAllUserList() throws Exception{
		List<User> users = userService.getAllUsers();
//		if(users.isEmpty()) {
//			throw new NullPointerException("Empty");
//			
//		}
		
		return ResponseEntity.status(200).body(users);
		
	}
	
	@PostMapping
	public ResponseEntity<String> saveUser(@RequestBody User user){
		String username = user.getUsername();
		if(userService.findUserByUsername(username) !=null) {
			
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Username already exists");
		}
		userService.addUser(user);
		User u = userService.findUserByUsername(user.getUsername());
		int id = u.getId();
		String ids =String.valueOf(id);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(ids);
//		return ResponseEntity.status(201).build();
		
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<String> updateUser(@RequestBody User user, @PathVariable int id){
//		System.out.println(id);
		if(userService.findUserById(id)!= null) {
			userService.updateUserDetails(user);
		}
		
		return null;
		
	}
	
}
