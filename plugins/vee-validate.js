import Vue from 'vue'

import VeeValidate from 'vee-validate'
import es from 'vee-validate/dist/locale/es.js'

VeeValidate.Validator.extend('requiredNotZero', {
  getMessage: field => 'El campo' + field + ' es obligatorio.',
  validate: value => !!value && value !== '0'
})

Vue.use(VeeValidate, {
  delay: 500,
  locale: 'es',
  dictionary: {
    es: es
  },
  requiredNotZero: 'requiredNotZero'
})