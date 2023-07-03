export const handleRouteNameMatch = (routeName: string) => {
  if (routeName === 'Home') return 'dashboard';

  return routeName.toLowerCase();
};
