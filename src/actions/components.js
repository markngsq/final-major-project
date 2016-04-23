// Add Component
export function addComponent(componentId) {
  return {
    type: 'ADD_COMPONENT',
    componentId,
  }
}

// Remove Component
export function removeComponent(componentId) {
  return {
    type: 'REMOVE_COMPONENT',
    componentId,
  }
}
