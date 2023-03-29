package com.market.bazaar.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.market.bazaar.models.UserRole;

public interface UserRoleDAO extends JpaRepository<UserRole, Integer> {

}
