import axios from 'axios';
import UIkit from 'uikit';


const base_url = 'http://localhost:3000/api';

export const login = (auth, history) => {
    axios.post(`${base_url}/auth/login`,auth)
        .then(res => {
            localStorage.setItem("token",res.data.token);
            localStorage.setItem(("user"),JSON.stringify(res.data.user));
            history.push("/Home");
        })
        .catch(err => {
            UIkit.notification({
                status: "danger",
                message: `<span uk-icon='icon: warning'></span>     ${err.response.data.msg}`
            });
        })
};