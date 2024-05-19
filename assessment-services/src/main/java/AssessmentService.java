import models.Assessment;
import models.Device;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.edu.iuh.fit.repositories.AssessmentRepository;

import java.util.Date;

@Service
public class AssessmentService {
    @Autowired
    private AssessmentRepository assessmentRepository;

    public Assessment assessDevice(Device device, String result){
        Assessment assessment = new Assessment();
        assessment.setDevice(device);
        assessment.setAssessmentResult(result);
        assessment.setTimestamp(new Date());
        return assessmentRepository.save(assessment);
    }
}
