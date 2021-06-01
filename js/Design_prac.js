(() => {
  const menu = document.querySelector('.menu');
  const imgBx = document.querySelectorAll('.imgBx');

  menu.addEventListener('click',menuClickEvent)
  function menuClickEvent() {
    menu.classList.toggle('active');
  }

  imgBx.forEach((e) => {
    e.addEventListener('click',function() {
      this.classList.toggle('active');
    })
  })

})()