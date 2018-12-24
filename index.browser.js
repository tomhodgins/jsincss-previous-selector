function previous(selector, rule) {
  const attr = selector.replace(/\W/g, '')
  const result = Array.from(document.querySelectorAll(selector))
    .filter(tag => tag.previousElementSibling)
    .reduce((output, tag, count) => {
      output.add.push({tag: tag.previousElementSibling, count: count})
      output.styles.push(`[data-prev-${attr}="${count}"] { ${rule} }`)
      return output
    }, {add: [], remove: [], styles: []})
  result.add.forEach(tag => tag.tag.setAttribute(`data-prev-${attr}`, tag.count))
  result.remove.forEach(tag => tag.setAttribute(`data-prev-${attr}`, ''))
  return result.styles.join('\n')
}
