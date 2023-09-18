
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


    //---------------declaracao de variaveis por id-------------------------------- 
    let nome = document.getElementById('nome').value; // igual o valor do campo de nome
    let idade = document.getElementById('idade').value;// igual o valor do campo de idade
    let sexo = document.getElementById('sexo').value; // igual o valor do campo de sexo
    let nascimento = document.getElementById('nascimento').value; // igual o valor do campo de nascimento
    let etnia = document.getElementById('etnia').value; // igual o valor do campo de etinia
    let estadoCivil = document.getElementById('estadoCivil').value; // igual o valor do campo de estado civil 
    let profissao = document.getElementById('profissao').value; // igual o valor do campo de profissao
    let telefone = document.getElementById('telefone').value; // igual o valor do campo de telefone
    let email = document.getElementById('email').value; // igual o valor do campo de email
    let endereco = document.getElementById('endereco').value; // igual o valor do campo de endereco
    let filhos = document.getElementById('filhos').value; // igual o valor do campo de filhos
    let telefone2 = document.getElementById('telefone2').value; // igual o valor do campo de telefone2
    let snSentada = document.getElementById('snSentada'); //snSentada = Costuma permanecer muito tempo sentada ? valor para sim = s, para nao = n.
    let aCirurgicos = document.getElementById('aCirurgicos');// igual o valor de Antecedentes Cirurgicos? valor para sim = s, para nao = n
    let tEstetico = document.getElementById('tEstetico');  // igual o valor de Tratamentos Esteticos Anteriores? valor para sim = s, para nao = n
    let aAlergicos = document.getElementById('aAlergicos');// igual o valor de Antecedentes Alergicos? valor para sim = s, para nao = n
    let fIntestinal = document.getElementById('fIntestinal');// igual o valor de Funcionamento intestinal regular? valor para sim = s, para nao = n
    let fumante = document.getElementById('fumante');// igual o valor de é fumante? valor para sim = s, para nao = n
    let alimentacaoBalanceada = document.getElementById('alimentacaoBalanceada');// igual o valor de  alimentaçao Balanceada? valor para sim = s, para nao = n
    let praticaAF = document.getElementById('praticaAF');// igual o valor de pratica Atividade Fisica ? valor para sim = s, para nao = n
    let ingereL = document.getElementById('ingereL');// igual o valor de Ingere líquidos com frequência? valor para sim = s, para nao = n
    let gestante = document.getElementById('gestante');// igual o valor de É gestante? valor para sim = s, para nao = n
    let pOrtopedico = document.getElementById('pOrtopedico');// igual o valor de Tem algum problema ortopédico? valor para sim = s, para nao = n
    let tMedico = document.getElementById('tMedico');// igual o valor de Faz algum tratamento médico? valor para sim = s, para nao = n
    let acidos_pele = document.getElementById('acidos_pele');// igual o valor de Usa ou já usou ácidos na pele? valor para sim = s, para nao = n
    let tOrtomoleculars = document.getElementById('tOrtomolecular');// igual o valor de Já fez algum tratamento ortomelecular ? valor para sim = s, para nao = n
    let marcapasso = document.getElementById('marcapasso');// igual o valor de A È portador de marcapasso? valor para sim = s, para nao = n
    let metais = document.getElementById('metais');// igual o valor de Presença de metais? valor para sim = s, para nao = n
    let oncologicos = document.getElementById('oncologicos');// igual o valor de Antecedentes oncológicos? valor para sim = s, para nao = n
    let menstrual = document.getElementById('menstrual');// igual o valor de Ciclo menstrual regular? valor para sim = s, para nao = n
    let anticoncepsional = document.getElementById('anticoncepsional');// igual o valor de Usa método anticoncepcional? valor para sim = s, para nao = n
    let varizes = document.getElementById('varizes');// igual o valor de Varizes? valor para sim = s, para nao = n
    let lesoes = document.getElementById('lesoes');// igual o valor de Lesões ? valor para sim = s, para nao = n
    let hipertensao = document.getElementById('hipertensao');// igual o valor de Hipertensão? valor para sim = s, para nao = n
    let epilepsia = document.getElementById('epilepsia');// igual o valor de Epilepsia? valor para sim = s, para nao = n

    //-------------------------------------------------------------

    //--------------------------- tempo--------------------
    console.log(snSentada.checked);
    let d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();

    // -----------------------------------------------------------
    let memoria = [snSentada,aCirurgicos,tEstetico,aAlergicos,fIntestinal,fumante,alimentacaoBalanceada,praticaAF,gestante,pOrtopedico,tMedico,acidos_pele,tOrtomolecular,marcapasso,metais,oncologicos,menstrual,anticoncepsional,varizes,lesoes,hipertensao,epilepsia];
    let memoriaTexto = ['snSentada','aCirurgicos','tEstetico','aAlergicos','fIntestinal','fumante','alimentacaoBalanceada','praticaAF','gestante','pOrtopedico','tMedico','acidos_pele','tOrtomolecular','marcapasso','metais','oncologicos','menstrual','anticoncepsional','varizes','lesoes','hipertensao','epilepsia'];
    for (let i = 0; i <= 21; i++) {
        if (memoria[i].checked) {
            document.cookie = `${memoriaTexto[i]}=` + `${memoria[i].value} sim` + ";" + expires + ";path=/";
        } else {
            document.cookie = `${memoriaTexto[i]}=` + `${memoria[i].value} nao` + ";" + expires + ";path=/";
        }
      }


    //----------------------------------cookies-------------------------------

    document.cookie = "nome=" + nome + ";" + expires + ";path=/";// igual o valor do campo de nome
    document.cookie = "idade=" + idade + ";" + expires + ";path=/";// igual o valor do campo de idade
    document.cookie = "sexo=" + sexo + ";" + expires + ";path=/";// igual o valor do campo de sexo
    document.cookie = "nascimento=" + nascimento + ";" + expires + ";path=/";// igual o valor do campo de nascimento
    document.cookie = "etnia=" + etnia + ";" + expires + ";path=/";// igual o valor do campo de etnia
    document.cookie = "estadoCivil=" + estadoCivil + ";" + expires + ";path=/";// igual o valor do campo de estadoCivil
    document.cookie = "profissao=" + profissao + ";" + expires + ";path=/";// igual o valor do campo de profissao
    document.cookie = "telefone=" + telefone + ";" + expires + ";path=/";// igual o valor do campo de telefone
    document.cookie = "email=" + email + ";" + expires + ";path=/";// igual o valor do campo de email
    document.cookie = "endereco=" + endereco + ";" + expires + ";path=/";// igual o valor do campo de endereco
    document.cookie = "filhos=" + filhos + ";" + expires + ";path=/";// igual o valor do campo de filhos
    document.cookie = "telefone2=" + telefone2 + ";" + expires + ";path=/";// igual o valor do campo de telefone2
   /* document.cookie = "snSentada=" + snSentada + ";" + expires + ";path=/";// igual o valor do campo de snSentada
    document.cookie = "aCrirurgicos=" + aCirurgicos + ";" + expires + ";path=/";// igual o valor do campo de antecedentes Cirurgicos
    document.cookie = "tEstetico=" + tEstetico + ";" + expires + ";path=/";// igual o valor do campo de tratamentos esteticos
    document.cookie = "aAlergicos=" + aAlergicos + ";" + expires + ";path=/";// igual o valor do campo de antecedentes alergicos 
    document.cookie = "fIntestinal=" + fIntestinal + ";" + expires + ";path=/";// igual o valor do campo de funcionamento intestinal regular
    document.cookie = "fumante=" + fumante + ";" + expires + ";path=/";// igual o valor do campo de fumante
    document.cookie = "alimentacaoBalanceada=" + alimentacaoBalanceada + ";" + expires + ";path=/";// igual o valor do campo de  alimentacao Balanceada
    document.cookie = "praticaAF=" + praticaAF + ";" + expires + ";path=/";// igual o valor do campo de pratica Atividade Fisica
    document.cookie = "ingereL=" + ingereL + ";" + expires + ";path=/";// igual o valor do campo de Ingere líquidos com frequência
    document.cookie = "gestante=" + gestante + ";" + expires + ";path=/";// igual o valor do campo de É gestante
    document.cookie = "pOrtopedico=" + pOrtopedico + ";" + expires + ";path=/";// igual o valor do campo de Tem algum problema ortopédico
    document.cookie = "tMedico=" + tMedico + ";" + expires + ";path=/";// igual o valor do campo de Faz algum tratamento médico
    document.cookie = "acidos_pele=" + acidos_pele + ";" + expires + ";path=/";// igual o valor do campo de Usa ou já usou ácidos na pele
    document.cookie = "tOrtomolecular=" + tOrtomoleculars + ";" + expires + ";path=/";// igual o valor do campo de Já fez algum tratamento ortomelecular
    document.cookie = "marcapasso=" + marcapasso + ";" + expires + ";path=/";// igual o valor do campo de È portador de marcapasso
    document.cookie = "metais=" + metais + ";" + expires + ";path=/";// igual o valor do campo de Presença de metais
    document.cookie = "oncologicos=" + oncologicos + ";" + expires + ";path=/";// igual o valor do campo de Antecedentes oncológicos
    document.cookie = "menstrual=" + menstrual + ";" + expires + ";path=/";// igual o valor do campo de Ciclo menstrual regular
    document.cookie = "anticoncepsional=" + anticoncepsional + ";" + expires + ";path=/";// igual o valor do campo de Usa método anticoncepcional**********
    document.cookie = "varizes=" + varizes + ";" + expires + ";path=/";// igual o valor do campo de Varizes
    document.cookie = "lesoes=" + lesoes + ";" + expires + ";path=/";// igual o valor do campo de Lesões
    document.cookie = "hipertensao=" + hipertensao + ";" + expires + ";path=/";// igual o valor do campo de Hipertensão
    document.cookie = "epilepsia=" + epilepsia + ";" + expires + ";path=/";// igual o valor do campo de Epilepsia  */



    // --------------------------------------------------------------------------


    document.getElementById("guardar").addEventListener("click", function (event) {
        event.preventDefault();
        location.reload();
    });


}