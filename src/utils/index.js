import { isEmpty } from 'lodash'

const findByAttribute = (component, searchParam) => {
  return component.find(searchParam)
}

const checkPropErrors = (component, props) => {
  console.log(component)

  const { PropTypes } = component

  if (isEmpty(component) || isEmpty(props)) return null

  return PropTypes.filter(prop => prop !== typeof prop) !== []
}

module.exports = { findByAttribute, checkPropErrors }
