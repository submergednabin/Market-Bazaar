package com.market.bazaar.daos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.market.bazaar.models.UserDetails;

public interface UserDetailsDAO extends JpaRepository<UserDetails, Integer> {

}
