import { I18nextPlugin, Tolgee, withTolgee } from '@tolgee/i18next'
import { InContextTools } from '@tolgee/web/tools'
import i18next from 'i18next'

import { resources } from './resources'

const tolgee = Tolgee().use(I18nextPlugin()).use(InContextTools()).init()

withTolgee(i18next, tolgee).init({
  lng: 'en',
  defaultNS: 'test',
  ns: 'test',
  resources
})

export { i18next }
