

const img = document.querySelectorAll('img');
const h2 = document.querySelector('h2');

const onMouseMove = (e) =>{
    h2.style.display = 'block';
    h2.style.position = 'absolute';
    h2.style.left = e.pageX + 'px';
    h2.style.top = e.pageY + 'px';
  }

[...img][0].addEventListener('mouseover', onMouseMove)

img[0].addEventListener('mouseout', () => {

    h2.style.display = 'none';



}) 

img[1].addEventListener('mouseover', onMouseMove)

img[1].addEventListener('mouseout', () => {

    h2.style.display = 'none';



}) 

//on mouseEvent Properties

  