const cartas= [
    //ESPADA
    {numero: 1, palo: 'espada', valor: 14, id:1, tanto: 1},
    {numero: 2, palo: 'espada', valor: 9, id:2, tanto: 2},
    {numero: 3, palo: 'espada', valor: 10, id:3, tanto: 3},
    {numero: 4, palo: 'espada', valor: 1, id:4, tanto: 4},
    {numero: 5, palo: 'espada', valor: 2, id:5, tanto: 5},
    {numero: 6, palo: 'espada', valor: 3, id:6, tanto: 6},
    {numero: 7, palo: 'espada', valor: 12, id:7, tanto: 7},
    {numero: 10, palo: 'espada', valor: 5, id:8, tanto: 0},
    {numero: 11, palo: 'espada', valor: 6, id:9, tanto: 0},
    {numero: 12, palo: 'espada', valor: 7, id:10, tanto: 0},
    //BASTO
    {numero: 1, palo: 'basto', valor: 13, id:11, tanto: 1},
    {numero: 2, palo: 'basto', valor: 9, id:12, tanto: 2},
    {numero: 3, palo: 'basto', valor: 10, id:13, tanto: 3},
    {numero: 4, palo: 'basto', valor: 1, id:14, tanto: 4},
    {numero: 5, palo: 'basto', valor: 2, id:15, tanto: 5},
    {numero: 6, palo: 'basto', valor: 3, id:16, tanto: 6},
    {numero: 7, palo: 'basto', valor: 4, id:17, tanto: 7},
    {numero: 10, palo: 'basto', valor: 5, id:18, tanto: 0},
    {numero: 11, palo: 'basto', valor: 6, id:19, tanto: 0},
    {numero: 12, palo: 'basto', valor: 7, id:20, tanto: 0},
    //ORO
    {numero: 1, palo: 'oro', valor: 8, id:21, tanto: 1},
    {numero: 2, palo: 'oro', valor: 9, id:22, tanto: 2},
    {numero: 3, palo: 'oro', valor: 10, id:23, tanto: 3},
    {numero: 4, palo: 'oro', valor: 1, id:24, tanto: 4},
    {numero: 5, palo: 'oro', valor: 2, id:25, tanto: 5},
    {numero: 6, palo: 'oro', valor: 3, id:26, tanto: 6},
    {numero: 7, palo: 'oro', valor: 11, id:27, tanto: 7},
    {numero: 10, palo: 'oro', valor: 5, id:28, tanto: 0},
    {numero: 11, palo: 'oro', valor: 6, id:29, tanto: 0},
    {numero: 12, palo: 'oro', valor: 7, id:30, tanto: 0},
    //COPA
    {numero: 1, palo: 'copa', valor: 8, id:31, tanto: 1},
    {numero: 2, palo: 'copa', valor: 9, id:32, tanto: 2},
    {numero: 3, palo: 'copa', valor: 10, id:33, tanto: 3},
    {numero: 4, palo: 'copa', valor: 1, id:34, tanto: 4},
    {numero: 5, palo: 'copa', valor: 2, id:35, tanto: 5},
    {numero: 6, palo: 'copa', valor: 3, id:36, tanto: 6},
    {numero: 7, palo: 'copa', valor: 4, id:37, tanto: 7},
    {numero: 10, palo: 'copa', valor: 5, id:38, tanto: 0},
    {numero: 11, palo: 'copa', valor: 6, id:39, tanto: 0},
    {numero: 12, palo: 'copa', valor: 7, id:40, tanto: 0}
]

alert(`Hola  bienvenido a Truco online. Espero que tengas un agradable juego y logres ganar.`);

let copiaCartas=[...cartas];
let puntos=[ [] , [] ];
let manoJugador1=[]; //Informacion para el usuario
let manoJugador2= []; //Informacion para el usuario
let guardarJugador1=[]; //Informacion para la logica
let guardarJugador2= []; //Informacion para la logica
let mesa=[]; //Informacion para ver resultado
console.log(manoJugador1)

function mezclar(jugador, guardado){
    let random1=Math.trunc((Math.random()*40)+1);
    let random2=Math.trunc((Math.random()*40)+1);
    let random3=Math.trunc((Math.random()*40)+1);

    if(random1==random2 || random1==random3){
        random1+=1;
    }else if(random2==random3){
        random2+=1;
    }
   
    function randomizar(varRandom){
        for(let i=0; i<copiaCartas.length; i++){
            if(copiaCartas[i].id===varRandom){
                guardado.push(copiaCartas[i].numero);
                guardado.push(copiaCartas[i].palo);
                jugador.push(copiaCartas[i].numero+' '+copiaCartas[i].palo);
            }
        }
    }
    
  	randomizar(random1);
  	randomizar(random2);								
  	randomizar(random3);
} 
mezclar( manoJugador1, guardarJugador1);
mezclar(manoJugador2, guardarJugador2);


function truco(turno, manoJugador){
    let pregunta1=prompt(`Las cartas del jugador ${turno}: son ${manoJugador} ¿Qué desea hacer? ¿Cantar envido, truco, o callado?`);

    function turno1(){
        if(pregunta1== 'Callado' ||pregunta1== 'callado' || pregunta1== 'truco' || pregunta1== 'Truco'){
            let numeroJugada1= parseInt(prompt (`Qué carta desea jugar? Coloque SOLO el NUMERO. "Recuerde: ${manoJugador}"`));
            let paloJugada1= prompt(`Ahora coloque SOLO el PALO. "Recuerde: ${manoJugador}"`);;
            function puntaje (){
                for(let i=0; i<copiaCartas.length;i++){
                    if(copiaCartas[i].numero==numeroJugada1 && copiaCartas[i].palo==paloJugada1){
                        mesa.push(copiaCartas[i].valor);
                            
                    }
                }
            }
            puntaje();
        }else if(pregunta1== 'envido' || pregunta1== 'Envido'){
            alert('Aún no tenemos disponible esa opcion! Pronto lo haremos.');
            truco(turno, manoJugador);
        }else{
            alert('Opcion incorrecta');
            truco(turno, manoJugador);
        }
    }
    turno1();
}

truco(1, manoJugador1);
alert('Turno jugador2');
truco(2, manoJugador2);

if(mesa[0]<mesa[1]){
    alert('jugador2 ha ganado!!!!!!!');
    puntos[1]+=1
}else{
    alert('jugador1 ha ganado!!!!!!!');
    puntos[0]+=1;
}