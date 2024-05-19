import jakarta.transaction.Transaction;
import models.Customer;
import models.Device;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.edu.iuh.fit.repositories.TransactionRepository;

import java.util.Date;

@Service
public class AccountingService {
    @Autowired
    private TransactionRepository transactionRepository;

    public models.Transaction processPayment(Customer customer, Device device, double amout){
        models.Transaction transaction = new models.Transaction();
        transaction.setCustomer(customer);
        transaction.setDevice(device);
        transaction.setAmount(amout);
        transaction.setTransactionType("Payment");
        transaction.setTimestamp(new Date());
        return transactionRepository.save(transaction);
    }
}
