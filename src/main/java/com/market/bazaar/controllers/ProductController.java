package com.market.bazaar.controllers;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.market.bazaar.models.Product;
import com.market.bazaar.models.ProductPhoto;
import com.market.bazaar.services.ProductService;

import net.bytebuddy.implementation.bytecode.assign.primitive.PrimitiveUnboxingDelegate.UnboxingResponsible;

@RestController
@RequestMapping(value = "/product")
@CrossOrigin(value = "http://localhost:4200", allowCredentials = "true")
public class ProductController {
	
	@Autowired
	private ProductService pService;
	
	private static String uploader_folder = "/Users/nabinkhatri/Documents/codingPractice/MarketBazaar/product-images/";
	
	@GetMapping
	public ResponseEntity<List<Product>> findAllProducts(){
		
		List<Product> product = pService.getAllProducts();
		
		return null;
	}
	
	@GetMapping("details/{id}")
	public ResponseEntity<Product> findProductById(@PathVariable int id){
		
		Product product = pService.findProductById(id);
		
		if(product !=null) {
			return ResponseEntity.status(200).body(product);
		}
		return null;
	}
	
	@PostMapping
	public ResponseEntity<String> addProduct( 
			@RequestParam("file") MultipartFile file, @RequestParam("product") String product) throws IOException{
		
		ProductPhoto pPhoto = new ObjectMapper().readValue(product, ProductPhoto.class);
		String photoName;
	
		if(file.isEmpty()) {
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Empty Image");
		}
//		
		try {
			byte[] bytes = file.getBytes();
			Path path = Paths.get(uploader_folder+ file.getOriginalFilename());
			
			Files.write(path, bytes);
			photoName = path.getFileName().toString();
			pPhoto.setProductPhoto(photoName);
			pService.saveProducts(pPhoto);
		}catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Operation Not Allowed");
		}
		
		return ResponseEntity.status(HttpStatus.CREATED).body("Product Successfully Added");
	}
	
	
}
