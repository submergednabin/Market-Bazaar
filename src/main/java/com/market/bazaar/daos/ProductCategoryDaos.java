package com.market.bazaar.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.market.bazaar.models.ProductCategory;

@Repository
public interface ProductCategoryDaos extends JpaRepository<ProductCategory, Integer> {
	
	public ProductCategory findById(int id);

	public ProductCategory findByCategoryName(String categoryName);

}
