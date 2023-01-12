import { Navigate, Outlet } from "react-router-dom";
import { getUserInfo, useAppSelector } from "store";
import { ROUTE } from "router";

export const RequareAuth = () => {
  const { isAuth } = useAppSelector(getUserInfo);

  return isAuth ? <Outlet /> : <Navigate to={ROUTE.SIGN_IN} />;
};
