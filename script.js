const buttons = Array.from(document.getElementsByTagName("h2"));
buttons.forEach(h2 => h2.addEventListener('click', toggleAnswer));
function toggleAnswer(e) {
    // Get data-id from clicked button
  const dataId = e.target.dataset.id;
  // Toggle visibilty matching div
   const myDiv = Array.from(document.querySelectorAll(`p[data-id='${dataId}']`)); //template literal mit ${} placeholder
   myDiv[0].classList.toggle('show'); //[0], da nur ein Element im Array
   //for (let i= 0; ;i++) {myDiv[i].classList.toggle('show');} für mehre Elemente im Array (z.B. 2 Antworten)
} 
