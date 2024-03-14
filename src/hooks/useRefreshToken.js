import axios from '../api/axios';
import useAuth from './useAuth';
import {useAuthStore} from "gstore/store";

const useRefreshToken = () => {
  const { setAuth } = useAuth();
  const { auth } = useAuth();
  const { accessToken, refreshToken, setRefreshToken } = useAuthStore();
  const refresh = async () => {
    const response = await axios.post(
      '/api/Auth/RefreshTokenLogin',
      JSON.stringify({ refreshToken }),
      {
        headers: { 'Content-Type': 'application/json' },
        //   withCredentials: true,
      }
    );
    setRefreshToken(response.data.token.accessToken, response.data.token.refreshToken);
    // setAuth((prev) => {
    //   return {
    //     ...prev,
    //     accessToken: response.data.token.accessToken,
    //     refreshToken: response.data.token.refreshToken,
    //   };
    // });
    return response.data.token.accessToken;
  };
  return refresh;
};

export default useRefreshToken;