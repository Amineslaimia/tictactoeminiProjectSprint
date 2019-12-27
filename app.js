var player ='O'
var board={
    "cell1":null,
    "cell2":null,
    "cell3":null,
    "cell4":null,
    "cell5":null,
    "cell6":null,
    "cell7":null,
    "cell8":null,
    "cell9":null
}
function nextplayer(){
    if(player ==='X'){
        player = 'O'
    }else{
        player = 'X'
    }
}
document.getElementById("cell1").addEventListener("click", function() {xOrO(document.getElementById("cell1"))});
document.getElementById("cell2").addEventListener("click", function() {xOrO(document.getElementById("cell2"))});
document.getElementById("cell3").addEventListener("click", function() {xOrO(document.getElementById("cell3"))});
document.getElementById("cell4").addEventListener("click", function() {xOrO(document.getElementById("cell4"))});
document.getElementById("cell5").addEventListener("click", function() {xOrO(document.getElementById("cell5"))});
document.getElementById("cell6").addEventListener("click", function() {xOrO(document.getElementById("cell6"))});
document.getElementById("cell7").addEventListener("click", function() {xOrO(document.getElementById("cell7"))});
document.getElementById("cell8").addEventListener("click", function() {xOrO(document.getElementById("cell8"))});
document.getElementById("cell9").addEventListener("click", function() {xOrO(document.getElementById("cell9"))});
document.getElementById("reset").addEventListener("click", function() {reset()});

function xOrO(element) {
    if(document.getElementById("result").innerHTML===''){
  if(element.innerHTML === '-'){

        nextplayer()
    element.innerHTML = player
    createBooard(element.id,player)
    if(checkdiagonals("O")||checkhoriz("O")||checkvertical("O")){
        document.getElementById("result").innerHTML='O is the winner'
    }else if(checkdiagonals("X")||checkhoriz("X")||checkvertical("X")){
        document.getElementById("result").innerHTML='X is the winner'
    }else if(checkfordraw()){
        document.getElementById("result").innerHTML='DRAW'
    }

  }
}

}
function reset(){
    document.getElementById("cell1").innerHTML='-';
    document.getElementById("cell2").innerHTML='-';
    document.getElementById("cell3").innerHTML='-';
    document.getElementById("cell4").innerHTML='-';
    document.getElementById("cell5").innerHTML='-';
    document.getElementById("cell6").innerHTML='-';
    document.getElementById("cell7").innerHTML='-';
    document.getElementById("cell8").innerHTML='-';
    document.getElementById("cell9").innerHTML='-';
    board={
        "cell1":null,
        "cell2":null,
        "cell3":null,
        "cell4":null,
        "cell5":null,
        "cell6":null,
        "cell7":null,
        "cell8":null,
        "cell9":null
    }
    document.getElementById("result").innerHTML=''

}
function createBooard(id,play){
    board[id]=play
}
function checkfordraw(){
    if(Object.values(board).indexOf(null)===-1){
        return true
    }
    return false
}

function checkdiagonals(symbol){
if(board.cell3 ===symbol&&board.cell5 ===symbol&&board.cell7 ===symbol){
return true
}else if(board.cell1 ===symbol&&board.cell5 ===symbol&&board.cell9 ===symbol){
    return true
}
return false
}

function checkhoriz(symbol){
    if(board.cell1 ===symbol&&board.cell2 ===symbol&&board.cell3 ===symbol){
    return true
    }else if(board.cell4 ===symbol&&board.cell5 ===symbol&&board.cell6 ===symbol){
        return true
    }else if(board.cell7 ===symbol&&board.cell8 ===symbol&&board.cell9 ===symbol){
        return true
    }
    return false
    }

    function checkvertical(symbol){
        if(board.cell1 ===symbol&&board.cell4 ===symbol&&board.cell7 ===symbol){
            return true
            }else if(board.cell2 ===symbol&&board.cell5 ===symbol&&board.cell8 ===symbol){
                return true
            }else if(board.cell3 ===symbol&&board.cell6 ===symbol&&board.cell9 ===symbol){
                return true
            }
            return false
            }