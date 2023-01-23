const botaoTrailer = document.querySelector(".botao-trailer");
const botaofecharmodal = document.querySelector(".fechar-modal");
const video = document.getElementById("video")
const modal = document.querySelector(".modal");
const linkDovideo = video.src;

function alternaModal(){
    modal.classList.toggle("aberto")
}

botaoTrailer.addEventListener("click", () => {
    alternaModal();

    video.setAttribute("src",linkDovideo);
});

botaofecharmodal.addEventListener("click", () => {
    alternaModal();
    video.setAttribute("src", "");

});

