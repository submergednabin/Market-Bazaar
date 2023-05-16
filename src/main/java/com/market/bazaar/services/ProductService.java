package com.market.bazaar.services;

//import java.nio.file.Path;
//import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.market.bazaar.daos.ProductCategoryDaos;
import com.market.bazaar.daos.ProductDaos;
import com.market.bazaar.daos.ProductPhotoDaos;
import com.market.bazaar.models.Product;
import com.market.bazaar.models.ProductCategory;
import com.market.bazaar.models.ProductPhoto;

@Service
public class ProductService {
	
	@Autowired
	private ProductDaos pDaos;
	
	@Autowired
	private ProductPhotoDaos pPhotoDaos;
	
	private ProductCategoryDaos pCatDaos;
	
//	private final Path root = Paths.get("http://");
	
	
	@Autowired
	private ProductCategoryDaos pCategory;

	public List<Product> getAllProducts() {
		
		return pDaos.findAll();
	}

	public Product findProductById(int id) {
		return pDaos.findById(id);
	}

	public void saveProducts(ProductPhoto pPhoto) {
		Product product = pPhoto.getProduct();
		Product checkProduct = pDaos.save(product);
		if(checkProduct !=null) {
			pPhoto.setProduct(checkProduct);
			pPhotoDaos.save(pPhoto);
		}

	}

}
