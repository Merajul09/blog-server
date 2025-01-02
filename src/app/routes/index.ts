import { Router } from 'express';
const router = Router();

const moduleRoutes = [
  {
    path: '/blogs',
    // route: BlogRoutes,
  },
  {
    path: '/users',
    // route: UserRoutes,
  },
  {
    path: '/admins',
    // route: AdminRoutes,
  },
  {
    path: '/auth',
    // route: AuthRoutes,
  },
];

// moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
