import models.Device;
import models.Quote;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.edu.iuh.fit.repositories.QuoteRepository;

import java.util.Date;

@Service
public class QuotingService {

    @Autowired
    private QuoteRepository quoteRepository;

    public Quote createQuote(Device device, double price){
        Quote quote = new Quote();
        quote.setDevice(device);
        quote.setPrice(price);
        quote.setTimestamp(new Date());
        return  quoteRepository.save(quote);
    }
}
