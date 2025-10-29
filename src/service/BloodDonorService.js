import axios from 'axios';

const BLOOD_DONOR_BASE_URL = 'https://ask-your-doctor.onrender.com/blood_donation';

class BloodDonorService {
    getAllBloodDonorsByCityAndBloodGroup(city,bloodGroup){
        return axios.get(BLOOD_DONOR_BASE_URL + '/search/' + city + '/' + bloodGroup);
    }
}

export default new BloodDonorService();
