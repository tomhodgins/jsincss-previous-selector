export default (selector, rule) => {

  let styles = ''
  let count = 0

  Array.from(document.querySelectorAll(selector))
    .filter(tag => tag.previousElementSibling)
    .forEach(tag => {

      const attr = selector.replace(/\W/g, '')

      tag.previousElementSibling.setAttribute(`data-prev-${attr}`, count)
      styles += `[data-prev-${attr}="${count}"] { ${rule} }\n`
      count++

    })

  return styles

}