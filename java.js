function importCSS(){
    document.write("<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'>");
    document.write("<link rel='stylesheet' href='css.css'>");
}
function criarMatriz(){
    var width = Math.ceil(Math.random() * 5);
    var height = Math.ceil(Math.random() * 5);
    var m = [];
   
    for(i = 0; i < width; i++){
        m[i] = [];
        for(j = 0; j < height; j++){
            m[i][j] = Math.ceil(Math.random() * 10);
        }      
    }

    return m;
}


function adicao(){
    importCSS();

    var matriz1 = criarMatriz();
    var matriz2 = criarMatriz();
    document.write("<a href='adicao.html'><img height='100' width='100' src='images/voltar.png'></a><div class='spaceAround'>");

    imprimir(matriz1);
    document.write("<h2>+</h2>")
    imprimir(matriz2);
    

    if(matriz1.length == matriz2.length && matriz1[0].length == matriz2[0].length){
        matriz3 = [];
        for(i = 0; i < matriz1.length; i++){
            matriz3[i] = [];
            for(j = 0; j < matriz1[i].length; j++){
                matriz3[i][j] = matriz1[i][j] + matriz2[i][j];
            }
        }
        document.write("<h2>=</h2>")
        imprimir(matriz3);

    } else {
        document.write("<h1 class='fixed-bottom'>Matrizes de tamanhos diferentes, não foi possivel fazer a soma</h1>")
    }


    document.write("</div>");
    document.write("<script src='https://code.jquery.com/jquery-3.3.1.slim.min.js' integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo' crossorigin='anonymous'></script> <script src='https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js' integrity='sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1' crossorigin='anonymous'></script> <script src='https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js' integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM' crossorigin='anonymous'></script>")
}

function subtracao(){
    importCSS();

    var matriz1 = criarMatriz();
    var matriz2 = criarMatriz();
    document.write("<a href='subtracao.html'><img height='100' width='100' src='images/voltar.png'></a><div class='spaceAround'>");

    imprimir(matriz1);
    document.write("<h2>-</h2>")
    imprimir(matriz2);
    

    if(matriz1.length == matriz2.length && matriz1[0].length == matriz2[0].length){
        matriz3 = [];
        for(i = 0; i < matriz1.length; i++){
            matriz3[i] = [];
            for(j = 0; j < matriz1[i].length; j++){
                matriz3[i][j] = matriz1[i][j] - matriz2[i][j];
            }
        }
        document.write("<h2>=</h2>")
        imprimir(matriz3);

    } else {
        document.write("<h1 class='fixed-bottom'>Matrizes de tamanhos diferentes, não foi possivel fazer a subtracao</h1>")
    }


    document.write("</div>");
    document.write("<script src='https://code.jquery.com/jquery-3.3.1.slim.min.js' integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo' crossorigin='anonymous'></script> <script src='https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js' integrity='sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1' crossorigin='anonymous'></script> <script src='https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js' integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM' crossorigin='anonymous'></script>")
}

function imprimir(m){
    
    document.write("<table>");
    for(i = 0; i < m.length; i++){
        document.write("<tr>");
        for(j = 0; j < m[i].length; j++){
            document.write("<td>" + m[i][j] + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");

}