const PORTA = process.env.PORT || 9090
const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./rotas/rotas")(app);
//require("./rotas/rotas")(app)

//router.get('/',function(req,res){
 // res.sendFile(path.join(public+'menu.html'));
  //dirname : It will resolve to your project folder.
//});

app.listen(PORTA, () => {
    console.log(`O servidor está a ouvir na porta ${PORTA}`);
});
app.use(express.static('public'));