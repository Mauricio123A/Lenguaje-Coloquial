let mutliplicador = [["","1"],["","1"],["","1"],["","1"],["","1"],["doble de", "2"],["doble de", "2"],["doble de", "2"],["triple de", "3"], ["cuadruple de", "4"],["quintople de", "5"]]
let agregador = ["el siguiente de ", "el anterior a ", "las 3 mitades de ", "una cuarta parte de "]
let terminacion = [[" sumado a ", "+"], [" disminuido por ", "-"], [" menos ", "-"], [" y su diferencia con ", "-"]]
let terminos = [["el Ml cociente de X y Z", "M * (X/Z)"], 
                ["la mitad del cociente de X y Z", "(X/Z)/2"], 
                ["el M X", "M * X"],["el M X", "M * X"],["el M X", "M * X"],["el M X", "M * X"],
                ["la mitad de X", "X/2"], 
                ["el Ml producto de X y Z", "M * X * Z"], 
                ["la mitad del producto de X y Z", "X * Z / 2"], 
                ["el cuadrado de X", "X * X"],["el cuadrado de X", "X * X"],["el cuadrado de X", "X * X"],
                ["el cubo de la mitad de X", "(X/2 * X/2 * X/2)"],
                ["la mitad del cuadrado de X", "(X * X)/2"],
                ["X","X"],["X","X"],["X","X"],["X","X"],["X","X"],
                ["el siguiente de X", "(X+1)"],
                ["el anterior de X", "(X-1)"],
                ["la tercer parte de X", "(X/3)"],
                ["el siguiente de X", "(X+1)"],]

                function verificarDecimalesYExecutar(num) {
                    const numString = num.toString(); // Convierte el número a cadena
                    const partes = numString.split("."); // Divide la cadena en partes
                
                    if (partes[1] && partes[1].length > 4) {
                        crearLenguajeColoquial(); // Ejecuta la función
                        return
                    }
                }
                
                
let crearLenguajeColoquial = function(){
    let operacion = ""
    let X = Math.floor((24*Math.random()+1))
    let Z = Math.floor((49*Math.random()+1))
    let X2 = Math.floor((24*Math.random()+1))
    let Z2 = Math.floor((49*Math.random()+1))
    let probabilidad = Math.random()*100
    if (probabilidad >= 90){
        X = X * -1
    }else if(probabilidad >= 80){
        X2 = X2 * -1
    }else if (probabilidad >= 75){
        Z = Z * -1
    }else if(probabilidad >= 70){
        Z2 = Z2 * -1
    }
    let terminacionElegida = terminacion[Math.floor((terminacion.length-1)*Math.random()+1)]
    let mutliplicadorElegido = Math.floor((mutliplicador.length-1)*Math.random()+1)
    let mutliplicadorElegido2 = Math.floor((mutliplicador.length-1)*Math.random()+1)
    let terminoElegido = terminos[Math.floor((terminos.length-1)*Math.random()+1)]
    let terminoElegido2 = terminos[Math.floor((terminos.length-1)*Math.random()+1)]
    terminoElegido[0] = terminoElegido[0].replaceAll("X", X).replaceAll("Z", Z).replace("Ml", mutliplicador[mutliplicadorElegido][0] + "l").replace("M", mutliplicador[mutliplicadorElegido][0])
    terminoElegido2[0] = terminoElegido2[0].replaceAll("X", X2).replaceAll("Z", Z2).replace("Ml", mutliplicador[mutliplicadorElegido2][0] + "l").replace("M", mutliplicador[mutliplicadorElegido2][0])
    terminoElegido[1] = terminoElegido[1].replaceAll("X", X).replaceAll("Z", Z).replace("Ml", mutliplicador[mutliplicadorElegido] + "l").replace("M", mutliplicador[mutliplicadorElegido][1])
    terminoElegido2[1] = terminoElegido2[1].replaceAll("X", X2).replaceAll("Z", Z2).replace("Ml", mutliplicador[mutliplicadorElegido2] + "l").replace("M", mutliplicador[mutliplicadorElegido2][1])
    operacion = (terminoElegido[0] + terminacionElegida[0] + terminoElegido2[0]).replaceAll("  ", " ").replaceAll(" l ", " ")
    evaluar =  terminoElegido[1] + terminacionElegida[1] + terminoElegido2[1]
    resultado = eval(evaluar)
    verificarDecimalesYExecutar(resultado)
    return [resultado, operacion, evaluar]
}
document.getElementById("botonCrearOtra").onclick = function(){
    array = crearLenguajeColoquial()
    document.getElementById("h2LenguajeColoquial").innerText = array[1]
    document.getElementById("h2Respuesta").innerHTML = " "
    document.getElementById("h2Respuesta2").innerHTML = " "
}
document.getElementById("botonRespuesta").onclick = function(){
    document.getElementById("h2Respuesta").innerHTML = resultado
    document.getElementById("h2Respuesta2").innerHTML = evaluar
}
