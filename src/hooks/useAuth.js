import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "@services/axios";
import { login, logout } from "@redux/slices/userSlice"; 

export default function useAuth() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        dispatch(logout());
        setIsLoading(false);
        return;
      }

      try {
        const response = await axiosInstance.get("/user/me", {
          headers: {
            Authorization: token
          }
        });

        if (response.status === 200) {
          dispatch(login({ token, user: response.data }));
        } else {
          dispatch(logout());
        }
      } catch (error) {
        dispatch(logout());
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [dispatch]);

  return { isAuth: !!user, isLoading };
}
