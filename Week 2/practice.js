function loopingATriangle(){
	var str="";
	for(var i=1;i<=7;i++){
		for(var j=i; j>0; j--){
			str+="#";
		}
		str+="\n";
	}
	console.log(str);
}

function fizzBuzz(){
	for(var i=1;i<=100;i++){
		if(i%3==0 && i%5==0){
			console.log("FizzBuzz");
		}
		else if(i%3==0){
			console.log("Fizz");
		}
		else if(i%5==0){
			console.log("Buzz");
		}
		else{
			console.log(i);
		}
	}
}
function chessBoard(){
	var board = "";
	for(var i=0;i<8;i++){
		for(var j=0;j<8;j++){
			if (j%2==0 && i%2!=0 || i%2==0 && j%2!=0){
				board+="#";
				}
			else{
				board+=" ";
			}
		}
		board+="\n";
	}
	console.log(board);
}

loopingATriangle();
fizzBuzz();
chessBoard();


//document.getElementById("loopingATriangle").innerHTML = loopingATriangle();