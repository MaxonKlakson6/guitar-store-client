export const isActiveTab = (
  choosen: string | null,
  tabName: string,
  originalClass: string,
  activeClass: string
): string =>
  choosen === tabName ? `${originalClass} ${activeClass}` : originalClass;
