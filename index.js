let vida = 100;
let caminhoCerto;
let dinheiro = 0;
let direitoAcademia = false;
let experiencia = 0;
let energia = 100
let valormaximo = 100;
let dia = 0;
let luvasDouradas = false
let luvasDouradaValidacao = false
let perguntaCamp = false
let energetico = 0
let energeticoValidacao = false
let violao = false
let violaoValidacao = false
let forca = 0
let resistencia = 0
let destreza = 0
let agilidade = 0




const nomesIranianos = ["Ali", "Reza", "Hossein", "Mohammad", "Amir", "Mahdi", "Saeed", "Hassan"];
const sobrenomesIranianos = ["Mohammadi", "Hosseini", "Rezai", "Karimi", "Ahmadi", "Abbasi", "Shirazi", "Farhadi"];
 
if(energia > valormaximo){
    energia = valormaximo;
}
 
function carregarCheckpoint() {
    const estadoSalvo = localStorage.getItem('checkpoint');
    if (estadoSalvo) {
        return JSON.parse(estadoSalvo);
    } else {
        return null;
    }
}
 
while(experiencia < 100) {
    let inicioPergunta = Number(prompt("Você começa em sua casa, localizada no irã, oque deseja fazer? \n 1- ir para o computador \n 2- ir pra academia\n 3- descansar \n 4- Trabalhar \n 5- Loja \n 6- Inventario"))
   
    switch (inicioPergunta) {
        case 1:
           
            let computador = Number(prompt("você entra em seu computador, oque deseja fazer? \n1-criar um jogo\n2-comprar a inscrição na academia"))
               
            if(computador == 1) {
                alert("você criou um jogo e uma franquia chamada FNAF, porem não conseguiu passar para as olimpiadas")
                alert("GAME OVER")
                throw new Error
                break;
            }
 
            if(computador === 2) {
                if(dinheiro >= 60){
                    alert("parabens, você conseguiu o direito a academia pagando 60 reais")
                    direitoAcademia = true
                    dinheiro -= 60
                }
 
                else if(dinheiro < 60){
                    alert("você não conseguiu pagar, volte quando tiver 60 reais")
                    direitoAcademia = false
                }
            }
 
            break;
       
        case 2:
            if(direitoAcademia == true & energia > 30){
                alert("parabens, você foi para academia e aumentou sua experiencia")
                experiencia += 10
                energia -= 30
                alert("você gastou 30 de energia com a academia, agora sua energia é " + energia)
                alert("sua experiencia agora é " + experiencia)
                dinheiro -= 30
                alert("você gastou 30 com a mensalidade, agora seu dinheiro é " + dinheiro)
            }
            else {
                alert("volte quando tiver comprado o passe para a academia ou quando tiver energia")
            }
 
            break;
        case 3:
            if(energia == 100){
                alert("você não precisa descansar")
            }
            else if(energia < 100){
                energia += 50
                alert("você recuperou 25 de energia e agora esta com "+ energia)
                dia += 1
                alert("você agora esta no dia "+ dia)
                if(dia % 5 === 0){
                    alert ("você precisa pagar as contas, que são 35 reais")
                    dinheiro -= 35
                    alert("seu dinheiro agora é "+ dinheiro)
                }
            }
               
            break;
        case 4:
            if(energia > 25){
                alert("Você trabalhou, perdendo 25 de energia.");
                dinheiro += 40;
                energia -= 25;
                alert("Agora seu dinheiro é " + dinheiro + " e sua energia é " + energia + ".");
            } else {
                alert("Você não tem energia suficiente para trabalhar.");
            }
               
            break;
        case 5: let loja = Number(prompt("Oque deseja comprar na loja? \n1-Energetico 30 R$ \n2-Luvas Douradas 450 R$\n3-Violão Especial 150$ \n4-Sair"))
 
                if(loja == 1){
                    if (dinheiro >= 30){
                        energetico += 1
                        dinheiro -= 30
                        alert("parabens, você comprou um energetico que lhe custou 30 reais")
                        alert("seu dinheiro agora é " + dinheiro + " e você tem " + energetico)
                        energeticoValidacao = true
                        break;
                    }
                    else{
                        alert("você não tem dinheiro para comprar um energetico, volte mais tarde")
                        break;
                    }
                }
 
                if(loja == 2){
                    if (dinheiro >= 450){
                        alert("isso provavelmente vai te ajudar no futuro, parabéns por ter comprado")
                        dinheiro -= 450
                        luvasDouradas = true
                        break;
                    }
                    else{
                        alert("você não tem direito para comprar uma luva dourada, volte mais tarde")
                        break;
                    }
                }
               
                if(loja == 3){
                    if(dinheiro >= 150){
                        dinheiro -= 150
                        alert("que inteligente!, caso ainda não tenha percebido, esse é um jogo sobre esportes e sobre alguém que foi para as olimpiadas, um violão não vai te ajudar em absolutamente nada")
                        alert("pelo menos você ajudou o dono da loja, com esse dinheiro, ele conseguiu matricular a filha dele em uma escola, aparentemente, não foi de completa inutilidade gastar seu dinheiro nisso")
                        let violao = true
                        break;
                    }
                    else{
                        alert("você não tem dinheiro para comprar um violão, volte mais tarde")
                    }
                }
 
                if(loja == 4){
                    break;
                }
        
        case 6: if (energeticoValidacao === true){
            alert("você tem " + energetico + " energeticos no inventario")
        }
                if (luvasDouradas === true){
            alert("você tem as luvas douradas no inventario, que incrivel!")
                }

                if (violao === true){
            alert("você tem um violão no inventario, não que seja util")
                }
            let perguntaInventario = Number(prompt("você quer verificar um deles? suas opções são\n1-Energetico\n2-Luvas douradas\n3-Violao"))

            if (perguntaInventario == 1 & energeticoValidacao == true & energetico >=1){
                energia += 100
                alert("você utilizou um energetico, recuperando 100 de energia")
                alert("sua energia agora é " + energia)
                break;
            }
            else if(perguntaInventario == 1 & energetico < 1){
                alert("que pena, você não tem nenhum energetico, compre se quiser um")
                break;
            }

            if(perguntaInventario == 2 & luvasDouradas === true){
                alert("que interessante, nela esta escrito '+10 de força', oque sera que isso significa? ")
                break;
            }
            else if(perguntaInventario == 2 & luvasDouradas === false){
                alert("volte aqui quando tiver comprado as luvas")
                break;
            }

            if(perguntaInventario == 3 & violao === true){
                alert("Inutil, mas interessante")
                break;
            }
            else if(perguntaInventario == 3 & violao === false){
                alert("volte aqui quando tiver comprado o violão")
                break;
            }
           
    }
}
 
let perguntaCampeonato = Number(prompt("Depois de muito esforço na academia, notaram seus esforços \nVocê foi convocado para o campeonato regional do irã, deseja participar?\n1- Sim\n 2- Não"))
if (perguntaCampeonato = 1){
    alert("você finalmente chegou na arena, aqui você podera treinar para superar seus concorrentes e se ganhar, conseguira participar das olimpiadas")
    perguntaCamp = true
}
else if (perguntaCampeonato = 2){
    alert("Você decidiu ficar em casa e ajudar seus familiares, honrosa decisão, mas bem sem graça, você perdeu o jogo por isso")
    alert("GAME OVER")
    throw new Error
}

function salvarCheckpoint(estadoJogo) {
    localStorage.setItem('checkpoint', JSON.stringify(estadoJogo));
    alert("Jogo salvo!")
}

if(perguntaCamp == true){
    let diasCamp = 10
    let vitoriasCampReg
    while (diasCamp > 0){
        let CampReg = Number(prompt("Oque você deseja treinar? você tem " + diasCamp + " dias antes de começar a luta \n1- Força \n2- Resistencia \n3-Destreza \n4-Agilidade"))
 
        switch(CampReg){
 
            case 1: if(luvasDouradas == true){
                    console.log("que suspeito...você ja tem uma luva muito boa que deixa sua força em um nivel muito alto...até iriamos reclamar, mas por algum motivo, nos testes a luva não apresenta nenhuma caracteristica especial...acho que vamos deixar você lutar com ela")
                    forca += 10
                    }
                    else if(luvasDouradas == false){
                    forca += 2
                    alert("você decide treinar força, você aumentou em 2 o nivel de força, agora sua força é " + forca)
                    alert("você perdeu um dia inteiro treinando força")
                    diasCamp -= 1
                    break;
                    }
 
            case 2: resistencia += 2
                    alert("você decide treinar resistencia, você aumentou em 2 o nivel de resistencia, agora sua resistencia é " + resistencia)
                    alert("você perdeu um dia inteiro treinando resistencia")
                    diasCamp -= 1
                    break;
           
            case 3: destreza += 2
                    alert("você decide treinar destreza, você aumentou em 2 o nivel de destreza, agora sua resistencia é " + destreza)
                    alert("você perdeu um dia inteiro treinando destreza")
                    diasCamp -= 1
                    break;
 
            case 4: agilidade += 2
                    alert("você decide treinar agilidade, você aumentou em 2 o nivel de agilidade, agora sua agilidade é " + agilidade)
                    alert("você perdeu um dia inteiro treinando agilidade")
                    diasCamp -= 1
                    break;
           
        }
    }
}
 
function gerarAtributoAleatorio() {
    return Math.floor(Math.random() * 11)
}
let forcainimigo
let resistenciaInimigo
let destrezaInimigo
let agilidadeInimigo
 
let inimigo = {
    forcainimigo: gerarAtributoAleatorio(),
    resistenciaInimigo: gerarAtributoAleatorio(),
    destrezaInimigo: gerarAtributoAleatorio(),
    agilidadeInimigo: gerarAtributoAleatorio()
};
 
 
 
function nomeCompleto() {
    const nomeAleatorio = nomesIranianos[Math.floor(Math.random() * nomesIranianos.length)];
    const sobrenomeAleatorio = sobrenomesIranianos[Math.floor(Math.random() * sobrenomesIranianos.length)];
    return nomeAleatorio + " " + sobrenomeAleatorio;
}
 
let vitoriaFirstMatch = false;

while (vitoriaFirstMatch === false) {
    let nomeInimigo = nomeCompleto();
    console.log("Nome do Inimigo: ", nomeInimigo);
    alert("O grande torneio regional começa hoje, espero que esteja preparado. Seu oponente vai ser " + nomeInimigo + " e você lutará com ele agora.")
    alert("Seu combate vai ser baseado em seus atributos. Se seu atributo for maior, você ganhará um ponto nesse atributo. Se for menor, o inimigo ganhará o ponto. O que tiver maior pontuação no final ganhará a luta.");
    alert("A batalha agora começa!");

    let pontoJogador = 0;  
    let pontoInimigo = 0;

    

    let forcainimigo = inimigo.forcainimigo;
    let resistenciaInimigo = inimigo.resistenciaInimigo;
    let destrezaInimigo = inimigo.destrezaInimigo;
    let agilidadeInimigo = inimigo.agilidadeInimigo;

 
    if (forca > forcainimigo) {
        alert("A força do seu inimigo é " + forcainimigo + ", a sua é " + forca + ", você ganhou.");
        pontoJogador += 1;
    } else if (forcainimigo > forca) {
        alert("A força do seu inimigo é " + forcainimigo + ", a sua é " + forca + ", você perdeu.");
        pontoInimigo += 1;
    }

    
    if (resistencia > resistenciaInimigo) {
        alert("A resistência do seu inimigo é " + resistenciaInimigo + ", a sua é " + resistencia + ", você ganhou.");
        pontoJogador += 1;
    } else if (resistenciaInimigo > resistencia) {
        alert("A resistência do seu inimigo é " + resistenciaInimigo + ", a sua é " + resistencia + ", você perdeu.");
        pontoInimigo += 1;
    }

    
    if (destreza > destrezaInimigo) {
        alert("A destreza do seu inimigo é " + destrezaInimigo + ", a sua é " + destreza + ", você ganhou.");
        pontoJogador += 1;
    } else if (destrezaInimigo > destreza) {
        alert("A destreza do seu inimigo é " + destrezaInimigo + ", a sua é " + destreza + ", você perdeu.");
        pontoInimigo += 1;
    }

   
    if (agilidade > agilidadeInimigo) {
        alert("A agilidade do seu inimigo é " + agilidadeInimigo + ", a sua é " + agilidade + ", você ganhou.");
        pontoJogador += 1;
    } else if (agilidadeInimigo > agilidade) {
        alert("A agilidade do seu inimigo é " + agilidadeInimigo + ", a sua é " + agilidade + ", você perdeu.");
        pontoInimigo += 1;
    }

   
    if (pontoInimigo > pontoJogador) {
        alert("Por mais dos seus esforços e caminho até aqui, seu inimigo te destruiu completamente durante a batalha. Você está seriamente machucado e nunca mais poderá lutar na vida.");
        alert("GAME OVER");
        throw new Error();
    }

    if (pontoJogador > pontoInimigo) {
        alert("Depois de uma árdua batalha, você derrotou seu inimigo de forma impressionante, porém você precisa passar por mais uma batalha para ganhar regionalmente...");
        vitoriaFirstMatch = true;
    }
}
 

let fugirPais = false
while(fugirPais == false){
let bomba = Number(prompt("Você nota que seu inimigo do próximo round, além de ser completamente mais forte que você, está completamente revigorado. Só existe uma opção viável para ganhar essa luta... deseja usar a bomba?\n1 - Sim\n2 - Não"));
 
if (bomba === 1) {
    alert("Você decide usar a bomba....");
    alert("NÃO! um policial passou pelo camarim bem na hora e viu você usando bomba, se ficar aqui no pais vai ficar preso durante anos, você precisa fuigar para outro pais! mas qual?...")
    fugirPais = true
}
 
if (bomba === 2){
    alert("parabéns pela decisão certinha, notase que você foi uma boa pessoa em ser honesto mesmo no pior momento, porem não foi isso que aconteceu historicamente, então infelizmente você perdeu por ser certinho")
    alert("GAME OVER")
    throw new Error
}
}
 let alemanha = false
if(fugirPais == true){
    let perguntaPais = Number(prompt("você pode fugir para dois paises, Alemanha ou Inglaterra, para qual deseja sair?\n1-Alemanha\n2-Reino Unido"))
 
    if(perguntaPais == 1){
        alert("Você fugiu para alemanha em segurança, depois de um tempo treinando aqui, você viu que o governo tem bastante interesse em você, porque sera isso?...")
        alert("Olha! uma carta chegou pelo correio, que interessante")
        alert("na carta diz que você recebeu um convite para as olimpiadas")
        alert("Por mais que você não tenha sido muito bom la no iraque, ainda tem chance de ganhar")
        alemanha = true
    }
 
    if(perguntaPais == 2){
        alert("por conta dos movimentos extremistas do Reino Unido contra imigrantes, quando seu avião ilegal estava chegando perto de pousar no reino unido, ele foi abatido por um caça Britanico")
        alert("GAME OVER")
        throw new Error
    }
}

function salvarCheckpoint(estadoJogo) {
    localStorage.setItem('checkpoint', JSON.stringify(estadoJogo));
    alert("Jogo salvo!")
}

while(alemanha == true){
    alert ("você ira agora participar de uma unica luta para ver se consegue ganhar nas olimpiadas e representar os refugiados, se conseguir, ganhara nas olimpiadas de box")

let vitoriaOlimpiadas = false
while (vitoriaOlimpiadas === false) {
    let nomeInimigo = nomeCompleto();
    alert("A grande olimpiadas de Box começa hoje, espero que esteja preparado. Seu oponente vai ser " + nomeInimigo + " e você lutará com ele agora.");

    alert("Seu combate vai ser baseado em seus atributos. Se seu atributo for maior, você ganhará um ponto nesse atributo. Se for menor, o inimigo ganhará o ponto. O que tiver maior pontuação no final ganhará a luta.");
    alert("A batalha agora começa!");

    let pontoJogador = 0;  
    let pontoInimigo = 0;

    
    let forcainimigo = inimigo.forcainimigo;
    let resistenciaInimigo = inimigo.resistenciaInimigo;
    let destrezaInimigo = inimigo.destrezaInimigo;
    let agilidadeInimigo = inimigo.agilidadeInimigo;

   
    if (forca > forcainimigo) {
        alert("A força do seu inimigo é " + forcainimigo + ", a sua é " + forca + ", você ganhou.");
        pontoJogador += 1;
    } else if (forcainimigo > forca) {
        alert("A força do seu inimigo é " + forcainimigo + ", a sua é " + forca + ", você perdeu.");
        pontoInimigo += 1;
    }

    
    if (resistencia > resistenciaInimigo) {
        alert("A resistência do seu inimigo é " + resistenciaInimigo + ", a sua é " + resistencia + ", você ganhou.");
        pontoJogador += 1;
    } else if (resistenciaInimigo > resistencia) {
        alert("A resistência do seu inimigo é " + resistenciaInimigo + ", a sua é " + resistencia + ", você perdeu.");
        pontoInimigo += 1;
    }

   
    if (destreza > destrezaInimigo) {
        alert("A destreza do seu inimigo é " + destrezaInimigo + ", a sua é " + destreza + ", você ganhou.");
        pontoJogador += 1;
    } else if (destrezaInimigo > destreza) {
        alert("A destreza do seu inimigo é " + destrezaInimigo + ", a sua é " + destreza + ", você perdeu.");
        pontoInimigo += 1;
    }

    
    if (agilidade > agilidadeInimigo) {
        alert("A agilidade do seu inimigo é " + agilidadeInimigo + ", a sua é " + agilidade + ", você ganhou.");
        pontoJogador += 1;
    } else if (agilidadeInimigo > agilidade) {
        alert("A agilidade do seu inimigo é " + agilidadeInimigo + ", a sua é " + agilidade + ", você perdeu.");
        pontoInimigo += 1;
    }

    
    if (pontoInimigo > pontoJogador) {
        alert("Por mais dos seus esforços e caminho até aqui, seu inimigo te destruiu completamente durante a batalha. Você está seriamente machucado e nunca mais poderá lutar na vida.");
        alert("GAME OVER");
        throw new Error();
    }

    if (pontoJogador > pontoInimigo) {
        alert("Depois de uma árdua batalha, você derrotou seu inimigo de forma impressionante, Parabéns, você é agora o campeão mundial de box e ganhou as olimpiadas!");
        alert("GAME WON")
     throw new Error
    }
}
}
