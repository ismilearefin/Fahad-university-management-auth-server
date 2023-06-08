import express from 'express';
import { UserRoutes } from '../modules/users/user.route';
import { AcademicSemesterRoute } from '../modules/academicSemester/academicSemester.route';

const router = express.Router();

const modulesRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoute,
  },
];

modulesRoutes.forEach(route => router.use(route.path, route.route));

export default router;
