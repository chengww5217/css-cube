autoAnimate('cube-rotate',
    'transform-left-repeat', 'transform-right-repeat',
    'transform-top-repeat', 'transform-bottom-repeat',
    'transform-front-repeat', 'transform-end-repeat')
document.getElementById('cube-rotate').classList.add('cube-rotate')

function autoAnimate(...classIds) {
  let targets = []
  classIds.forEach(id => {
    const target = document.getElementById(id)
    if (target) targets.push(target)
  })
  let windowHeight = document.documentElement.clientHeight
  window.onresize = () => windowHeight = document.documentElement.clientHeight
  window.scroll(() => {
    targets.forEach(target => target.dTop = document.scrollTop)
  })
  document.addEventListener('scroll', function () {
    let scrollTop = document.documentElement.scrollTop
    targets.forEach(target => {
      if (isElementInViewport(target)) {
        target.classList.add(target.id)
      } else {
        target.classList.remove(target.id)
      }
    })
  })
}

function isElementInViewport (el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= -100 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
  );
}
