const numbers = [0,1,2,3,4,5,6,7,8,9];
const generatePin = document.querySelector(".generatePin");
const submitButton = document.querySelector(".submit-btn");
const calButton = document.querySelectorAll(".button");
const clearBtn = document.querySelector(".clear-btn");


for(let j=0 ; j<calButton.length ; j++)
{
    calButton[j].addEventListener("click",function(){

        document.querySelector("#calPin").value +=this.innerHTML;

    });
}


generatePin.addEventListener("click",function(){

    let RandomPin ='';

    for(let i=0; i<4; i++)
    {

        RandomPin += numbers[getRandomPinNumber()];

    }
    const storeValue = RandomPin;

    document.querySelector("#getpin").value=storeValue;

})

submitButton.addEventListener("click",function(calPin,getpin){
       var b = calPin*getpin
       console.log(b);
});


function getRandomPinNumber()
{
    return Math.floor ( Math.random() * numbers.length);
}

clearBtn.addEventListener("click",function(){
    document.querySelector("#calPin").value='';
})   
