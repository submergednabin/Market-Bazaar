package com.market.bazaar.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.market.bazaar.models.ProductCategory;
import com.market.bazaar.services.ProductCategoryService;

@RestController
@RequestMapping(value = "/product-category")
@CrossOrigin( origins = "http://localhost:4200", allowCredentials = "true")
public class ProductCategoryController {

	@Autowired
	private ProductCategoryService pcService;
	
	@GetMapping
	public ResponseEntity<List<ProductCategory>> getAllCategory(){
		List<ProductCategory> pc = null;
		
		try {
			pc = pcService.findAllCategoryList();
			
		}
		catch(Exception e) {
			e.printStackTrace();
		}
			return ResponseEntity.status(HttpStatus.ACCEPTED).body(pc);
		
		
	}
	
	@PostMapping
	public ResponseEntity<String> addProductCategory(@RequestBody ProductCategory pCategory){
		
		
		if(pcService.categoryExists(pCategory)!=null) {
			
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Category Exists");
		}
		ProductCategory pc = pcService.addProductCategory(pCategory);
		return ResponseEntity.status(HttpStatus.CREATED).body("Successfully Added");
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<String> updateProductCategory(@RequestBody ProductCategory pCategory, @PathVariable int id ){
		
		if(pcService.findProductCategoryById(id)!= null) {
			
			pcService.updateProductCategoryById(pCategory, id);
			return ResponseEntity.status(200).body("Successfully Updated");
			
		}
		
		return null;
		
	}
}
