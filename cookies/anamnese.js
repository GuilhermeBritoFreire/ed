
function anamneseCookie() {

    /* nome**
    idade**
    sexo**
    nascimento**
    etnia**
    estadoCivil**
    profissao**
    telefone**
    email**
    endereco**
    filhos**
    telefone2**
    snSentada**
    aCirurgicos**
    tEstetico**
    aAlergicos**
    fIntestinal**
    fumante**
    alimentacaoBalanceada**
    praticaAF**
    ingereL**
    gestante**
    pOrtopedico**
    tMedico**
    acidos_pele**
    tOrtomolecular**
    marcapasso**
    metais**
    oncologicos**
    menstrual**
    anticoncepsional**
    varizes**
    lesoes**
    hipertensao**
    epilepsia**
    */
    //-------------------------------------------------------------
    
    let texto;
    //--------------------------- tempo--------------------
    let d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();

    // -----------------------------------------------------------
    const memoriact = ['nome','idade','sexo','nascimento','etnia','estadoCivil','profissao','telefone','email','endereco','filhos','telefone2'];
    const memoria = ['snSentada','aCirurgicos','tEstetico','aAlergicos','fIntestinal','fumante','alimentacaoBalanceada','praticaAF','gestante','pOrtopedico','tMedico','acidos_pele','tOrtomolecular','marcapasso','metais','oncologicos','menstrual','anticoncepsional','varizes','lesoes','hipertensao','epilepsia'];


    for (let z = 0; z <=11; z++) {
        texto = document.getElementById(memoriact[z]);
        document.cookie = `${memoriact[z]}=` +  `${texto.value}` + ";" + expires + "; path=/";
    }// declara todos os cookies exeto os sim ou nao


   for (let i = 0; i <= 21; i++) {
        texto = document.getElementById(memoria[i]);
        if (texto.checked) {
            document.cookie = `${memoria[i]}=` + `${texto.value} sim` + ";" + expires + ";path=/";
        } else if (texto.checked === false) {
            document.cookie = `${memoria[i]}=` + `${texto.value} nao` + ";" + expires + ";path=/";
        }else {
            alert("verifique os campos de sim ou nao");
            document.getElementById("guardar").return = false;
        }
     }// declara os cookies de sim ou nao

    document.getElementById("guardar").addEventListener("click", function (event) {
        event.preventDefault();
        console.log("previnido")
    });


}
