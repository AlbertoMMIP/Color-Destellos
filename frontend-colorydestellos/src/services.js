import axios from 'axios';
import UIkit from 'uikit';


const base_url = 'http://localhost:3000/api';

export const login = (auth, history) => {
    axios.post(`${base_url}/auth/login`,auth)
        .then(res => {
            localStorage.setItem("token",res.data.token);
            localStorage.setItem(("name"),JSON.stringify(res.data.user.name));
            if(res.data.user.rol === "ADMIN") history.push("/Stylists");
            else history.push("/agenda");


        })
        .catch(err => {
            UIkit.notification({
                status: "danger",
                message: `<span data-uk-icon='icon: warning'></span> ${err.response.data.msg}`
            });
        })
};

export const getTechniques =  () => {
    return axios.get(`${base_url}/technique/find`);
};

export const createTechnique = (form) =>{
    let formData = new FormData();
    Object.keys(form).forEach(key => {
        formData.append(key, form[key]);
    });
    axios.post(`${base_url}/technique/create`,formData, {
            headers: {
                "Content-Type": "multipart-form-data"
            }
        })
        .then(() => {
            UIkit.notification({
                status: "success",
                message: "Técnica creada correctamente"
            });
        })
        .catch(err => {
            UIkit.notification({
                status: "danger",
                message: err.response.data.msg
            });
        })

}
