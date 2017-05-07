window.onload = function() {
  var codeElements = document.querySelectorAll('.element code')
  codeElements.forEach(function(codeElement, i) {
    formatCode(codeElement)
  })

  var xmp = document.querySelectorAll('.element xmp')
  xmp.forEach(function(xmp, i) {
    var pattern = xmp.innerHTML.match(/\s*\n[\t\s]*/)
    var newHtml = xmp.innerHTML.replace(new RegExp(pattern, "g"),'\n')
    var code = document.createElement('code')

    if (typeof hljs !== 'undefined') {
      code.innerHTML = hljs.highlightAuto(newHtml).value
      xmp.parentNode.insertBefore(code, xmp.nextSibling)
      xmp.parentNode.removeChild(xmp)
    } else {
      xmp.innerHTML = newHtml

    }

  })
}

function formatCode(obj) {
  if(obj.parentNode.nodeName !== 'P') {
    var pattern = obj.innerHTML.match(/\s*\n[\t\s]*/)
    obj.innerHTML = obj.innerHTML.replace(new RegExp(pattern, "g"),'\n')

    if (typeof hljs !== 'undefined')
      obj.innerHTML = hljs.highlightAuto(obj.innerHTML).value
  }
}
