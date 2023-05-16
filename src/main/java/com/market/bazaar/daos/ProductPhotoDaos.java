package com.market.bazaar.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.market.bazaar.models.ProductPhoto;

@Repository
public interface ProductPhotoDaos extends JpaRepository<ProductPhoto, Integer> {

}
