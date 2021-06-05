//Add window alert
let date = new Date();
alert(`You are accessing The Burning Wizard online store at: ${date}. The products bought will be shipped in the same day if the transaction is approved until 11AM. By cliking Ok you agree with our terms`); 

//Change HTML 
let footerTesting = document.createElement('p');
footerTesting.id = 'text-js=footer';
footerTesting.innerHTML = 'This is just a test.';
document.getElementById('testing-js').appendChild(footerTesting);


//button
let buttonToChange = document.getElementById('button-js');//the button
let backgroundButton = document.getElementById('button-div');//the div

function generateRandomNumber() {
  return Math.floor(Math.random() * 256);
}

function changeBackground() {
let randomColor = 'rgb(' + generateRandomNumber() + ',' + generateRandomNumber() + ',' + generateRandomNumber() + ')';
 return backgroundButton.style.backgroundColor = randomColor;
}

buttonToChange.onclick = changeBackground;
buttonToChange.onwheel = changeBackground;

buttonToChange.onmouseover = changeBackground;
buttonToChange.onmouseout = changeBackground;

