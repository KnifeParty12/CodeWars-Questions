function order(words){
    if(words === "") return "";
    var empty = [];
    words = words.split(" ");
    var j =1;
    for( var i =0; i<words.length; i++){
        if(words[i].indexOf(j)> -1){
        empty.push(words[i]);
        j++;
        i = -1;
        }
    }
    return empty.join(" ");
}



let str = "Thi1s h6awtness doma4in i2s m3y  o5f ";

console.log(order(str));


/*----------The Regex Way----------*/

function order2(words){

    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}

console.log(order2(str));
