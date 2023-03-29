package com.market.bazaar.services;

import java.util.List;
import java.util.Optional;

import org.hibernate.hql.internal.ast.tree.IsNotNullLogicOperatorNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.market.bazaar.daos.UserDaos;
import com.market.bazaar.daos.UserDetailsDAO;
import com.market.bazaar.daos.UserRoleDAO;
import com.market.bazaar.models.User;
import com.market.bazaar.models.UserDetails;
import com.market.bazaar.models.UserRole;

@Service
public class UserService {
	
	@Autowired
	private UserDaos userDAO;
	
	@Autowired
	private UserDetailsDAO userDetailDao;
	
	@Autowired
	private UserRoleDAO userRoleDao;
	
	public List<User> getAllUsers() {
		List<User> users = userDAO.findAll();
		return users;
	}
	public User findUserByUsername(String username) {
		return userDAO.findByUsername(username);
	}
	public void addUser(User user) {

		UserDetails ud = user.getUserDetails();
		System.out.println(ud);
		UserRole ur = user.getUserRole();
		userDetailDao.save(ud);
		userDAO.save(user);
	}
	
	public User findUserById(int ids) {
		return userDAO.findById(ids);
	}
	public void updateUserDetails(User user) {
		User u = userDAO.findById(user.getId());
		int uDetailsId  = u.getUserDetails().getId();
		UserDetails uDetail = user.getUserDetails();
		
		if(userDetailDao.findById(uDetailsId)!=null) {
			Optional<UserDetails> uds = userDetailDao.findById(uDetailsId);
			uds.get().setFirstname(uDetail.getFirstname());
			uds.get().setMiddlename(uDetail.getMiddlename());
			uds.get().setLastname(uDetail.getLastname());
			uds.get().setEmail(uDetail.getEmail());
			uds.get().setStreet_address(uDetail.getStreet_address());
			uds.get().setCity(uDetail.getCity());
			uds.get().setState(uDetail.getState());
			uds.get().setCountry(uDetail.getCountry());
			uds.get().setZip(uDetail.getZip());
			uds.get().setStatus(uDetail.getStatus());
			userDetailDao.save(uds.get());
		}
		
		
	}

}
