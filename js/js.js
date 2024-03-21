const modal = document.querySelector('.modal');
const modal_img = document.querySelector('.modal img');

function fecharGaleria(){
    //modal.style.display = 'none';
    modal.style.display = 'none';
    modal_img.style.transform = 'scale(0)';
}

function abrirGaleria(src){
    modal.style.display = 'block';
    modal_img.style.transform = 'scale(1)';
    modal_img.src = src;
}









































// let modal = document.getElementById('myModal');//Pegar o elemento pelo id

// let imgHtml = document.getElementById('myImgHtml');
// let imgCss = document.getElementById('myImgCss');

// let modalImgHtml = document.getElementById('img_html');
// let modalImgCss = document.getElementById('img_css');

// let captionText = document.getElementById('caption');

// //Abrindo o Modal com a Imagem Clicada
// imgHtml.onclick = function(){
//     modal.style.display = 'block';
//     modalImgHtml.src = this.src;
//     captionText.innerHTML = this.alt;
// }
// imgCss.onclick = function(){
//     modal.style.display = 'block';
//     modalImgCss.src = this.src;
//     captionText.innerHTML = this.alt;
// }

// //Pegando o span como botao para fecha o modal
// let span = document.getElementsByClassName('close')[0];

// //Fechando o modal ao clicar no span
// span.onclick = function(){
//     modal.style.display = 'none';
// }


