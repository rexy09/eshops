import { useLocation, Navigate, Outlet } from "react-router";

import useAuthUser from "react-auth-kit/hooks/useAuthUser";
interface Props {
  allowedRights: string[];
}
const AuthRights = ({ allowedRights }: Props) => {
  const auth: any = useAuthUser();

  const location = useLocation();
  const itemsExist = auth!.rights.some((right: any) =>
    allowedRights.includes(right.Name)
  );

  return itemsExist ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default AuthRights;
