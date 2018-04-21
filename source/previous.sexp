mixin('previous', ['selector', 'rule'],
  returnValue('Array.from(document.querySelectorAll(selector))',
    filterFunc('tag.previousElementSibling',
      reduceFunc(
        createAttribute(['selector'],
          addAttribute('tag.previousElementSibling', 'prev',
            addRule('', '', 'prev')))))))
