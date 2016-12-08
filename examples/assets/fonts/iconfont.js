;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-caozuokaiguan" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 924.229839c-97.92825 0-195.8565-37.247527-270.351554-111.844909-149.092435-149.092435-149.092435-391.713001 0-540.805436 15.349256-15.349256 40.112721-15.349256 55.461977 0 15.349256 15.349256 15.349256 40.112721 0 55.461977-118.496253 118.496253-118.496253 311.282902 0 429.881483 118.496253 118.496253 311.282902 118.496253 429.881483 0 118.496253-118.496253 118.496253-311.38523 0-429.881483-15.349256-15.349256-15.349256-40.112721 0-55.461977 15.349256-15.349256 40.112721-15.349256 55.461977 0 149.092435 149.092435 149.092435 391.713001 0 540.805436C707.8565 886.982312 609.92825 924.229839 512 924.229839z"  ></path>'+
      ''+
      '<path d="M512 491.073848 512 491.073848 512 491.073848c-13.507345 0-25.786749-5.525732-34.689317-14.325972-8.902568-8.902568-14.325972-21.079644-14.325972-34.689317L462.984711 295.422005 462.984711 148.78545c0-13.507345 5.525732-25.786749 14.325972-34.689317 8.902568-8.902568 21.079644-14.325972 34.689317-14.325972l0 0 0 0c13.507345 0 25.786749 5.525732 34.689317 14.325972 8.902568 8.902568 14.325972 21.079644 14.325972 34.689317l0 146.636554 0 146.636554c0 13.507345-5.525732 25.786749-14.325972 34.689317C537.786749 485.650445 525.507345 491.073848 512 491.073848z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-iconfonticonfontjiazai" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M516.166 1018.057c-25.798 0-51.696-1.959-77.593-5.883-67.976-10.3-131.904-33.524-190.007-69.027-56.106-34.281-104.423-78.502-143.611-131.432-39.186-52.93-67.278-111.919-83.496-175.327-16.795-65.667-20.052-133.192-9.68-200.7s33.755-130.996 69.503-188.701c34.519-55.721 79.044-103.706 132.341-142.624 53.297-38.917 112.694-66.816 176.54-82.922 66.122-16.68 134.116-19.915 202.088-9.614 88.706 13.441 172.37 49.889 241.946 105.404 67.476 53.839 120.433 124.373 153.145 203.979 7.317 17.806-1.285 38.131-19.215 45.397-17.933 7.267-38.397-1.278-45.713-19.082C864.24 205.958 733.676 103.706 581.673 80.674 342.19 44.389 117.64 208.359 81.102 446.193 44.565 684.026 209.669 907.041 449.149 943.328 688.63 979.621 913.185 815.642 949.722 577.81c2.923-19.012 20.808-32.065 39.951-29.172 19.143 2.901 32.294 20.664 29.374 39.676-10.372 67.508-33.756 130.996-69.505 188.701C915.024 832.735 870.497 880.72 817.2 919.637c-53.296 38.917-112.694 66.816-176.54 82.922C599.73 1012.884 558.082 1018.057 516.166 1018.057z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-caozuojia" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512.00512 376.568832l336.549888 344.157184c13.18912 13.499392 34.584576 13.499392 47.783936 0 13.201408-13.497344 13.201408-35.364864 0-48.863232L535.898112 303.27296c-13.201408-13.497344-34.584576-13.497344-47.78496 0L127.660032 671.863808c-6.59968 6.749184-9.900032 15.5904-9.900032 24.431616 0 8.840192 3.300352 17.682432 9.900032 24.430592 13.19936 13.499392 34.584576 13.499392 47.783936 0L512.00512 376.568832z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-caozuojian" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M511.99488 647.431168 175.444992 303.273984c-13.18912-13.499392-34.584576-13.499392-47.783936 0-13.201408 13.497344-13.201408 35.364864 0 48.863232l360.441856 368.590848c13.201408 13.497344 34.584576 13.497344 47.78496 0l360.452096-368.590848c6.59968-6.749184 9.900032-15.5904 9.900032-24.431616 0-8.840192-3.300352-17.682432-9.900032-24.430592-13.19936-13.499392-34.584576-13.499392-47.783936 0L511.99488 647.431168z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-13shuaxin" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M939.456 256.224c-16.672-5.984-34.976 2.72-40.896 19.36l-24.768 69.344c-28.992-65.312-74.784-122.72-133.088-165.92-185.376-137.28-449.408-99.776-588.384 83.648-67.264 88.768-95.616 198.176-79.84 308.032 15.84 110.304 74.208 207.776 164.352 274.496 75.424 55.808 163.808 82.752 251.456 82.752 128.032 0 254.56-57.44 336.992-166.272 36.48-48.128 61.472-102.08 74.208-160.416 3.776-17.248-7.136-34.304-24.416-38.08-17.216-3.712-34.304 7.104-38.08 24.416-10.784 49.184-31.872 94.752-62.72 135.456-117.888 155.52-341.92 187.232-499.392 70.72-76.288-56.48-125.664-138.912-139.072-232.16-13.344-92.8 10.656-185.248 67.488-260.288 117.856-155.584 341.792-187.424 499.328-70.848 57.024 42.24 99.84 100.608 122.976 166.624l-109.984-42.944c-16.416-6.368-35.008 1.696-41.44 18.176-6.432 16.48 1.728 35.008 18.176 41.44l161.856 63.2c3.808 1.472 7.744 2.208 11.616 2.208 0.544 0 1.024-0.192 1.568-0.224 1.216 0.128 2.432 0.64 3.648 0.64 13.12 0 25.472-8.16 30.112-21.248l57.632-161.184c5.984-16.672-2.688-35.008-19.328-40.928z" fill="#FF6633" ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)