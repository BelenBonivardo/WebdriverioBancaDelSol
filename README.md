Hola! Espero que te encuentres muy bien :) 
Paso a explicar un poquito lo que intenté hacer, y como lo podés ejecutar, je 
Seguramente vas a ver muchas clases, y vas a preguntarte para qué??? simplemente podría haber sido un search.page y luego una list.page o algo del estilo... pero como quise agregarle un toque de color y quise automatizar también el login, cree algunos steps y clases más. El gran problema: El login contiene CAPTCHA, lo que, dificulta mucho el poder automatizarlo (traté de investigarlo pero no pude lograr nunca conclusión) Asi que, lo dejé tal cual lo estaba planeando... 

En cuanto a ejecución, podés utilizar los comandos: 
1. yarn wdio run para ejecutar todos los tests 
2. yarn run test "@tag" (en este caso el único sería @Sanity) para correr aquellos escenarios que si estan tagueados


Eso es lo que considero mas importante! Un saludo :)