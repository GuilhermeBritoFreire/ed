/*  nome
    idade
    sexo
    nascimento
    etnia
    estadoCivil
    profissao
    telefone
    email
    endereco
    filhos
    telefone2
    snSentada
    aCirurgicos
    tEstetico
    aAlergicos
    fIntestinal
    fumante
    alimentacaoBalanceada
    praticaAF
    praticaAF
    gestante
    pOrtopedico
    tMedico
    acidos_pele
    tOrtomolecular
    marcapasso
    metais
    oncologicos
    menstrual
    anticoncepsional
    varizes
    lesoes
    hipertensao
    epilepsia
    peso
    */
   
    function getCookie(name) {
        const cookies = document.cookie.split("; ");
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].split("=");
          const cookieName = cookie[0];
          const cookieValue = cookie[1];
          if (cookieName === name) {
            return cookieValue;
          }
        }
        return null;
    }
    let div = document.getElementById('resultado');
    let memoria = ['nome','idade','sexo','nascimento','etnia','estadoCivil','profissao','telefone','email','endereco','filhos','telefone2','snSentada','aCirurgicos','tEstetico','aAlergicos','fIntestinal','fumante','alimentacaoBalanceada','praticaAF','gestante','pOrtopedico','tMedico','acidos_pele','tOrtomolecular','marcapasso','metais','oncologicos','menstrual','anticoncepsional','varizes','lesoes','hipertensao','epilepsia','peso','altura','imc_resposta','rce_resposta','rcq_resposta'];

    for (let i = 1; i <= 38; i++) {
        div.innerHTML +=`<p>${getCookie(memoria[i])}</p>`;
      }
