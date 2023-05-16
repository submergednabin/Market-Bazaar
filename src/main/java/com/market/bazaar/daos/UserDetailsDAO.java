package com.market.bazaar.daos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.market.bazaar.models.UserDetails;

@Repository
public interface UserDetailsDAO extends JpaRepository<UserDetails, Integer> {

}
