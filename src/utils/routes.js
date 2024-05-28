import HomePage from "@pages/HomePage";
import LoginPage from "@pages/LoginPage";
import RegisterPage from "@pages/RegisterPage";
import DormitoriesPage from "@pages/DormitoriesPage";
import DormitoryPage from "@pages/DormitoryPage";
import NotFound from "@pages/NotFound";
import MyAccountPage from "@pages/MyAccountPage";
import AdminUsersPage from "@pages/AdminUsersPage";
import AdminDormitoriesPage from "@pages/AdminDormitoriesPage";
import CreateDormitoryPage from "@pages/CreateDormitoryPage";
import EditDormitoryPage from "@pages/EditDormitoryPage";
import ComparingPage from "@pages/ComparingPage";
import {
  ADMIN_DORMITORIES_PAGE_ROUTE,
  ADMIN_USERS_PAGE_ROUTE,
  CREATE_DORMITORY_PAGE_ROUTE,
  DORMITORIES_PAGE_ROUTE,
  DORMITORY_PAGE_ROUTE,
  EDIT_DORMITORY_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  MY_ACCOUNT_PAGE_ROUTE,
  REGISTER_PAGE_ROUTE,
  COMPARING_PAGE_ROUTE
} from "./consts";

export const routes = [
  {
    path: HOME_PAGE_ROUTE,
    element: HomePage
  },
  {
    path: LOGIN_PAGE_ROUTE,
    element: LoginPage
  },
  {
    path: REGISTER_PAGE_ROUTE,
    element: RegisterPage
  },
  {
    path: DORMITORIES_PAGE_ROUTE,
    element: DormitoriesPage
  },
  {
    path: DORMITORY_PAGE_ROUTE,
    element: DormitoryPage
  },
  {
    path: MY_ACCOUNT_PAGE_ROUTE,
    element: MyAccountPage
  },
  {
    path: ADMIN_USERS_PAGE_ROUTE,
    element: AdminUsersPage
  },
  {
    path: ADMIN_DORMITORIES_PAGE_ROUTE,
    element: AdminDormitoriesPage
  },
  {
    path: CREATE_DORMITORY_PAGE_ROUTE,
    element: CreateDormitoryPage
  },
  {
    path: EDIT_DORMITORY_PAGE_ROUTE,
    element: EditDormitoryPage
  },
  {
    path: COMPARING_PAGE_ROUTE,
    element: ComparingPage
  },
  {
    path: "*",
    element: NotFound
  }
];
