
function verifyPangrama(){
    let text = "asdfghjklñqwertyuiopzxcvbnmñ"
    let texto = document.getElementById("text").value
    texto = texto.toLowerCase();
    //let result = new Set(texto.toLowerCase().replace(/[^a-z]/g, '')).size === 26;
    result = Array.from(text).every(letter => texto.includes(letter));
    console.log(result);
    document.getElementById('display').innerHTML = result ? 'Sí' : 'No'
}