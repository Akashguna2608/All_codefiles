Square star Pattern

var n = 5;
var number = "";
for ( var i = 0; i < n ; i++){
    for  ( var j = 0 ; j < n ; j++){
        number += "*";
    }
    number += "\n";
}

Hollow square Pattern

var n = 5;
var number = "";
for(var i = 0; i < n; i++){
for(var j = 0 ; j < n ; J++){
    if(i === 0 || i === n-1){
        number +="*"; 
    }
    else{
        if(j === 0 || j === n-1){
            number += "*";
        }
        else {
            number +=  " ";
        }
    }
    number += "\n";
}
}
 Pattern
    var  n= 5;
    var number = "";
    for(var i = 0; i < n; i++){
        for (var j = 0; j < n - i; j++){
            number += " ";
        } 
        for(var k = 0 ; k <= i; k++){
            number += "*"
        }
        number += "\n";
    }
 Pattern
 var n = 5;
 var number = "";
 for (var i = 0; i < n; i++){
    for(var j = 0; j <= i; j++){
number += "*";
    }
    number += "\n";

 }
 pattern 
 var n = 5; 
 var number = "";
 for(var i = 0; i < n ; i++){
    for(var j =0 ; j < n - i; j++){
        number += "*";
    }
    number += "\n";
 }
 pattern

    var n = 5;
    var number = "";
    for(var i = 0; i < n ; i++){
        for(var j = 0; j <=i; j++){
            if(i === n-1 ){
                number += "*";
            }
            else{
                if(j === i || j === i-1){
                number += "*";}
                else{
                    number += " ";
                }
            }
            
        }
        number += "\n";
    }
    pattern 
    var n =5;
    var number = "";
    for (var i =0; i < n; i++){
        for(var j = 0 ; j < n-i - 1; j++){
            number += " ";
        }
        for(var k = 0; k < 2 * i +1; k++){
            number +="*"
        }
        number += "\n";
    }
    pattern
    var n = 5;
    var number = "";
    for(var i =1; i <= n; i++){
        for(var j =0;j < i;j++){
            number += " ";
        }
        for(var k =0; k < 2 * (n -i)+1; k++){
            number += "*";
        }
        number += "\n";
    }
    patternvar 
    var n = 5;
    var number = "";
    for(var i = 0; i < n ;i++){
        for(var j =0; j < n -i-1 ;j++){
            number += " ";

        }
        for(var k = 0; k < 2 * i +1 ;k++){
            if(i ===0 || i === n-1){
                number +="*";
            }
            else{
                if(k === 0 || k=== 2 *i ){
                    number +="*";
                }
                else{
                    number +=" ";
                }
            }
        }
        number += "\n";
    }

    pattern
    var n = 5 ;
    var number = "";
    for(var i = 0 ; i < n; i++){
        for(var j =0; j < n-i-1; j++){
                number += " ";
        }
        for(var k = 0; k < 2 * i + 1;k++ ){
            number += "*";
        }
        number += "\n";
    }
    for(var i = 1; i < n ;i++){
        for(var j =0 ;j < i; j++){
            number +=" ";
        }
        for(var k = 0; k < 2 *(n -i)-1;k++){
            number += "*";
        }
        number += "\n";
    }
    pattern
    var n = 5;
    var number = "";
    for(var i = 0; i < n;i++){
        for(var j = 0; j < n-i -1;j++){
            number += " ";
        }
        for(k = 0; k < 2 * i +1;k++){
            if(k === 0 || k=== 2 * i){
                number += "*";
            }
            else{
                number +=" ";
            }
        }
        number += "\n";
    }
        for(i = 1; i < n; i++){
            for(var j = 0; j < i; j++){
                number += " ";
            }
            for(k = 0; k < 2 * (n -i) -1;k++){
                if(k === 0 || k ===  2 *(n -i)-2){
                    number +="*" 
                }
                else{
                    number += " ";
                }
            }
            number += "\n";
        }
        
        pattern
        var n = 5;
        var number = "";
        for(var i = 1; i <= n; i++){
            for(var j = 0; j < i; j++){
                number += " ";
            }
            for(k = 0 ; k < 2 * (n -i) + 1; k++){
                number += "*";
            }
            number += "\n";
        }
        for (var i =1; i < n;i++){
            for (var j =  1; j <= n - i; j++){
                number += " ";
            }
            for(var k = 0 ; k < 2 * i + 1; k++){
                number += "*";
            }
            number += "\n";
        }
        pattern
        var n = 5; 
        var number = "";
        for(var i = 0 ; i < n;i++){
            for (var j = 0; j < i + 1; j++){
                number += "*";
            }
            number += "\n";
        }
        for(var i = 1 ; i < n; i++){
            for (var j = 0 ; j < n -i; j++){
                number += "*";
            }
            number += "\n";
        }
    
        pattern
        var n = 5 ;
        var number = "";
        for (var i = 1; i <= n ; i++){
            for (var j =0; j < n-i ; j++){
                number += " ";
            }
            for(var k =0 ; k < i;k++){
                number += "*";  
            }
            number += "\n";
        }
        for(var i = 1; i < n;i++){
            for(var j = 0; j < i;j++){
                number += " "
            }
            for(var k = 0 ; k < n -i;k++){
                number += "*"
            }
            number += "\n";
        }
 
        pattern
        var n = 6;
        var number = "";
        for(var i = 2; i < n-2; i++){
            for(var j = 3; j < n - i; j++){
                number += " ";
            }
            for(var k = 0; k < 2 * i -1; k++){               
                    number +="*";
            }
            for(var l = 0; l <= (n -i) - i;l++){
                number += "&";
            }
            for(var m = 0 ; m < 2 * i -1; m++){
                number += "*";
            }
            number += "\n";
        }
        for(var i = 1; i <= n; i++){
            for(var j = 0 ; j < i -1;j++){
                number += " ";
            }
            for(var k =0 ; k < 2 * (n -i)+1; k++){
                number +="*";
            }
            number += "\n";
        }

        pattern-1
var n =7;
var number = "";
count =1;
for(var  i = 1;i <= n;i++){
    for(var j =1;j <= i;j++){
       number +=count+" ";
       count++;
    }
    number +="\n";
}

pattern -2
var n =4;
var number ="";
for(var  i =1; i <= n;i++){
    for(var j =0; j < i;j++){
        number +=i+2;
    }
    number +="\n";
}   
for(var i =1; i < n;i++){
    for(var j =0;j < n-i;j++){
number +=(n+2) -i;
    }
    number +="\n";
}

pattern -3

    var n =4;
    var number ="";
    for(var i =1;i <= n;i++){
        for(var j =0;j < (2*i)-1;j++){
            if(j % 2 ===0){
                number +=i;
            }
            else{
                number += "*";
            }
        }
        number +="\n";
    }
    for(var i =1; i <= n;i++){
        for(var j =0;j < (2* (n-i))+1;j++){
            if(j % 2 ===0){
                number += (n+1)-i;
            }
            else{
                number += "*";
            }
        }
        number += "\n";
    }

    pattern -4
    var n =4;
    var number = "";
    count=1;
    for(var i =1; i <= n;i++){
        for(var j =0; j < 2*i-1;j++){
            if(j % 2 == 0){
                number +=count;
                count++;
            }
            else{
                number +="*";
            }
        }
        number +="\n";
    }
    
    for(var i =1; i <= n;i++){
        for(var j = 0;j < 2 *(n-i)+1;j){
            if(i===1){
                number +=(n+3)-j+" ";
                var a=number.split(" ");
                var b =a.join("*");
            }
        
    }
}

pattern-5
var n =4;
var number ="";
for(var i = 1;i <= n;i++){
    for(var j =1;j <= i;j++){
        if(j ===1){
            number +="*";
        }
        else{
            number +=j-1
        }
    }
    if(j ===3){
        number +="*";
    }
    for(k =0;k < i -2;k++){
        number +=(i-2)-k;
    }
    if(k!=0){
        number += "*"
    }
    number +="\n";
}
for(var i =1; i < n;i++){
    for(j =1;j <= n -i;j++){
        if(j ===1){
            number +="*";
        }
        else{
            number +=j-1;
        }
    }
    if(i===1){
        number +="*";
    }
    for(var k =0;k < (n-2)-i;k++){
        number +=i;
    }
    if(k ===2){
        number +="*";
    }
    number +="\n";
}

pattern -6
var n = 5;
var number ="";
for(var i =1;i <= n;i++){
    for(var j=1;j <= n -i;j++){
        number +=" ";
    }
    for(var k =1; k <= i;k++){
        number += k;
    }
    for(l =0;l < i -1;l++){
        number +=(i-1) -l;
    }
    number +="\n";
}

pattern n-7
var n =5;
var number ="";
for(var i=1;i <= n;i++){
    for(var j =0;j < (2*n)-i-1;j++){
        number +="*";
    }
    for(var k =0;k < 2*i-1;k++){
        if(k % 2===0){
            number +=i;
        }
        else{
            number +="*";
        }
    }
    for(l =0;l < (2* n)-i-1;l++){
        number +="*"
    }
    number +="\n";
}

pattern-8
var n =4;
var number ="";
for(var i =1; i <= n;i++){
    for(var j =0; j <=n-i;j++){
      number +=" ";  
    }
    for(var  k=0; k < 2*i-1;k++){
        if(k ===0){
            number +=(i+1)-i;
        }
        else{
            if(k ===2 *i-2){
                number +=i;
            }
            else{
                number +=" ";
            }
        }
    }
    number +="\n";
}
for(var i =1;i <= n-3;i++){
    for(var j =1; j <= (2*n)+1;j++){
        if(j % 2===1){
            number +=(j+1)-i;
        }
        
    }
    number +="\n";
}

pattern-9
var n = 5;
var number ="";
for(var i=1;i <= n;i++){
    for(var j =1;j <= n-4;j++){
            number +=i;
    }
    for(var k =2;k <= n+1-i;k++){
if(i ===1){
    number+=k;
}
else{
    if(k ===n-i+1){
        number +=n;
    }
    else{
        number +=" ";
    }
}
    }
    number +="\n";
}