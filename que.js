let ekle = document.querySelector("#liveToastBtn")
let eklendi = document.querySelector("#eklendi")
let eklenmedi = document.querySelector("#eklenmedi")
let listeyeekle = document.querySelector("#list")
let listadd = document.querySelector("#task")
ekle.addEventListener("submit",newElement) //listeye eleman ekleme fonksiyonu newElement()
function newElement(){
if(listadd.value.trim() === ""){ // task içinde ifade yoksa veya boşluk varsa
   alert("Listeye boş karakter ekleyemezsiniz!")
}
else{ // task içinde ifade varsa
    addItem(listadd.value)
    listadd.value = ""
    var closebtns = document.getElementsByClassName("close"); // yeni eklenmiş liste elemanını kapatma fonksiyonu
    var i;
    for (i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
});
}

    localStorage.setItem("listadd",listadd.value)
}
}
const addItem = (task)=>{ // listeye eleman eklemek için tanımlanmış arrow liste fonksiyonu
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `${task} <span class="close">&times;</span>`
    listeyeekle.append(liDOM)
}
    var closebtns = document.getElementsByClassName("close");// var olan liste elemanlarını kapatma fonksiyonu
    var i;

    for (i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}


