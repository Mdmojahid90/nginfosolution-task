const btn= document.getElementsByClassName("btn")[0]

function show(){
  const card = document.getElementsByClassName("card")[0]
  card.classList.toggle("show-card")
}

btn.addEventListener("click",show)