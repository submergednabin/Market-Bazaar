package com.market.bazaar.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.market.bazaar.daos.ProductCategoryDaos;
import com.market.bazaar.models.ProductCategory;

@Service
public class ProductCategoryService {
	
	@Autowired
	private  ProductCategoryDaos pcDaos;

	public List<ProductCategory> findAllCategoryList() {
		
		return pcDaos.findAll();
		
		
	}
	
	public ProductCategory categoryExists(ProductCategory pCategory) {
		String normalizeCategoryName = pCategory.getCategoryName().toLowerCase();
		return pcDaos.findByCategoryName(pCategory.getCategoryName());
		 
	}

	public ProductCategory addProductCategory(ProductCategory pCategory) {
			
		String lowerCaseCategoryName = pCategory.getCategoryName().toLowerCase();
		pCategory.setCategoryName(lowerCaseCategoryName);
		return pcDaos.save(pCategory);
		
	}

	public ProductCategory findProductCategoryById(int id) {
		return pcDaos.findById(id);
		
	}

	public void updateProductCategoryById(ProductCategory pCategory, int id) {
		
		ProductCategory pc = pcDaos.findById(id);
		pc.setCategoryName(pCategory.getCategoryName());
		pcDaos.save(pc);

	}

}
