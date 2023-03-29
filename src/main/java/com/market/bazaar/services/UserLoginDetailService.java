package com.market.bazaar.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.market.bazaar.daos.UserDaos;
import com.market.bazaar.models.User;




@Service
public class UserLoginDetailService implements UserDetailsService {
	
	@Autowired
	private UserDaos userDaos;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user  = userDaos.findByUsername(username);
		if(user== null) {
			throw new UsernameNotFoundException("User Not Found");
		}
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), new ArrayList<>());
//		return new UserLoginDetail(user);
		
	}
	
	
	
}
