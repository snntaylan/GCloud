import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { setAuth } = useAuth();
  const { auth } = useAuth();
  const refresh = async () => {
    const response = await axios.post(
      '/api/Auth/RefreshTokenLogin',
      JSON.stringify({ refreshToken: auth.refreshToken }),
      {
        headers: { 'Content-Type': 'application/json' },
        //   withCredentials: true,
      }
    );
    setAuth((prev) => {
      return {
        ...prev,
        accessToken: response.data.token.accessToken,
        refreshToken: response.data.token.refreshToken,
      };
    });
    return response.data.token.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
