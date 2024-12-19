import { Router } from 'express';
const router = Router();

const moduleRoutes = [
  {
    path: '/blogs',
    // route: Routes,
  },
  {
    path: '/admin/blogs/:id',
    // route: Routes,
  },
  {
    path: '/auth',
    // route: AuthRoutes,
  },
];

// moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
