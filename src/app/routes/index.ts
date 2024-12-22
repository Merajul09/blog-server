import { Router } from 'express';
const router = Router();

const moduleRoutes = [
  {
    path: '/blogs',
    // route: BlogRoutes,
  },
  {
    path: '/user',
    // route: UserRoutes,
  },
  {
    path: '/admin',
    // route: AdminRoutes,
  },
  {
    path: '/auth',
    // route: AuthRoutes,
  },
];

// moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
