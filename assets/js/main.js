//Add window alert
let date = new Date();
alert(`You are accessing The Burning Wizard online store at: ${date}. The products bought will be shipped in the same day if the transaction is approved until 11AM. By cliking Ok you agree with our terms`); 

//Change HTML 
let footerTesting = document.createElement('p');
footerTesting.id = 'text-js=footer';
footerTesting.innerHTML = 'This is just a test.';
document.getElementById('testing-js').appendChild(footerTesting);
