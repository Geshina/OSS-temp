function globalEventHandler(type, origin, callback = null) {
  if (!document.querySelector(origin)) {
    console.warn(origin + ' not found')
    return
  }
  if (typeof callback !== 'function' && callback !== null) {
    console.warn(callback + ' not function')
    return
  }

  document.addEventListener(type, (e) => {
    if (!e.target.matches(origin)) return

    const originElement = document.querySelector(origin)

    const targetSelector = originElement.dataset.target || origin
    const targetElement = document.querySelector(targetSelector)

    const dataObj = {}
    dataObj.origin = originElement.dataset
    dataObj.target = targetElement?.dataset // if target has no attributes

    callback(dataObj)
  })
}
export { globalEventHandler }
