package com.market.bazaar.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.market.bazaar.models.User;

@Repository
public interface UserDaos extends JpaRepository<User, Integer> {
	
	public User findByUsername(String username);
	public User findById(int id);	

}
