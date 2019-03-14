import axios from 'axios';
import UIkit from 'uikit';


//const base_url = 'http://localhost:3000/api';
const base_url = 'https://colorydestellos.herokuapp.com/api';

export const login = (auth, history) => {
    axios.post(`${base_url}/auth/login`,auth)
        .then(res => {
            localStorage.setItem("token",res.data.token);
            localStorage.setItem(("name"),JSON.stringify(res.data.user.name));
            localStorage.setItem(("rol"),JSON.stringify(res.data.user.rol));
            if(res.data.user.rol === "ADMIN") history.push("/stylists");
            else {
                localStorage.setItem("estilistaID",JSON.stringify(res.data.user._id));
                history.push("/agenda");
            }


        })
        .catch(err => {
            UIkit.notification({
                status: "danger",
                message: `<span data-uk-icon='icon: warning'></span> ${err.response.data.msg}`
            });
        })
};

export const createUser = (user) => {
    return axios.post(`${base_url}/auth/register`,user)
};


export const getStylists = () => {
    return axios.get(`${base_url}/stylist/getAll`);
};

export const getStylist = (id) => {
    return axios.get(`${base_url}/stylist/getInfo/${id}`);
};


export const getTechniques = () => {
    return axios.get(`${base_url}/technique/find`);
};

export const  getNameTech = (id) => {
    return axios.get(`${base_url}/technique/getname/${id}`);
};

export const createTechnique = (form) => {
    let formData = new FormData();
    Object.keys(form).forEach(key => {
        formData.append(key, form[key]);
    });
    return axios.post(`${base_url}/technique/create`,formData, {
            headers: {
                "Content-Type": "multipart-form-data"
            }
        });
};


export const createAppointment = (appointment) => {
    return axios.post(`${base_url}/appointment/create`,appointment);
};

export const getAppointmentbyStylist = (id) => {
    return axios.get(`${base_url}/appointment/${id}`);
};

export const getInfoAppointment = (ticket) => {
    return axios.get(`${base_url}/appointment/getInfoCita/${ticket}`);
};

export const getHoursAppointment = (idStylist,date) => {
    return axios.get(`${base_url}/appointment/${idStylist}/${date}`);
}