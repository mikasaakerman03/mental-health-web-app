package kz.mental.AdminSecurity.repository;

import kz.mental.AdminSecurity.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepo extends JpaRepository<Product, Integer> {
}
