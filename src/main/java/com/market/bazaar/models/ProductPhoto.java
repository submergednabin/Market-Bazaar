package com.market.bazaar.models;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table
public class ProductPhoto {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private int id;
	
	@Column(name = "product_photo")
	private String productPhoto;
	
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
	@JoinColumn(name="product_id")
	private Product product;

	public ProductPhoto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ProductPhoto(int id, String productPhoto, Product product) {
		super();
		this.id = id;
		this.productPhoto = productPhoto;
		this.product = product;
	}

	public ProductPhoto(String productPhoto, Product product) {
		super();
		this.productPhoto = productPhoto;
		this.product = product;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getProductPhoto() {
		return productPhoto;
	}

	public void setProductPhoto(String productPhoto) {
		this.productPhoto = productPhoto;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		result = prime * result + ((product == null) ? 0 : product.hashCode());
		result = prime * result + ((productPhoto == null) ? 0 : productPhoto.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ProductPhoto other = (ProductPhoto) obj;
		if (id != other.id)
			return false;
		if (product == null) {
			if (other.product != null)
				return false;
		} else if (!product.equals(other.product))
			return false;
		if (productPhoto == null) {
			if (other.productPhoto != null)
				return false;
		} else if (!productPhoto.equals(other.productPhoto))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "ProductPhoto [id=" + id + ", productPhoto=" + productPhoto + ", product=" + product + "]";
	}
	
	

}
