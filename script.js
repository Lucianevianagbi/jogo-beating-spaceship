const tela = document.getElementById('pai')
let musica0 = new Audio('audio/fases/fase0.mp3')
let musica01 = new Audio('audio/fases/fase01.mp3')
let musica02 = new Audio('audio/fases/fase02.mp3')
let musica03 = new Audio('audio/fases/fase03.mp3')
let musica04 = new Audio('audio/fases/fase04.mp3')
let musica05 = new Audio('audio/fases/fase05.mp3')
let musica06 = new Audio('audio/fases/fase06.mp3')
let musica07 = new Audio('audio/fases/fase07.mp3')
let musica08 = new Audio('audio/fases/fase08.mp3')
let musica09 = new Audio('audio/fases/fase09.mp3')
let musica10 = new Audio('audio/fases/fase10.mp3')
let musica11 = new Audio('audio/fases/fase11.mp3')
let musica12 = new Audio('audio/fases/fase12.mp3')
let musica13 = new Audio('audio/fases/fase13.mp3')
let musica14 = new Audio('audio/fases/fase14.mp3')
let musica15 = new Audio('audio/fases/fase15.mp3')
let musica16 = new Audio('audio/fases/fase16.mp3')
let musica17 = new Audio('audio/fases/fase17.mp3')
let musica18 = new Audio('audio/fases/fase18.mp3')
let musica19 = new Audio('audio/fases/fase19.mp3')
let musica20 = new Audio('audio/fases/fase20.mp3')
let musica21 = new Audio('audio/fases/fase21.mp3')
let musica22 = new Audio('audio/fases/fase22.mp3')
let musica23 = new Audio('audio/fases/fase23.mp3')
let musica24 = new Audio('audio/fases/fase24.mp3')
let musica25 = new Audio('audio/fases/fase25.mp3')
let musica26 = new Audio('audio/fases/fase26.mp3')
let musica27 = new Audio('audio/fases/fase27.mp3')
let musica28 = new Audio('audio/fases/fase28.mp3')
let musica29 = new Audio('audio/fases/fase29.mp3')
let musica30 = new Audio('audio/fases/fase30.mp3')
let musicafinal = new Audio('audio/fases/final.mp3')

function addBola() {

    let screenWidth = window.getComputedStyle(tela).width.replace('px', '')
    let screenHeight = window.getComputedStyle(tela).height.replace('px', '')

    let posicaox = Math.floor(Math.random() * screenWidth)
    let posicaoy = Math.floor(Math.random() * screenHeight)

    posicaox = posicaox - 65 < 65 ? posicaox : posicaox - 65
    posicaoy = posicaoy - 65 < 65 ? posicaoy : posicaoy - 65

    let total = document.getElementById('alvos').innerHTML++

    if (total >= 2) {
        document.getElementById('vida').innerHTML--
    }

    let bola = document.createElement('img')
    bola.className = 'bola'

    bola.src = 'alvos/meteoro.gif'

    bola.style = `left: calc(${posicaox}px); top:${posicaoy}px;`
    bola.addEventListener('mouseenter', ({target}) => estourar(target))

    document.querySelector('#pai').appendChild(bola)

}

// et1 inicio
function addet1() {
    let screenWidth = window.getComputedStyle(tela).width.replace('px', '')
    let screenHeight = window.getComputedStyle(tela).height.replace('px', '')

    let posicaox = Math.floor(Math.random() * screenWidth)
    let posicaoy = Math.floor(Math.random() * screenHeight)

    posicaox = posicaox - 65 < 65 ? posicaox : posicaox - 65
    posicaoy = posicaoy - 65 < 65 ? posicaoy : posicaoy - 65

    let bola = document.createElement('img')
    bola.className = 'bola'

    bola.src = 'alvos/et1.gif'

    let total = document.getElementById('alvos').innerHTML++

    if (total >= 2) {
        document.getElementById('vida').innerHTML--
    }

    bola.style = `left: calc(${posicaox}px); top:${posicaoy}px;`
    bola.addEventListener('mouseenter', ({target}) => estourar(target))

    document.querySelector('#pai').appendChild(bola)

}

// et1 fim
// et2 inicio
function addet2() {
    let screenWidth = window.getComputedStyle(tela).width.replace('px', '')
    let screenHeight = window.getComputedStyle(tela).height.replace('px', '')

    let posicaox = Math.floor(Math.random() * screenWidth)
    let posicaoy = Math.floor(Math.random() * screenHeight)

    posicaox = posicaox - 65 < 65 ? posicaox : posicaox - 65
    posicaoy = posicaoy - 65 < 65 ? posicaoy : posicaoy - 65

    let bola = document.createElement('img')
    bola.className = 'bola'

    bola.src = 'alvos/et2.gif'

    let total = document.getElementById('alvos').innerHTML++

    if (total >= 2) {
        document.getElementById('vida').innerHTML--
    }

    bola.style = `left: calc(${posicaox}px); top:${posicaoy}px;`
    bola.addEventListener('mouseenter', ({target}) => estourar(target))

    document.querySelector('#pai').appendChild(bola)

}

// et2 fim
// et3 inicio
function addet3() {
    let screenWidth = window.getComputedStyle(tela).width.replace('px', '')
    let screenHeight = window.getComputedStyle(tela).height.replace('px', '')

    let posicaox = Math.floor(Math.random() * screenWidth)
    let posicaoy = Math.floor(Math.random() * screenHeight)

    posicaox = posicaox - 65 < 65 ? posicaox : posicaox - 65
    posicaoy = posicaoy - 65 < 65 ? posicaoy : posicaoy - 65

    let bola = document.createElement('img')
    bola.className = 'bola'

    bola.src = 'alvos/et3.gif'

    let total = document.getElementById('alvos').innerHTML++

    if (total >= 2) {
        document.getElementById('vida').innerHTML--
    }

    bola.style = `left: calc(${posicaox}px); top:${posicaoy}px;`
    bola.addEventListener('mouseenter', ({target}) => estourar(target))

    document.querySelector('#pai').appendChild(bola)

}

// et3 fim
// et4 inicio
function addet4() {
    let screenWidth = window.getComputedStyle(tela).width.replace('px', '')
    let screenHeight = window.getComputedStyle(tela).height.replace('px', '')

    let posicaox = Math.floor(Math.random() * screenWidth)
    let posicaoy = Math.floor(Math.random() * screenHeight)

    posicaox = posicaox - 65 < 65 ? posicaox : posicaox - 65
    posicaoy = posicaoy - 65 < 65 ? posicaoy : posicaoy - 65

    let bola = document.createElement('img')
    bola.className = 'bola'

    bola.src = 'alvos/et4.gif'

    let total = document.getElementById('alvos').innerHTML++

    if (total >= 2) {
        document.getElementById('vida').innerHTML--
    }

    bola.style = `left: calc(${posicaox}px); top:${posicaoy}px;`
    bola.addEventListener('mouseenter', ({target}) => estourar(target))

    document.querySelector('#pai').appendChild(bola)

}

// et4 fim
// et5 inicio
function addet5() {
    let screenWidth = window.getComputedStyle(tela).width.replace('px', '')
    let screenHeight = window.getComputedStyle(tela).height.replace('px', '')

    let posicaox = Math.floor(Math.random() * screenWidth)
    let posicaoy = Math.floor(Math.random() * screenHeight)

    posicaox = posicaox - 65 < 65 ? posicaox : posicaox - 65
    posicaoy = posicaoy - 65 < 65 ? posicaoy : posicaoy - 65

    let bola = document.createElement('img')
    bola.className = 'bola'

    let total = document.getElementById('alvos').innerHTML++

    if (total >= 2) {
        document.getElementById('vida').innerHTML--
    }

    bola.src = 'alvos/et5.gif'

    bola.style = `left: calc(${posicaox}px); top:${posicaoy}px;`
    bola.addEventListener('mouseenter', ({target}) => estourar(target))

    document.querySelector('#pai').appendChild(bola)

}

// et5 fim
// et6 inicio
function addet6() {
    let screenWidth = window.getComputedStyle(tela).width.replace('px', '')
    let screenHeight = window.getComputedStyle(tela).height.replace('px', '')

    let posicaox = Math.floor(Math.random() * screenWidth)
    let posicaoy = Math.floor(Math.random() * screenHeight)

    posicaox = posicaox - 65 < 65 ? posicaox : posicaox - 65
    posicaoy = posicaoy - 65 < 65 ? posicaoy : posicaoy - 65

    let bola = document.createElement('img')
    bola.className = 'bola'

    bola.src = 'alvos/et6.gif'

    let total = document.getElementById('alvos').innerHTML++

    if (total >= 2) {
        document.getElementById('vida').innerHTML--
    }

    bola.style = `left: calc(${posicaox}px); top:${posicaoy}px;`
    bola.addEventListener('mouseenter', ({target}) => estourar(target))

    document.querySelector('#pai').appendChild(bola)

}

// et6 fim

// et7 inicio
function addet7() {
    let screenWidth = window.getComputedStyle(tela).width.replace('px', '')
    let screenHeight = window.getComputedStyle(tela).height.replace('px', '')

    let posicaox = Math.floor(Math.random() * screenWidth)
    let posicaoy = Math.floor(Math.random() * screenHeight)

    posicaox = posicaox - 65 < 65 ? posicaox : posicaox - 65
    posicaoy = posicaoy - 65 < 65 ? posicaoy : posicaoy - 65

    let bola = document.createElement('img')
    bola.className = 'bola'

    bola.src = 'alvos/et7.gif'

    let total = document.getElementById('alvos').innerHTML++

    if (total >= 2) {
        document.getElementById('vida').innerHTML--
    }

    bola.style = `left: calc(${posicaox}px); top:${posicaoy}px;`
    bola.addEventListener('mouseenter', ({target}) => estourar(target))

    document.querySelector('#pai').appendChild(bola)

}

// et7 fim

// et8 inicio
function addet8() {
    let screenWidth = window.getComputedStyle(tela).width.replace('px', '')
    let screenHeight = window.getComputedStyle(tela).height.replace('px', '')

    let posicaox = Math.floor(Math.random() * screenWidth)
    let posicaoy = Math.floor(Math.random() * screenHeight)

    posicaox = posicaox - 65 < 65 ? posicaox : posicaox - 65
    posicaoy = posicaoy - 65 < 65 ? posicaoy : posicaoy - 65

    let bola = document.createElement('img')
    bola.className = 'bola'

    bola.src = 'alvos/et8.gif'

    let total = document.getElementById('alvos').innerHTML++

    if (total >= 2) {
        document.getElementById('vida').innerHTML--
    }

    bola.style = `left: calc(${posicaox}px); top:${posicaoy}px;`
    bola.addEventListener('mouseenter', ({target}) => estourar(target))

    document.querySelector('#pai').appendChild(bola)

}

// et8 fim

// et9 inicio
function addet9() {
    let screenWidth = window.getComputedStyle(tela).width.replace('px', '')
    let screenHeight = window.getComputedStyle(tela).height.replace('px', '')

    let posicaox = Math.floor(Math.random() * screenWidth)
    let posicaoy = Math.floor(Math.random() * screenHeight)

    posicaox = posicaox - 65 < 65 ? posicaox : posicaox - 65
    posicaoy = posicaoy - 65 < 65 ? posicaoy : posicaoy - 65

    let bola = document.createElement('img')
    bola.className = 'bola'

    bola.src = 'alvos/et9.gif'

    let total = document.getElementById('alvos').innerHTML++

    if (total >= 2) {
        document.getElementById('vida').innerHTML--
    }

    bola.style = `left: calc(${posicaox}px); top:${posicaoy}px;`
    bola.addEventListener('mouseenter', ({target}) => estourar(target))

    document.querySelector('#pai').appendChild(bola)

}

// et9 fim

function estourar(elemento) {

    const audio = new Audio('audio/soco.m4a')
    audio.play().then(() => elemento.outerHTML = '')

    let pontos = document.getElementById('acertos').innerHTML++

    // quantidade de pontos para mudar de nível
    if (pontos % 1 == 0 && pontos >= 1) {
        document.getElementById('niveis').innerHTML++
    }

    if (pontos++ || pontos > 0) {
        document.getElementById('alvos').innerHTML--
    }

    let vidas = document.getElementById('vida').innerHTML

    if (vidas < 0) {
        document.getElementById('escuro').style.visibility = 'visible'
        document.getElementById('gameover').style.visibility = 'visible'
        document.getElementById('gameover').innerHTML = '<h1>GAME OVER</h1>'
        clearInterval(setInterval1)
        clearInterval(setInterval2)
        clearInterval(setInterval3)
        clearInterval(setInterval4)
        clearInterval(setInterval5)
        clearInterval(setInterval6)
        clearInterval(setInterval7)
        clearInterval(setInterval8)
        clearInterval(setInterval9)
        clearInterval(setInterval10)

        musica0.muted = true
        musica01.muted = true
        musica02.muted = true
        musica03.muted = true
        musica04.muted = true
        musica05.muted = true
        musica06.muted = true
        musica07.muted = true
        musica08.muted = true
        musica09.muted = true
        musica10.muted = true
        musica11.muted = true
        musica12.muted = true
        musica13.muted = true
        musica14.muted = true
        musica15.muted = true
        musica16.muted = true
        musica17.muted = true
        musica18.muted = true
        musica19.muted = true
        musica20.muted = true
        musica21.muted = true
        musica21.muted = true
        musica23.muted = true
        musica24.muted = true
        musica25.muted = true
        musica26.muted = true
        musica27.muted = true
        musica28.muted = true
        musica29.muted = true
        musica30.muted = true
        musicafinal.muted = true
    }

    let niveis = document.getElementById('niveis').innerHTML

    if (pontos > 0) {
        if (niveis > 0) {
            document.getElementById('placar').innerHTML = parseInt(niveis) * pontos
        }
        if (niveis == 0) {
            document.getElementById('placar').innerHTML = (parseInt(1) + parseInt(niveis)) * pontos
        }
    }

    let Fases = document.getElementById('fases')
    // contador de fases
    // a cada 10 níveis aumenta-se uma fase
    if (niveis == 10) {
        tela.style.background = 'url(fases/fase01.jpg) no-repeat center'
        tela.style.backgroundSize = 'cover'
        Fases.innerHTML = '1'
        musica0.muted = true
        musica01.loop = true
        musica01.play()
    }
    if (niveis == 20) {
        tela.style.background = 'url(fases/fase02.jpg) no-repeat center'
        tela.style.backgroundSize = 'cover'
        Fases.innerHTML = '2'
        musica01.muted = true
        musica02.loop = true
        musica02.play()
    }
    if (niveis == 30) {
        tela.style.background = 'url(fases/fase03.jpg) no-repeat center'
        tela.style.backgroundSize = 'cover'
        Fases.innerHTML = '3'
        musica02.muted = true
        musica03.loop = true
        musica03.play()
    }
    if (niveis == 40) {
        tela.style.background = 'url(fases/fase04.jpg) no-repeat center'
        tela.style.backgroundSize = 'cover'
        Fases.innerHTML = '4'
        musica03.muted = true
        musica04.loop = true
        musica04.play()
    }
    if (niveis == 50) {
        tela.style.background = 'url(fases/fase05.jpg) no-repeat center'
        tela.style.backgroundSize = 'cover'
        Fases.innerHTML = '5'
        musica04.muted = true
        musica05.loop = true
        musica05.play()
    }
    if (niveis == 60) {
        tela.style.background = 'url(fases/fase06.jpg) no-repeat center'
        tela.style.backgroundSize = 'cover'
        Fases.innerHTML = '6'
        musica05.muted = true
        musica06.loop = true
        musica06.play()
    }
    if (niveis == 70) {
        tela.style.background = 'url(fases/fase07.jpg) no-repeat center'
        tela.style.backgroundSize = 'cover'
        Fases.innerHTML = '7'
        musica06.muted = true
        musica07.loop = true
        musica07.play()
    }
    if (niveis == 80) {
        tela.style.background = 'url(fases/fase08.jpg) no-repeat center'
        tela.style.backgroundSize = 'cover'
        Fases.innerHTML = '8'
        musica07.muted = true
        musica08.loop = true
        musica08.play()
    }
    if (niveis == 90) {
        tela.style.background = 'url(fases/fase09.jpg) no-repeat center'
        tela.style.backgroundSize = 'cover'
        Fases.innerHTML = '9'
        musica08.muted = true
        musica09.loop = true
        musica09.play()
    }
    if (niveis == 100) {
        tela.style.background = 'url(fases/fase10.jpg) no-repeat center'
        tela.style.backgroundSize = 'cover'
        Fases.innerHTML = '10'
        musica09.muted = true
        musica10.loop = true
        musica10.play()
    }
    if (niveis == 110) {
        tela.style.background = 'url(fases/fase11.jpg) no-repeat center'
        tela.style.backgroundSize = 'cover'
        Fases.innerHTML = '11'
        musica10.muted = true
        musica11.loop = true
        musica11.play()
    }
    if (niveis == 120) {
        tela.style.background = 'url(fases/fase12.jpg) no-repeat center'
        tela.style.backgroundSize = 'cover'
        Fases.innerHTML = '12'
        musica11.muted = true
        musica12.loop = true
        musica12.play()
    }
    if (niveis == 130) {
        tela.style.background = 'url(fases/fase13.jpg) no-repeat center'
        tela.style.backgroundSize = 'cover'
        Fases.innerHTML = '13'
        musica12.muted = true
        musica13.loop = true
        musica13.play()
    }
    if (niveis == 140) {
        tela.style.background = 'url(fases/fase14.jpg) no-repeat center'
        tela.style.backgroundSize = 'cover'
        Fases.innerHTML = '14'
        musica13.muted = true
        musica14.loop = true
        musica14.play()
    }
    if (niveis == 150) {
        tela.style.background = 'url(fases/fase15.jpg) no-repeat center'
        tela.style.backgroundSize = 'cover'
        Fases.innerHTML = '15'
        musica14.muted = true
        musica01.loop = true
        musica01.play()
    }
    if (niveis == 160) {
        tela.style.background = 'url(fases/fase16.jpg) no-repeat center'
        tela.style.backgroundSize = 'cover'
        Fases.innerHTML = '16'
        musica01.muted = true
        musica02.loop = true
        musica02.play()
    }
    if (niveis == 170) {
        tela.style.background = 'url(fases/fase17.png) no-repeat center'
        tela.style.backgroundSize = 'cover'
        Fases.innerHTML = '17'
        musica02.muted = true
        musica03.loop = true
        musica03.play()
    }
    if (niveis == 180) {
        tela.style.background = 'url(fases/fase18.jpg) no-repeat center'
        tela.style.backgroundSize = 'cover'
        Fases.innerHTML = '18'
        musica03.muted = true
        musica04.loop = true
        musica04.play()
    }
    if (niveis == 190) {
        tela.style.background = 'url(fases/fase19.jpg) no-repeat center'
        tela.style.backgroundSize = 'cover'
        Fases.innerHTML = '19'
        musica04.muted = true
        musica05.loop = true
        musica05.play()
    }
    if (niveis == 200) {
        tela.style.background = 'url(fases/fase20.jpg) no-repeat center'
        tela.style.backgroundSize = 'cover'
        Fases.innerHTML = '20'
        musica05.muted = true
        musica06.loop = true
        musica06.play()
    }
    if (niveis == 210) {
        tela.style.background = 'url(fases/fase21.png) no-repeat center'
        tela.style.backgroundSize = 'cover'
        Fases.innerHTML = '21'
        musica06.muted = true
        musica07.loop = true
        musica07.play()
    }
    if (niveis == 220) {
        tela.style.background = 'url(fases/fase22.jpg) no-repeat center'
        tela.style.backgroundSize = 'cover'
        Fases.innerHTML = '22'
        musica07.muted = true
        musica08.loop = true
        musica08.play()
    }
    if (niveis >= 230) {
        tela.style.background = 'url(fases/fase23.jpg) no-repeat center'
        tela.style.backgroundSize = 'cover'
        Fases.innerHTML = '23'
        musica08.muted = true
        musica09.loop = true
        musica09.play()
    }
    if (niveis >= 240) {
        tela.style.background = 'url(fases/fase24.jpg) no-repeat center'
        tela.style.backgroundSize = 'cover'
        Fases.innerHTML = '24'
        musica09.muted = true
        musica10.loop = true
        musica10.play()
    }
    if (niveis >= 250) {
        tela.style.background = 'url(fases/fase25.jpg) no-repeat center'
        tela.style.backgroundSize = 'cover'
        Fases.innerHTML = '25'
        musica10.muted = true
        musica11.loop = true
        musica11.play()
    }
    if (niveis >= 260) {
        tela.style.background = 'url(fases/fase26.jpg) no-repeat center'
        tela.style.backgroundSize = 'cover'
        Fases.innerHTML = '26'
        musica11.muted = true
        musica12.loop = true
        musica12.play()
    }
    if (niveis >= 270) {
        tela.style.background = 'url(fases/fase27.jpg) no-repeat center'
        tela.style.backgroundSize = 'cover'
        Fases.innerHTML = '27'
        musica12.muted = true
        musica13.loop = true
        musica13.play()
    }
    if (niveis >= 280) {
        tela.style.background = 'url(fases/fase28.jpg) no-repeat center'
        tela.style.backgroundSize = 'cover'
        Fases.innerHTML = '28'
        musica13.muted = true
        musica14.loop = true
        musica14.play()
    }
    if (niveis >= 290) {
        tela.style.background = 'url(fases/fase29.jpg) no-repeat center'
        tela.style.backgroundSize = 'cover'
        Fases.innerHTML = '29'
        musica14.muted = true
        musica01.loop = true
        musica01.play()
    }
    if (niveis >= 300) {
        tela.style.background = 'url(fases/fase30.jpg) no-repeat center'
        tela.style.backgroundSize = 'cover'
        Fases.innerHTML = '30'
        musica01.muted = true
        musicafinal.loop = true
        musicafinal.play()
    }
    // vitória!
    if (niveis >= 310) {
        musicafinal.muted = true
        let fim = new Audio('audio/vitoria.mp3')
        fim.loop = true
        fim.play()

        document.getElementById('video').innerHTML = '<video src="fases/final.mp4" type="video/mp4" autoplay="" loop="" muted=""></video>'

        clearInterval(setInterval1)
        clearInterval(setInterval2)
        clearInterval(setInterval3)
        clearInterval(setInterval4)
        clearInterval(setInterval5)
        clearInterval(setInterval6)
        clearInterval(setInterval7)
        clearInterval(setInterval8)
        clearInterval(setInterval9)
        clearInterval(setInterval10)

        document.getElementById('gameover').style.visibility = 'visible'

        document.getElementById('gameover').innerHTML = '<h1><i class="fas fa-trophy"></i> <i class="fas fa-trophy"></i> <i class="fas fa-trophy"></i> <i class="fas fa-trophy"></i> <i class="fas fa-trophy"></i><br><br>VOCÊ VENCEU!!!<br><br><i class="fas fa-trophy"></i> <i class="fas fa-trophy"></i> <i class="fas fa-trophy"></i> <i class="fas fa-trophy"></i> <i class="fas fa-trophy"></i></h1>'

        document.getElementById('gameover').style.background = '#0000'
    }

}

var setInterval1 = ''
var setInterval2 = ''
var setInterval3 = ''
var setInterval4 = ''
var setInterval5 = ''
var setInterval6 = ''
var setInterval7 = ''
var setInterval8 = ''
var setInterval9 = ''
var setInterval10 = ''

function start() {
    document.getElementById('escuro').style.visibility = 'hidden'

    setInterval1 = setInterval(addBola, 1500)
    setInterval2 = setInterval(addet1, 20000)
    setInterval3 = setInterval(addet2, 41000)
    setInterval4 = setInterval(addet3, 63000)
    setInterval5 = setInterval(addet4, 87000)
    setInterval6 = setInterval(addet5, 107000)
    setInterval7 = setInterval(addet6, 124000)
    setInterval8 = setInterval(addet7, 146000)
    setInterval9 = setInterval(addet8, 167000)
    setInterval10 = setInterval(addet9, 195000)

    musica0.loop = true
    musica0.play()
}

function stop() {
    window.location.href = window.location.href;
}

function pausar() {
    document.getElementById('escuro').style.visibility = 'visible'
    clearInterval(setInterval1)
    clearInterval(setInterval2)
    clearInterval(setInterval3)
    clearInterval(setInterval4)
    clearInterval(setInterval5)
    clearInterval(setInterval6)
    clearInterval(setInterval7)
    clearInterval(setInterval8)
    clearInterval(setInterval9)
    clearInterval(setInterval10)
}

function verificar(event) {
    if (event.keyCode == 32) {
        clearInterval(setInterval1)
        clearInterval(setInterval2)
        clearInterval(setInterval3)
        clearInterval(setInterval4)
        clearInterval(setInterval5)
        clearInterval(setInterval6)
        clearInterval(setInterval7)
        clearInterval(setInterval8)
        clearInterval(setInterval9)
        clearInterval(setInterval10)
        document.getElementById('escuro').style.visibility = 'visible'
    }
}

document.getElementById('nave1').onclick = function () {
    document.body.style.cursor = "url('http://cur.cursors-4u.net/cursors/cur-8/cur727.png'), auto";
    document.querySelector(".dd-button").innerHTML = "<li id=\"nave1\" class=\"nav\" style=\"background: url('http://cur.cursors-4u.net/cursors/cur-8/cur727.png') no-repeat center; background-size: contain; color:#0000;transform: scale(1);font-size: 18px;\"></li>";
}

document.getElementById('nave2').onclick = function () {
    document.body.style.cursor = "url('http://cur.cursors-4u.net/cursors/cur-9/cur864.png'), auto";
    document.querySelector(".dd-button").innerHTML = "<li id=\"nave2\" class=\"nav\" style=\"background: url('http://cur.cursors-4u.net/cursors/cur-9/cur864.png') no-repeat center; background-size: contain; color:#0000;transform: scale(1);font-size: 18px;\"></li>";
}

document.getElementById('nave3').onclick = function () {
    document.body.style.cursor = "url('http://ani.cursors-4u.net/cursors/cur-13/cur1162.png'), auto";
    document.querySelector(".dd-button").innerHTML = "<li id=\"nave3\" class=\"nav\" style=\"background: url('http://ani.cursors-4u.net/cursors/cur-13/cur1162.png') no-repeat center; background-size: contain; color:#0000;transform: scale(1);font-size: 18px;\"></li>";
}

document.getElementById('nave4').onclick = function () {
    document.body.style.cursor = "url('http://ani.cursors-4u.net/cursors/cur-13/cur1159.png'), auto";
    document.querySelector(".dd-button").innerHTML = "<li id=\"nave4\" class=\"nav\" style=\"background: url('http://ani.cursors-4u.net/cursors/cur-13/cur1159.png') no-repeat center; background-size: contain; color:#0000;transform: scale(1);font-size: 18px;\"></li>";
}

document.getElementById('nave5').onclick = function () {
    document.body.style.cursor = "url('http://ani.cursors-4u.net/cursors/cur-13/cur1161.png'), auto";
    document.querySelector(".dd-button").innerHTML = "<li id=\"nave5\" class=\"nav\" style=\"background: url('http://ani.cursors-4u.net/cursors/cur-13/cur1161.png') no-repeat center; background-size: contain; color:#0000;transform: scale(1);font-size: 18px;\"></li>";
}

document.getElementById('nave6').onclick = function () {
    document.body.style.cursor = "url('http://cur.cursors-4u.net/cursors/cur-11/cur1021.png'), auto";
    document.querySelector(".dd-button").innerHTML = "<li id=\"nave6\" class=\"nav\" style=\"background: url('http://cur.cursors-4u.net/cursors/cur-11/cur1021.png') no-repeat center; background-size: contain; color:#0000;transform: scale(1);font-size: 18px;\"></li>";
}

document.getElementById('nave7').onclick = function () {
    document.body.style.cursor = "url('http://cur.cursors-4u.net/toons/too-10/too1011.png'), auto";
    document.querySelector(".dd-button").innerHTML = "<li id=\"nave7\" class=\"nav\" style=\"background: url('http://cur.cursors-4u.net/toons/too-10/too1011.png') no-repeat center; background-size: contain; color:#0000;transform: scale(1);font-size: 18px;\"></li>";
}

document.getElementById('nave8').onclick = function () {
    document.body.style.cursor = "url('http://cur.cursors-4u.net/cursors/cur-10/cur954.png'), auto";
    document.querySelector(".dd-button").innerHTML = "<li id=\"nave8\" class=\"nav\" style=\"background: url('http://cur.cursors-4u.net/cursors/cur-10/cur954.png') no-repeat center; background-size: contain; color:#0000;transform: scale(1);font-size: 18px;\"></li>";
}

document.getElementById('nave9').onclick = function () {
    document.body.style.cursor = "url('http://cur.cursors-4u.net/cursors/cur-9/cur805.png'), auto";
    document.querySelector(".dd-button").innerHTML = "<li id=\"nave9\" class=\"nav\" style=\"background: url('http://cur.cursors-4u.net/cursors/cur-9/cur805.png') no-repeat center; background-size: contain; color:#0000;transform: scale(1);font-size: 18px;\"></li>";
}

// mudar a nave fim



