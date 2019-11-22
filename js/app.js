function datePicker() {
    event.preventDefault()
    let today =  new Date()
    // let now = new Date();
    let input = document.getElementById('bday').value;
    
    // let day = input.getdate();
    // let month = input.getMonth();
    let currentyear =  today.getFullYear();
    console.log(currentyear)
    inputyear = parseInt(input.slice(0,4));
    console.log(inputyear);
    let age = currentyear - inputyear;
    console.log(age)

    document.getElementById('age').innerText = age
    
    var alternate = "you can buy drinks and tobacco products."

    var alternate1 = "you can't buy drinks but you can buy tobacco products."

    var alternate2 = "you can't buy drinks or tobacco products."

    if (age >= 21) {
        document.getElementById('alternate').innerText = alternate;
    }     
    if (age = 18) {
        document.getElementById('alternate').innerText= alternate1;
    }
    if (age < 18) {
        document.getElementById('alternate').innerText= alternate2;
    } 
};





