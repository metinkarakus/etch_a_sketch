
// function to create a grid to draw on;
function gridSize(size){
	// limiting grid size between 2 and 256;
	if(size<2 || size>256){
		var n = prompt("You may only enter a number between 2 and 256.");
		gridSize(parseInt(n));
		return;
	}

	// resetting the grid by removing previous elements;
	var cont = document.querySelector("#main");
	while (cont.firstChild) {
		cont.removeChild(cont.firstChild);
	}

	// each grid element has a relative size to the board;
	var boxSize = (600 / size);  

	// creating and adding elements;
	for (let i = 0; i<size; i++){
		for(let j = 0; j<size; j++){
		var m = document.createElement("div");
		m.setAttribute("class","child");
		m.setAttribute(`style`,`width:${boxSize}px; height:${boxSize}px;`);
		cont.appendChild(m);
		}
	}

	// to select coloring methods after resetting;
	if(document.getElementById("black").checked){
		blackFunc();
	}
	else if(document.getElementById("colorful").checked){
		colorfulFunc();
	}
	
}

// default board with a size of 20 elements each side;
gridSize(20);


// variables to add event listeners;
var colorful = document.getElementById("colorful");
var black = document.getElementById("black");
var reset = document.getElementById("reset");
var board = document.getElementById("gridsize");

// event listeners;
board.addEventListener("click", ()=>gridSize(parseInt(prompt("Please enter a grid size between 2-256"))));
colorful.addEventListener("click", colorfulFunc);
black.addEventListener("click", blackFunc);
reset.addEventListener("click", resetBoard);

// for colorful selection;
function colorfulFunc(){
	var ch = document.querySelectorAll(".child");
	ch.forEach((i)=>{i.addEventListener("mouseenter", 
	()=>i.style.setProperty("background-color",colorPicker()))});
}

// for black selection; 
function blackFunc(){
	var ch = document.querySelectorAll(".child");
	ch.forEach((i)=>{i.addEventListener("mouseenter", 
	()=>i.style.setProperty("background-color","#000"))});
}

// erasing the board with current settings;
function resetBoard(){
	var ch = document.querySelectorAll(".child");
	ch.forEach((i)=>{i.style.setProperty("background-color","white")});
}

// random color picker;
function colorPicker () {

	var colors= ['aqua', '#fed02f', 'blue', '#8c2155', '#4b80b9', 'green', 
'lime', 'maroon', 'navy', 'olive', 'orange', '#91c499', 'red', 
'#60b5df', '#ed8c41', '#8ccac4', 'yellow'];

	var rndcolor = colors[Math.floor(Math.random()*17)];
	return rndcolor;
}

