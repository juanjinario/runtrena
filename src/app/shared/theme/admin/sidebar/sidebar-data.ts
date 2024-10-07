import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    displayName: 'Dashboard',
    iconName: 'dashboard',
    route: 'admin/dashboard',
  },
  {
    displayName: 'Atletas',
    iconName: 'group',
    route: 'admin/athletes',
  },
  {
    displayName: 'Grupos',
    iconName: 'diversity_3',
    route: 'admin/groups',
  },
  {
    displayName: 'Sesiones',
    iconName: 'fitness_center',
    route: 'admin/workouts',
  },
  {
    displayName: 'Calendario',
    iconName: 'calendar_month',
    route: 'admin/calendar',
  },
  {
    navCap: 'Auth',
    divider: true
  },
  {
    displayName: 'Login',
    iconName: 'solar:login-3-line-duotone',
    route: '/authentication/login',
  },
  {
    displayName: 'Register',
    iconName: 'solar:user-plus-rounded-line-duotone',
    route: '/authentication/register',
  },
  {
    navCap: 'Extra',
    divider: true
  },
  {
    displayName: 'Icons',
    iconName: 'solar:sticker-smile-circle-2-line-duotone',
    route: '/extra/icons',
  },
];
