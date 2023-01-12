import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { AuthTemplate, MainTemplate } from "templates";
import { RequareAuth } from "components";
import {
  HomePage,
  FavoritesPage,
  NotFoundPage,
  SettingsPage,
  TrendsPage,
  SignInPage,
  SignUpPage,
  SearchPage,
  DetailsMoviePage,
  ForgotPasswordPage,
} from "pages";
import { ROUTE } from "./routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTE.TRENDS} element={<TrendsPage />} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
        <Route path={ROUTE.SEARCH} element={<SearchPage />} />
        <Route path={ROUTE.DETAILS} element={<DetailsMoviePage />} />
        <Route element={<RequareAuth />}>
          <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
          <Route path={ROUTE.SETTINGS} element={<SettingsPage />} />
        </Route>
      </Route>
      <Route element={<AuthTemplate />}>
        <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
        <Route path={ROUTE.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
        <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
      </Route>
    </>
  ),
  { basename: "/react-pixema-app" }
);
