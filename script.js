const image = document.querySelector('img');
const showTextDIV = document.querySelector('#textofrandomnumber');
const button = document.querySelector('#getRandomnumNum');

button.addEventListener('click', function(){
    getRandomNumberText();
})

function getRandomNumberText(value){
    
    const ajax = new XMLHttpRequest;
    const url = 'http://numbersapi.com/random/'+value
    ajax.open('GET', url, true);

    ajax.onreadystatechange = function(){
        if(this.status === 200 && this.readyState === 4){
            console.log(this.responseText);
            // let data = JSON.parse(this.responseText);
            showTextDIV.innerHTML = `${this.responseText}`
        } else {
            this.onerror = onerror();
        }
    }
    ajax.send();
}

function onerror(){
    showTextDIV.textContent = 'There was an error!';  
}