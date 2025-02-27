import axiosInstance from "../Interceptor/AxiosInterceptor";

const postHackathon = async (hackathon:any) => {
    return axiosInstance.post(`/hackathons/post`, hackathon)
    .then(result => result.data)
    .catch(error => {throw error;});
    
}
const getAllHackathons = async () => {
    return axiosInstance.get(`/hackathons/getAll`)
    .then(result => result.data)
    .catch(error => {throw error;});
    
}

const getHackathon = async (id:any) => { 
    return axiosInstance.get(`/hackathons/get/${id}`)
    .then(result => result.data)
    .catch(error => {throw error;});
    
}

export { postHackathon, getAllHackathons, getHackathon };