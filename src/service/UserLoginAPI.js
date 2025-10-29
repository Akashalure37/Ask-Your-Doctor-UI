import axios from 'axios';

const USER_LOGIN_BASE_URL ='https://ask-your-doctor.onrender.com';

class UserLoginAPI {

    userLogin(user) {
        return axios.post(USER_LOGIN_BASE_URL + '/userLogin', user);
    }

    generateToken(userEmail){
        return axios.get(USER_LOGIN_BASE_URL + '/generateToken/' + userEmail);
    }

    resetPassword(userEmail,userNewPassword){
        return axios.post(USER_LOGIN_BASE_URL + '/resetPassword/' + userEmail + '/' + userNewPassword);
    }

}

export default new UserLoginAPI();
