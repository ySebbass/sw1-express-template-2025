const express = require('express');

const app = express()

app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (request, response) => {
    //response.send('Testando!!!');
    response.render('home', {nome : "Sebastião"});
});

app.get('/tabuada/:numero', (request, response) => {
let resultado = [];
const numero = 
request.params ['numero'] //params seria o conteúdo que você você digitou//
for (let cont = 1;cont <=10;cont++){
resultado.push(cont * numero);
response.render('tabuada', {valores : resultado}); //Render seria ele calcular e mostrar o resultado para você de acordo que o como você programou// 
}
});


app.listen(3000, () => {
    console.log('Servidor na porta 3000');
});