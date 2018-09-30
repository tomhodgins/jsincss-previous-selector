export default (selector, rule) => {

  return Array.from(document.querySelectorAll(selector))

    .filter(tag => tag.previousElementSibling)

    .reduce((styles, tag, count) => {

      const attr = selector.replace(/\W/g, '')

      tag.previousElementSibling.setAttribute(`data-prev-${attr}`, count)
      styles += `[data-prev-${attr}="${count}"] { ${rule} }\n`
      return styles

    }, '')

}
