

/*funcao que cria cartoes com(jogo1, hora, jogo2*/ 
function createdjogos(jogo1, hora,jogo2){
    
    return`
    
    <!--(<a href="***">) cria um link para o site externo-->
    <!--o que estiver apos o( > ) sera transformado em link e termina com ( </a> )-->
    <li> 
                  <!--tag(LI)itens da lista--> 
    <!--<img src="./assets/icon-${jogo1}.svg" alt="Bandeira do ${jogo1}">-->
        <div id="passar_mouse"><img src="./assets/icon-${jogo1}.svg"> 
        <a href="https://www.google.com/search?q=calendario+copa+do+mundo+2022+google&oq=cale&aqs=chrome.1.69i59l2j69i57j69i59j35i39j69i60l3.5579j1j4&sourceid=chrome&ie=UTF-8#sie=lg;/m/0fp_8fm;2;/m/030q7;mt;fp;1;;;">
         <div id="mostrar">${jogo1}</div></div></a> 
        <strong>${hora}</strong>                                   <!--tag(strong) hora em negrito-->
    <!--<img src="./assets/icon-${jogo2}.svg" alt="Bandeira da ${jogo2}">-->
        <div id="passar_mouse"><img src="./assets/icon-${jogo2}.svg">
        <a href="https://www.google.com/search?q=calendario+copa+do+mundo+2022+google&oq=cale&aqs=chrome.1.69i59l2j69i57j69i59j35i39j69i60l3.5579j1j4&sourceid=chrome&ie=UTF-8#sie=lg;/m/0fp_8fm;2;/m/030q7;mt;fp;1;;;">
        <div id="mostrar">${jogo2}</div></div></a> 
    </li>
     
    `

}
/*variavel de controle para o delay entre cartoes*/ 
let delay = -0.4;
/*funcao que cria cartoes(data, dia, jogos*/ 
function createdCard(data, dia, jogos) {
    
    delay = delay + 0.4;/*tempo com delay para exibir proximo cartao*/
 return`
 
 <div class="card" style="animation-delay: ${delay}s">      <!--cartao 1-->
    <h2>${data} <span>${dia}</span></h2>                    <!--tag(h2)titulo...tag(span)cria diferenciacao no texto em relacao a o que esta dentro do h2-->
    <ul>                                                    <!--tag(UL)lista ordenada-->
      ${jogos} 
    </ul>
</div>  
 `   
} 
/*celecionando elementos, dentro do HTML*/ 
document.querySelector('#cards').innerHTML=
//inicio do 1° cartao
//funcao js que crias os cartoes
//chamando funcoes

createdCard('20/11','Domingo',createdjogos('Catar','13:00', 'Equador'))+ //(createdCard cria um cartao)

//(createdjogos cria novos jogos dentro do cartao)

//dentro do cartao adicionando mais jogos(concatenando) '+'
createdCard('21/11', 'Segunda',createdjogos('Inglaterra','10:00', 'Irã') + 
createdjogos('Senegal','13:00','Holanda')+
createdjogos('Estados Unidos','16:00','País de Gales'))+

   
createdCard('22/11', 'Terça',createdjogos('Argentina','07:00', 'Arábia Saudita') + 
createdjogos('Dinamarca','10:00','Tunisia')+
createdjogos('México','13:00','Polônia')+
createdjogos('França','16:00','Austrália')) +

createdCard('23/11', 'Quarta',createdjogos('Marrocos','07:00', 'Croácia') + 
createdjogos('Alemanha','10:00','Japão')+
createdjogos('Espanha','13:00','Costa Rica')+
createdjogos('Bélgica','16:00','Canadá')) +

createdCard('24/11', 'Quinta',createdjogos('Suiça','07:00', 'Camarões') + 
createdjogos('Uruguai','10:00','Coreia do Sul')+
createdjogos('Portugal','13:00','Gana')+
createdjogos('Brasil','16:00','Sérvia')) +

createdCard('25/11', 'Sexta',createdjogos('País de Gales','07:00', 'Irã') + 
createdjogos('Catar','10:00','Senegal')+
createdjogos('Holanda','13:00','Equador')+
createdjogos('Inglaterra','16:00','Estados Unidos')) +

createdCard('26/11', 'Sábado',createdjogos('Tunisia','07:00', 'Austrália') + 
createdjogos('Polônia','10:00','Arábia Saudita')+
createdjogos('França','13:00','Dinamarca')+
createdjogos('Argentina','16:00','México'))+

createdCard('27/11', 'Domingo',createdjogos('Japão','07:00', 'Costa Rica') + 
createdjogos('Bélgica','10:00','Marrocos')+
createdjogos('Croácia','13:00','Canadá')+
createdjogos('Espanha','16:00','Alemanha')) +

createdCard('28/11', 'Segunda',createdjogos('Camarões','07:00', 'Sérvia') + 
createdjogos('Coreia do Sul','10:00','Gana')+
createdjogos('Brasil','13:00','Suiça')+
createdjogos('Portugal','16:00','Uruguai'))+

createdCard('29/11', 'Terça',createdjogos('Equador','12:00', 'Senegal') + 
createdjogos('Holanda','12:00','Catar')+
createdjogos('Irã','16:00','Estados Unidos')+
createdjogos('País de Gales','16:00','Inglaterra'))+

createdCard('30/11', 'Quarta',createdjogos('Tunisia','12:00', 'França') + 
createdjogos('Austrália','12:00','Dinamarca')+
createdjogos('Polônia','16:00','Argentina')+
createdjogos('Arábia Saudita','16:00','México'))+

createdCard('01/12', 'Quinta',createdjogos('Croácia','12:00', 'Bélgica') + 
createdjogos('Canadá','12:00','Marrocos')+
createdjogos('Japão','16:00','Espanha')+
createdjogos('Costa Rica','16:00','Alemanha'))+

createdCard('02/12', 'Sexta',createdjogos('Coreia do Sul','12:00', 'Portugal') + 
createdjogos('Gana','12:00','Uruguai')+
createdjogos('Sérvia','16:00','Suiça')+
createdjogos('Camarões','16:00','Brasil'))





