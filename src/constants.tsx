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

export const bearerToken = "95e5e205-8f52-4308-a611-67c72bc7a9b8";

export const seasonUUID = "10d55c75-42f2-4ea4-bd2a-c07e88679639"

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

