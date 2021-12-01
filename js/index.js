/*---------------------get value-------------------------- */
const numbers = [0,1,2,3,4,5,6,7,8,9];
const generatePin = document.querySelector(".generatePin");
const submitButton = document.querySelector(".submit-btn");
const calButton = document.querySelectorAll(".button");
const clearBtn = document.querySelector(".clear-btn");
const backSpace = document.querySelector(".backSpace");
/*---------------------get calculator pin number-------------------------- */
for(let j=0 ; j<calButton.length ; j++)
{
    calButton[j].addEventListener("click",function(){

    document.querySelector("#calPin").value +=this.innerHTML;

    });
}
/*---------------------backspace button-------------------------- */
backSpace.addEventListener("click",function(){
    let change = document.querySelector("#calPin").value;
    let newChange = change.substring(0, change.length - 1);
    document.querySelector("#calPin").value = newChange;
})
/*---------------------get random 4 digit pin number-------------------------- */
generatePin.addEventListener("click",function(){

    let RandomPin ='';

    for(let i=0; i<4; i++)
    {

        RandomPin += numbers[getRandomPinNumber()];

    }
    const storeValue = RandomPin;

        document.querySelector("#getpin").value=storeValue;   

})
/*---------------------submit value value-------------------------- */
submitButton.addEventListener("click",function(){
    const notifyTwo = document.querySelector(".notifyTwo");
    const notifyOne = document.querySelector(".notifyOne");
    if((document.querySelector("#calPin").value)==(document.querySelector("#getpin").value))
    {
        notifyTwo.style.display="block";
        notifyOne.style.display="none";
    }
    else
    {
        notifyOne.style.display="block";
        notifyTwo.style.display="none";
    }
    if(document.querySelector("#getpin").value=="")
    {
        alert("Please Generate pin number")
        notifyOne.style.display="none";
    } 
    if(document.querySelector("#calPin").value=="")
    {
        alert("Please Enter pin number")
        notifyOne.style.display="none";
    } 
});
/*---------------------random number function-------------------------- */
function getRandomPinNumber()
{
    return Math.floor ( Math.random() * numbers.length);
}
/*---------------------clear button-------------------------- */
clearBtn.addEventListener("click",function(){
    document.querySelector("#calPin").value='';
})   
