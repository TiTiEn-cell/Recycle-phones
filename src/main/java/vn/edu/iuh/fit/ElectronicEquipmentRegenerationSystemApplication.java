package vn.edu.iuh.fit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import vn.edu.iuh.fit.repositories.CustomerRepository;

@SpringBootApplication
@EnableJpaRepositories
@EntityScan("models")
public class ElectronicEquipmentRegenerationSystemApplication {
    @Autowired
    private CustomerRepository customerRepository;

    public static void main(String[] args) {
        SpringApplication.run(ElectronicEquipmentRegenerationSystemApplication.class, args);
    }

}
