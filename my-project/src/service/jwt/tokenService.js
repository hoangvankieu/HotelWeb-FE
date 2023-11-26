import { jwtDecode } from "jwt-decode";
import store from "@/store/index.js"
export default {

     user: {
        id: '',
        fullName: '',
        phoneNumber: '',
        email: '',
        imagePath: ''
    },
    isLogin() {
        if (localStorage.getItem('token') !== null && localStorage.getItem('token') !== 'null' && typeof localStorage.getItem('token') === 'string' && localStorage.getItem('token').length > 0) {
            const currentTime = Date.now() / 1000
            const tokenExpir = localStorage.getItem('tokenExpir');
            const tokenExpirDate = new Date(parseFloat(tokenExpir) * 1000)
            if (tokenExpirDate <= currentTime) {

                return true;
            }
            else{
                localStorage.setItem('token', null);
            }
        }
        return false;
    },
    tokenDecode() {
        const token = localStorage.getItem('token');
        const decoded = jwtDecode(token);

        return decoded;
    },
    setUser() {
        var token = this.tokenDecode();
        this.user.fullName = token.FullName;
        this.user.email = token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];
        this.user.phoneNumber = token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
        this.user.imagePath = token.ImagePath;
        store.dispatch('login', this.user);
    }


}