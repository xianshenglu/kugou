export const microFrontEndMode = {
  MicroApp: 'micro-app',
  Wujie: 'wujie'
} as const
export type MicroFrontEndMode = (typeof microFrontEndMode)[keyof typeof microFrontEndMode]
