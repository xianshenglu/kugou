export interface SubAppConf {
  name: string
  url: string
}

export function getSubAppsConf() {
  const base = import.meta.env.VITE_MICRO_APP_BASE_URL
  const getSubAppUrl = (htmlPath: string, baseUrl = base) =>
    `${baseUrl}/demo/${htmlPath}`
  const subAppsConf = [
    { name: 'vue3', url: getSubAppUrl('vue@3/dist/') },
    { name: 'react-vite', url: getSubAppUrl('react-vite/dist/') },
    { name: 'angular', url: getSubAppUrl('angular/dist/angular/') }
  ]
  return subAppsConf
}
