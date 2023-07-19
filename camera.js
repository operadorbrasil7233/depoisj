let imagemURL = "";

botaoIniciarCamera.addEventListener("click", async function (){
    const iniciarVideo = await navigator.mediaDevices.
    getUserMedia({video: true, audio: false});

    botaoIniciarCamera.style.display = "none";
    campoCamera.style.display = "block";

    video.srcObject = iniciarVideo;
})

botaoTirarFoto.addEventListener("click", function(){
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.Width, canvas.height);

    imagemURL = canvas.toDataURL("image/jpeg");

    campoCamera.style.display = "none";
    mensagem.style.display = "block";
})

botaoEnviarFoto.addEventListener("click", () => {
    const receberDadosExistentes = localStorage.getItem("cadastro");
    const converteRetorno = JSON.parse(receberDadosExistentes);
    
    converteRetorno.imagem = imagemURL;
    
    localStorage.setItem('cadastro', JSON.stringify(converteRetorno));

    window.location.href = "./abrir-conta-form-3.html";