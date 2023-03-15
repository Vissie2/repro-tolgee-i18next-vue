export const resources = {
  en: {
    test: {
      key: 'Test value'
    }
  },
  es: {
    test: {
      key: 'valor de prueba'
    }
  }
} as const

export type Resources = typeof resources
