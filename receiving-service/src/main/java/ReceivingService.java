import models.Device;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.edu.iuh.fit.repositories.DeviceRepository;

@Service
public class ReceivingService {
    @Autowired
    private DeviceRepository deviceRepository;

    public Device receiveDevice(Device device){
        return deviceRepository.save(device);
    }
}
