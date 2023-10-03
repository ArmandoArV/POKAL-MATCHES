interface HeaderItem {
  id: number;
  name: string;
  path: string;
}

interface Routes {
  [key: string]: {
    id: number;
    link: string;
  }[];
}

export const API_URL = "http://api.serving.stadium-wikibol.com/v1";

export const routes: Routes = {
  HOME: [
    {
      id: 1,
      link: "/",
    },
  ],
  REGISTER: [
    {
      id: 2,
      link: "/register",
    },
  ],
  PROFILE: [
    {
      id: 3,
      link: "/profile",
    },
  ],
  DASHBOARD: [
    {
      id: 4,
      link: "/dashboard",
    },
  ],
};

export const headerItems: HeaderItem[] = [
  {
    id: 1,
    name: "Copas",
    path: "/",
  },
];

