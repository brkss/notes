import { IRoute } from "../types/Route";
import { Home, Documentation } from "../../pages";

export const routes: IRoute[] = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: Home,
  },
  {
    name: "Documentation",
    path: "/doc",
    exact: true,
    component: Documentation,
  },
];
