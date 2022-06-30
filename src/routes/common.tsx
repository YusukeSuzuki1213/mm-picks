import { Event } from '@/components/page/Event';
import { Top } from '@/components/page/Top';

export const commonRoutes = [
  { path: '/', element: <Top /> },
  { path: '/events/:id', element: <Event /> },
];
