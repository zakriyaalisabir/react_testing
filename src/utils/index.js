import { isEmpty } from 'lodash'

const findByAttribute = (component, searchParam) => {
  return component.find(searchParam)
}

const checkPropErrors = (component, props) => {
  if (isEmpty(component) || isEmpty(props)) return null

  console.log({ component })

  const compProps = component.props()

  return compProps.filter(prop => prop !== typeof prop) !== []
}

module.exports = { findByAttribute, checkPropErrors }
