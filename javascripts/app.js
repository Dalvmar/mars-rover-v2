
 function rover(name){
  this.name=name;
  this.direction= 'N';
  this.travelLOg=[];
  this.posX=0;
  this.posY=0;
 
}
var roverGrid ={
  grid: grid()}
 
function grid(){
  return Array(10).fill(0).map(() => Array(10).fill("null"));
}

function turnLeft(rover){
  
   if (rover.direction==='N'){
     rover.direction='W';
     console.log(rover.direction);
   }else if(rover.direction==='W'){
      rover.direction='S';
      console.log(rover.direction);
   }else if(rover.direction==='S'){
   rover.direction='E';
   console.log(rover.direction);
   }else if(rover.direction==='E'){
    rover.direction='N';
    console.log(rover.direction);
   }
   
  console.log("turnLeft was called!");
}

function turnRight(rover){
  if (rover.direction==='N'){
    rover.direction='E';
    console.log(rover.direction);
  }else if(rover.direction==='E'){
    rover.direction='S';
    console.log(rover.direction);
  }else if(rover.direction==='W'){
    rover.direction='N';
    console.log(rover.direction);
  }else if(rover.direction==='S'){
    rover.direction='W';
    console.log(rover.direction);
  }
  
  console.log("turnRight was called!");
}


function moveForward(rover){

  roverGrid.grid[rover.posX][rover.posY]='null';

  if (rover.direction === 'N' && rover.posX!==0)
  { 
    if((roverGrid.grid[rover.posX-1][rover.posY])==='P' || roverGrid.grid[rover.posX-1][rover.posY]==='R')
    {
      console.log("Obstaculo:"+ roverGrid.grid[rover.posX-1][rover.posY]);
    }
    else 
    {
      rover.posX -= 1;
    }
  }
  else if (rover.direction === 'S' && rover.posX!==9)
  { 
    if((roverGrid.grid[rover.posX+1][rover.posY])==='P' || roverGrid.grid[rover.posX+1][rover.posY]==='R')
    {
      console.log("Obstaculo:"+ roverGrid.grid[rover.posX+1][rover.posY]);
    }
    else 
    {
      rover.posX += 1;
    }
  }
  
  else if (rover.direction === 'E' && rover.posY!==9)
  { 
    if((roverGrid.grid[rover.posX][rover.posY+1])==='P' || roverGrid.grid[rover.posX][rover.posY+1]==='R')
    {
      console.log("Obstaculo:"+ roverGrid.grid[rover.posX][rover.posY+1]);
    }
    else
    {
      rover.posY += 1;
    }
  }
   
  else if (rover.direction === 'W' && rover.posY !== 0)
  {
    if((roverGrid.grid[rover.posX][rover.posY-1])==='P' || roverGrid.grid[rover.posX][rover.posY-1]==='R')
    {
      console.log("Obstaculo:"+ roverGrid.grid[rover.posX][rover.posY-1]);
    }
    else
    {
     rover.posY -= 1;
    }
  }

  roverGrid.grid[rover.posX][rover.posY]='R';
  rover.travelLOg.push(rover.posX +','+rover.posY);
  console.log(rover.posX+','+rover.posY);
  console.log("moveForward was called");
}


function moveBackward(rover){

  roverGrid.grid[rover.posX][rover.posY]='null';

  if (rover.direction === 'N' && rover.posX!==9)
  { 
    if((roverGrid.grid[rover.posX+1][rover.posY])==='P'|| roverGrid.grid[rover.posX+1][rover.posY]==='R')
    {
      console.log("Obstaculo:"+ roverGrid.grid[rover.posX+1][rover.posY]);
    }
    else 
    {
      rover.posX+= 1;
    }
  }
  else if (rover.direction === 'S' && (rover.posX!==0))
  { 
    if(roverGrid.grid[rover.posX-1][rover.posY]==='P'|| roverGrid.grid[rover.posX-1][rover.posY]==='R'){
      console.log("Obstaculo:"+ roverGrid.grid[rover.posX-1][rover.posY]);
    }
    else
    {
    rover.posX -= 1;
    }
  }
  
  else if (rover.direction === 'E' && (rover.posY!==0))
  { 
    if(roverGrid.grid[rover.posX][rover.posY-1]==='P' || roverGrid.grid[rover.posX][rover.posY-1]==='R')
    {
      console.log("Obstaculo:"+ roverGrid.grid[rover.posX][rover.posY-1]);
    }
    else
    {
      rover.posY -= 1;
    }
  }
   
  else if (rover.direction === 'W' && rover.posY!==9)
  {
    if(roverGrid.grid[rover.posX][rover.posY+1]==='P' || roverGrid.grid[rover.posX][rover.posY+1]==='R')
    {
      console.log("Obstaculo:"+ roverGrid.grid[rover.posX][rover.posY+1]);
    }
    else 
    {
      rover.posY += 1;
    }
    
  }

  roverGrid.grid[rover.posX][rover.posY]='R';
  rover.travelLOg.push(rover.posX +','+rover.posY);
  console.log(rover.posX+','+rover.posY);
  console.log("moveBackward was called");
}


function roverCommands(rover,commands){

  var order = commands.split('');
  
  for(var ini=0;ini<order.length;ini++){
     
    switch (order[ini]) { 
      case 'r':
      console.log("Go right"); 
      turnRight(rover); 
        break;
      case 'l':
      console.log("Go left"); 
      turnLeft(rover);
        break;
      case 'f':
      console.log("Go forward"); 
      moveForward(rover);
      break;
      case 'b':
      console.log("Go backward");
      moveBackward(rover);
      break;
      default:
      console.log("Order not valid!!!")
        break;
    }
   }
   console.log(rover.travelLOg);
}


function obstacles(num){

  for (var i = 1; i <= num; i++){
    var row = getRandomNum();
    var column = getRandomNum();
roverGrid.grid[row][column]='P';

  }

  console.log(roverGrid.grid);
  }
    function getRandomNum(){
    return Math.floor(Math.random() * 10);
  }
