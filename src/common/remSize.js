function remSize() {
  let deviceWidth = document.documentElement.clientWidth || window.innerWidth
  if(deviceWidth <= 320) {
    deviceWidth = 320
  }
  if(deviceWidth >= 750) {
    deviceWidth = 750
  }
  document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px'
  document.querySelector('body').style.fontSize = 0.16 + 'rem'
}
remSize()

window.onreset = function() {
  remSize()
}