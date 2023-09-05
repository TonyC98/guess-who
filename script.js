
function toggleEliminated(a) {
    console.log(a.classList.toggle('eliminated'))
}
let arrayCards = [ {
    name : 'Sakura' ,
    image : 'images/characters_01.jpg'
    } , {
    name : 'Kaede' ,
    image : 'images/characters_02.jpg'
    } , {
    name : 'Aya' ,
    image : 'images/characters_03.jpg'
    } , {
    name : 'Yuki' ,
    image : 'images/characters_04.jpg'
    } , {
    name : 'Mikoto' ,
    image : 'images/characters_05.jpg'
    } , {
    name : 'Ren' ,
    image : 'images/characters_06.jpg'
    } , {
    name : 'Ryo' ,
    image : 'images/characters_07.jpg'
    } , {
    name : 'Yori' ,
    image : 'images/characters_08.jpg'
    } , {
    name : 'Hana' ,
    image : 'images/characters_09.jpg'
    } , {
    name : 'Tatsuya' ,
    image : 'images/characters_10.jpg'
    } , {
    name : 'Taro' ,
    image : 'images/characters_11.jpg'
    } , {
    name : 'Mai' ,
    image : 'images/characters_12.jpg'
    } , {
    name : 'Emiko' ,
    image : 'images/characters_13.jpg'
    } , {
    name : 'Ayumi' ,
    image : 'images/characters_14.jpg'
    } , {
    name : 'Hotaru' ,
    image : 'images/characters_15.jpg'
    } , {
    name : 'Haru' ,
    image : 'images/characters_16.jpg'
    } , {
    name : 'Kazuya' ,
    image : 'images/characters_17.jpg'
    } , {
    name : 'Akira' ,
    image : 'images/characters_18.jpg'
    } , {
    name : 'Saki' ,
    image : 'images/characters_19.jpg'
    } , {
    name : 'Kazuo' ,
    image : 'images/characters_20.jpg'
    }
]

let misteryImgCard = document.querySelector('.mistery-card')


function selectRandomNumber() {
    let randomNumber = Math.random() * 20
    let randomIndex = Math.floor(randomNumber)
    document.querySelector('span').innerHTML = arrayCards[randomIndex].name
    misteryImgCard.src = arrayCards[randomIndex].image 
}

selectRandomNumber()



function populateCards() {
    let cards = document.querySelector('.cards')
    for (let i = 0; i < arrayCards.length; i++) {
        cards.innerHTML += '<div class="card" onclick="toggleEliminated(this)">'
        + '<img src="' + arrayCards[i].image + '" />'
        + '<span>' + arrayCards[i].name + '</span>'
        + '</div>'
    }
}

populateCards()