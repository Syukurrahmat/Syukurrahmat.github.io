const nama = document.querySelector('.judulkelompok input')
const jumlahnya= document.getElementById('jumlah')
const angka= document.getElementById('angka')
const textarea = document.querySelector('textarea')
const hasil= document.querySelector('.hasil')
const loading= document.querySelector('.loading')
const attention= document.querySelector('.attention p')
const attentionBox= document.querySelector('.attention')
const submitButton= document.querySelector('.submit .kirim')
const areainput= document.querySelector('.areainput')

var judulKelompok;
var anggotaKelompok ;
var jumlahKelompok ;
var daftar=[]
var anggota ;
var jumlahAnggota;
var cek;
var rs;

var baru;
function namaKelompok(){
    if(nama.value==''){
        return "Kelompok Anda"
    }else{
        return nama.value
    }
}
function loding(){  // selama 1500
    loading.style.display='block'
    loading.classList.toggle('masuk')
    setTimeout(function(){
        loading.classList.toggle('masuk')
        loading.classList.toggle('keluar')
        setTimeout(function(){
            loading.style.display='none'
            loading.classList.toggle('keluar')
        },750)
    }
    ,750)
}

function proses(){    
    let index;
    for(let i = 0 ;i<jumlahKelompok;i++){
        daftar.push([])
    }
    
    for (let i= 0 ; i<jumlahKelompok;i++){//   i=jumlalh kelompok   j= anggotakelompok
        
        for (let j =0 ; j<anggotaKelompok; j++){    
            index = Math.floor(Math.random()*anggota.length)
            daftar[i][j]= anggota[index]
            anggota.splice(index,1)
    
        }
    }

    console.log(daftar)
    for(let i =0 ; i<jumlahKelompok;i++){ //jumlah kelompok
        
        for(let j = 0 ; j<anggotaKelompok;j++){//anggotakelompok
            if(daftar[i][j]==undefined){
                daftar[i][j]="-"
            }
            if(daftar[i][j]==""){
                daftar[i].splice(j,1)
                j++
            }
        }
    }
    




    hasil.innerHTML='<h2><span>#</span>'+ namaKelompok() +'</h2>'

    for(let i =0 ; i<jumlahKelompok;i++){ //jumlah kelompok
        var tabelbaru = document.createElement('div')
        tabelbaru.classList.add('tabel')

        var judul = document.createElement('span')
        judul.innerHTML='Kelompok '+(i+1)
        tabelbaru.appendChild(judul)

        for(let j = 0 ; j<anggotaKelompok;j++){//anggotakelompok
            var spanbaru =document.createElement('span')
            spanbaru.innerHTML = daftar[i][j]
            tabelbaru.appendChild(spanbaru)
        }

        console.log(tabelbaru)
        hasil.appendChild(tabelbaru)
    
    }
    setTimeout(function(){
        submitButton.innerHTML='Buat Ulang'
        submitButton.setAttribute('onclick','submitUlang()')
    },2000)




}
function koreksi(){   
    if(anggotaKelompok>jumlahAnggota || jumlahKelompok>jumlahAnggota){
        if(jumlahnya.value=='anggota'){
            attention.innerHTML='jumlah anggota perkelompok tak boleh melebihi jumlah daftar nama'
            attentionBox.style.display='flex'
            cek=0;
        }else{
            attention.innerHTML='jumlah kelompok tak boleh melebihi jumlah daftar nama'
            attentionBox.style.display='flex'
            cek=0
        }
    }
    if(textarea.value==''){
        attention.innerHTML='Daftar nama belum diisi'
        attentionBox.style.display='flex'
        cek=0;
    }
}
function awal(){
    cek=1
    attentionBox.style.display='none'
    
}
function submit(){
    awal()
    
    //mengambil data
    judulKelompok= nama.value
    anggota = textarea.value.split(/\n/)

    while(anggota.indexOf('')!=-1){
        anggota.splice(anggota.indexOf(''),1)
    }

    jumlahAnggota = anggota.length
    
    if(jumlahnya.value=='anggota'){
        anggotaKelompok=angka.value
        jumlahKelompok=Math.ceil(jumlahAnggota/anggotaKelompok)
    }else{
        jumlahKelompok=angka.value
        anggotaKelompok=Math.ceil(jumlahAnggota/jumlahKelompok)
    }
    koreksi()
    if(cek==1){
        loding()
        console.log(jumlahAnggota)
        proses()
        setTimeout(function(){
            hasil.style.display="grid";
            var rt =hasil.getBoundingClientRect().top;
            scrollBy(0,rt-50)
    
        },1500)
    }
   
   
   
   
   

}
function submitUlang(){
    rs =areainput.getBoundingClientRect().top;
    scrollBy(0,rs-75)
    daftar=[]
    setTimeout(function(){
        hasil.style.display='none'
    hasil.innerHTML='<h2><span>#</span>'+ namaKelompok() +'</h2>'
    submit()
    },500)
}
function reset(){
    nama.value=''
    jumlahnya.value='anggota'
    angka.value=3;
    textarea.value=''
    submitButton.innerHTML='Buat'
    submitButton.setAttribute('onclick','submit()')
    rs =areainput.getBoundingClientRect().top;
    scrollBy(0,rs-75)
    setTimeout(function(){
        hasil.style.display='none'
    },500)
    daftar=[]
    attentionBox.style.display='none'


}