package com.spring.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/auth/product")
@CrossOrigin(origins = "*", maxAge = 4800)
public class ProductController {
    @Autowired
    private ProductService productService;
    @GetMapping("/fetch_product")
    public List<Product> fetch(){
        return productService.fetchProduct();
    }
    @PostMapping("/insert_product")
    public void insert(@RequestBody Product product){
        productService.addProduct(product);
    }
}
