const cartas= [
    //ESPADA
    {numero: 1, palo: 'espada', valor: 14, id:1, tanto: 1, imagen: 'img/espadas_1.jpg'},
    {numero: 2, palo: 'espada', valor: 9, id:2, tanto: 2, imagen: 'img/espadas_2.jpg'},
    {numero: 3, palo: 'espada', valor: 10, id:3, tanto: 3, imagen: 'img/espadas_3.jpg'},
    {numero: 4, palo: 'espada', valor: 1, id:4, tanto: 4, imagen: 'img/espadas_4.jpg'},
    {numero: 5, palo: 'espada', valor: 2, id:5, tanto: 5, imagen: 'img/espadas_5.jpg'},
    {numero: 6, palo: 'espada', valor: 3, id:6, tanto: 6, imagen: 'img/espadas_6.jpg'},
    {numero: 7, palo: 'espada', valor: 12, id:7, tanto: 7, imagen: 'img/espadas_7.jpg'},
    {numero: 10, palo: 'espada', valor: 5, id:8, tanto: 0, imagen: 'img/espadas_10.jpg'},
    {numero: 11, palo: 'espada', valor: 6, id:9, tanto: 0, imagen: 'img/espadas_11.jpg'},
    {numero: 12, palo: 'espada', valor: 7, id:10, tanto: 0, imagen: 'img/espadas_12.jpg'},
    //BASTO
    {numero: 1, palo: 'basto', valor: 13, id:11, tanto: 1, imagen: 'img/bastos_1.jpg'},
    {numero: 2, palo: 'basto', valor: 9, id:12, tanto: 2, imagen: 'img/bastos_1.jpg'},
    {numero: 3, palo: 'basto', valor: 10, id:13, tanto: 3, imagen: 'img/bastos_1.jpg'},
    {numero: 4, palo: 'basto', valor: 1, id:14, tanto: 4, imagen: 'img/bastos_1.jpg'},
    {numero: 5, palo: 'basto', valor: 2, id:15, tanto: 5, imagen: 'img/bastos_1.jpg'},
    {numero: 6, palo: 'basto', valor: 3, id:16, tanto: 6, imagen: 'img/bastos_1.jpg'},
    {numero: 7, palo: 'basto', valor: 4, id:17, tanto: 7, imagen: 'img/bastos_1.jpg'},
    {numero: 10, palo: 'basto', valor: 5, id:18, tanto: 0, imagen: 'img/bastos_1.jpg'},
    {numero: 11, palo: 'basto', valor: 6, id:19, tanto: 0, imagen: 'img/bastos_1.jpg'},
    {numero: 12, palo: 'basto', valor: 7, id:20, tanto: 0, imagen: 'img/bastos_1.jpg'},
    //ORO
    {numero: 1, palo: 'oro', valor: 8, id:21, tanto: 1, imagen: 'img/oros_1.jpg'},
    {numero: 2, palo: 'oro', valor: 9, id:22, tanto: 2, imagen: 'img/oros_1.jpg'},
    {numero: 3, palo: 'oro', valor: 10, id:23, tanto: 3, imagen: 'img/oros_1.jpg'},
    {numero: 4, palo: 'oro', valor: 1, id:24, tanto: 4, imagen: 'img/oros_1.jpg'},
    {numero: 5, palo: 'oro', valor: 2, id:25, tanto: 5, imagen: 'img/oros_1.jpg'},
    {numero: 6, palo: 'oro', valor: 3, id:26, tanto: 6, imagen: 'img/oros_1.jpg'},
    {numero: 7, palo: 'oro', valor: 11, id:27, tanto: 7, imagen: 'img/oros_1.jpg'},
    {numero: 10, palo: 'oro', valor: 5, id:28, tanto: 0, imagen: 'img/oros_1.jpg'},
    {numero: 11, palo: 'oro', valor: 6, id:29, tanto: 0, imagen: 'img/oros_1.jpg'},
    {numero: 12, palo: 'oro', valor: 7, id:30, tanto: 0, imagen: 'img/oros_1.jpg'},
    //COPA
    {numero: 1, palo: 'copa', valor: 8, id:31, tanto: 1, imagen: 'img/copa_1.jpg'},
    {numero: 2, palo: 'copa', valor: 9, id:32, tanto: 2, imagen: 'img/copa_1.jpg'},
    {numero: 3, palo: 'copa', valor: 10, id:33, tanto: 3, imagen: 'img/copa_1.jpg'},
    {numero: 4, palo: 'copa', valor: 1, id:34, tanto: 4, imagen: 'img/copa_1.jpg'},
    {numero: 5, palo: 'copa', valor: 2, id:35, tanto: 5, imagen: 'img/copa_1.jpg'},
    {numero: 6, palo: 'copa', valor: 3, id:36, tanto: 6, imagen: 'img/copa_1.jpg'},
    {numero: 7, palo: 'copa', valor: 4, id:37, tanto: 7, imagen: 'img/copa_1.jpg'},
    {numero: 10, palo: 'copa', valor: 5, id:38, tanto: 0, imagen: 'img/copa_1.jpg'},
    {numero: 11, palo: 'copa', valor: 6, id:39, tanto: 0, imagen: 'img/copa_1.jpg'},
    {numero: 12, palo: 'copa', valor: 7, id:40, tanto: 0, imagen: 'img/copa_1.jpg'}
]

// alert(`Hola  bienvenido a Truco online. Espero que tengas un agradable juego y logres ganar.`);

let copiaCartas=[...cartas];
let puntos=[ [] , [] ];
let manoJugador1=[]; //Informacion para el usuario
let manoJugador2= []; //Informacion para el usuario
let guardarJugador1=[]; //Informacion para la logica
let guardarJugador2= []; //Informacion para la logica
let mesaValor=[]; //Informacion para ver resultado
let mesaVer2=[];
let mesaVer1=[];




if(puntos[0]!=30 || puntos[1]!=30){

    function mezclar(jugador, guardado, clase){
        let random1=Math.trunc((Math.random()*40)+1); 
        let random2=Math.trunc((Math.random()*40)+1);
        let random3=Math.trunc((Math.random()*40)+1);

        if(random1==random2 || random1==random3){ //ver como solucionar el problema de numero 40
            random1+=1;
        }else if(random2==random3){
            random2+=1;
        }
    
        function randomizar(varRandom){
            for(let i=0; i<copiaCartas.length; i++){
                if(copiaCartas[i].id===varRandom){
                    guardado.push(copiaCartas[i]); //puedo guardar el objeto directamente asi no tengo datos dispersos o entremezclados
                    jugador.push(copiaCartas[i].numero+' '+copiaCartas[i].palo);
                }
            }
        }

        randomizar(random1);
        document.getElementsByClassName(clase)[0].innerText= jugador[0];
        randomizar(random2);
        document.getElementsByClassName(clase)[1].innerText= jugador[1];	
        randomizar(random3);
        document.getElementsByClassName(clase)[2].innerText= jugador[2]

        
    } 
    mezclar(manoJugador1, guardarJugador1, 'cartaJugador-1');
    mezclar(manoJugador2, guardarJugador2, 'cartaJugador-2');

    function jugar(clases){
        
        let jugar= document.querySelectorAll(clases);

        jugar.forEach(element => {

            element.addEventListener('click', (e)=>{
                
                function mostrarCartas(clase, id, lugar){
                    let evento= e.target.classList.contains(clase);
                    
                    if(evento){
                        // let sacar= manoJugador1.pop();
                        let sacar= document.getElementById(clase).innerHTML;
                        lugar.push(sacar);
                        
                        console.log('funciona')
                        document.getElementById(clase).classList.add("false");
                        document.getElementById(clase).classList.remove("true");
                        document.getElementById(id).innerText= lugar[0];
                        let valor2= mesaVer2.toString().split(' ');
                        let valor1= mesaVer1.toString().split(' ');
                        
                        if(id=='mesa1'){
                            for(let i=0; i<copiaCartas.length; i++){
                                if(valor1[0]==copiaCartas[i].numero && valor1[1]==copiaCartas[i].palo ){
                                mesaValor.push(copiaCartas[i].valor);
                                }
                            }
                        }else{
                            for(let i=0; i<copiaCartas.length; i++){
                                if(valor2[0]==copiaCartas[i].numero && valor2[1]==copiaCartas[i].palo){
                                mesaValor.push(copiaCartas[i].valor);
                                }
                            }
                        }

                        if((mesaValor[0]!=false) && (mesaValor[1]!=undefined)){
                            if(mesaValor[0]>mesaValor[1]){
                                let ganador= document.getElementById('ganar');
                                ganador.classList.remove('false');
                                ganador.innerText= 'Ha ganado el jugador 1';

                            }else{
                                let ganador= document.getElementById('ganar');
                                ganador.classList.remove('false');
                                ganador.innerText= 'Ha ganado el jugador 2';
                            }
                        }
                        
                    } 
                }
                
                mostrarCartas('carte1', 'mesa2', mesaVer2);
                mostrarCartas('carte2', 'mesa2', mesaVer2);
                mostrarCartas('carte3', 'mesa2', mesaVer2);
                mostrarCartas('carta1', 'mesa1', mesaVer1);
                mostrarCartas('carta2', 'mesa1', mesaVer1);
                mostrarCartas('carta3', 'mesa1', mesaVer1);

                
            });
        });
        
    }
    jugar('.cartaJugador-2');
    jugar('.cartaJugador-1');
    
    
}

    



// function truco(turno, manoJugador){
//     let pregunta1=prompt(`Las cartas del jugador ${turno}: son ${manoJugador} ¿Qué desea hacer? ¿Cantar envido, truco, o callado?`);

//     //#region turno1
//     if(pregunta1== 'Callado' ||pregunta1== 'callado' || pregunta1== 'truco' || pregunta1== 'Truco'){
//         let numeroJugada1= parseInt(prompt (`Qué carta desea jugar? Coloque SOLO el NUMERO. "Recuerde: ${manoJugador}"`));
//         let paloJugada1= prompt(`Ahora coloque SOLO el PALO. "Recuerde: ${manoJugador}"`);
//         for(let i=0; i<copiaCartas.length;i++){
//             if(copiaCartas[i].numero==numeroJugada1 && copiaCartas[i].palo==paloJugada1){
//                 mesa.push(copiaCartas[i].valor);
                    
//             }
//         }
//     }else if(pregunta1== 'envido' || pregunta1== 'Envido'){
//         alert('Aún no tenemos disponible esa opcion! Pronto lo haremos.');
//         truco(turno, manoJugador);
//     }else{
//         alert('Opcion incorrecta');
//         truco(turno, manoJugador);
//     }
    
    
//     //#endregion
// }

// truco(1, manoJugador1);
// alert('Turno jugador2');
// truco(2, manoJugador2);

// if(mesa[0]<mesa[1]){
//     alert('jugador2 ha ganado!!!!!!!');
//     puntos[1]+=1
// }else{
//     alert('jugador1 ha ganado!!!!!!!');
//     puntos[0]+=1;
// }