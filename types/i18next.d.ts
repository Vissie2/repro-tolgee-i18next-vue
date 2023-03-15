// Import the original type declarations
import 'i18next'

// Import resources
import type { Resources } from '../src/resources'

type MasterSchema = Resources['en']

type DefaultMasterSchema = MasterSchema['test']

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: MasterSchema
    defaultNS: 'test'
  }
}
