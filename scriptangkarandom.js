const display = document.querySelector('.hasilAngkaRandom')
const dari = document.querySelector('.from input')
const sampai = document.querySelector('.to input')
const minplus = document.querySelector('.minplus input')
const banyak = document.querySelector('#banyak')
const banyakBox = document.querySelector('.banyaknya')
const banyaknyaInput = document.querySelector('.banyaknya input')
const hasilBox = document.querySelector('.hasilBox')

let from;
let to;
let data=[]

function invers(){
    if (minplus.checked == true){
        dari.setAttribute('min','')
        dari.setAttribute('value',-1000)
        sampai.setAttribute('min','')
    } else {
        dari.setAttribute('value',0)
        dari.setAttribute('min',0)
        sampai.setAttribute('min',0)
      }

console.log('dddd')
}

function many(){
    if (banyak.checked == true){
        banyakBox.style.display='block'
    } else {
        banyakBox.style.display='none'
    }
}

function ulangan() {
    if(banyak.checked == true){
        return banyaknyaInput.value
    }else{
        return 1
    }

}



function submit(){
    data=[]
    hasilBox.innerHTML=''
    var from = Number(dari.value)
    var to = Number(sampai.value)
    var range = to-from;
    
    for(let i=0 ;i<ulangan();i++){
        var acak = Math.round((Math.random()*range))+from
        data.push(acak)
    }

    for(let i of data){
        var kotak =document.createElement('div')
        kotak.classList.add('hasilAngkaRandom')
        console.log(kotak)

        kotak.innerHTML= i;
        hasilBox.appendChild(kotak)

    }










    // console.log(ulangan())
    // console.log(to)
    // console.log(range)
    // console.log(data)

}