 toggle = () =>{
    //Variables de HTML
    let denoche = document.getElementById("denoche");
    let dedia = document.getElementById("dedia");
    const solDivs = document.querySelectorAll('.padreact');
    const lunaDivs = document.querySelectorAll('.padreact2');

    if (denoche.style.display === "block") {
        //Cuando se muestra el sol
        dedia.style.display = "block";
        denoche.style.display = "none";        

      } else {
        //Cuando se muestra la luna
        denoche.style.display = "block";
        dedia.style.display = "none";
      }
    solDivs.forEach(function(sol) {
        sol.classList.toggle('hidden');
    });
    lunaDivs.forEach(function(luna) {
        luna.classList.toggle('hidden');
    });
}
toggle()
           
let items = document.querySelectorAll('.carousel .carousel-item')
                    
items.forEach((el) => {
  const minPerSlide = 4
  let next = el.nextElementSibling
  for (var i=1; i<minPerSlide; i++) {
    if (!next) {
        // wrap carousel by using first child
        next = items[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
}
})

