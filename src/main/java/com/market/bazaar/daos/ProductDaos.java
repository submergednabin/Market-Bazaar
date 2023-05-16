package com.market.bazaar.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.market.bazaar.models.Product;

@Repository
public interface ProductDaos extends JpaRepository<Product, Integer> {
	
	
	public Product findById(int id);

}
