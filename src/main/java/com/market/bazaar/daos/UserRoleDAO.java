package com.market.bazaar.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.market.bazaar.models.UserRole;

@Repository
public interface UserRoleDAO extends JpaRepository<UserRole, Integer> {

}
