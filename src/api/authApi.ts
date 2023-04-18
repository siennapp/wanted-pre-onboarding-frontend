import api from "./api";

interface userDataProps {
    email: string;
    password: string;
}

export const signUpApi = async (userData:userDataProps) => {
    try {
      const response = await api.post('/auth/signup',userData)
      return response;
    } catch(err) {
      console.log("Error", err);
    }
}

export const signInApi = async (userData:userDataProps) => {
    try {
      const response = await api.post('/auth/signin',userData)
      localStorage.setItem('accessToken', response.data.access_token );    
      return response;
    } catch(err) {
      console.log("Error", err);
    }
}