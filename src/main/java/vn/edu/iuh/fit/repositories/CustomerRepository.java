package vn.edu.iuh.fit.repositories;

import models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

    public interface CustomerRepository extends JpaRepository<Customer, Long> {

}
