// SECTION Vars

let home = 0
let away = 0

// SECTION Functions :)

function draw_home(){
  // @ts-ignore
  document.getElementById("home_button").innerText = home
}

function draw_away(){
  // @ts-ignore
  document.getElementById("away_button").innerText = away
}

function button_home_add(){
  console.log('Home increase');
  home += 1;
  draw_home();
}

function button_away_add(){
  console.log('Away increase');
 away += 1;
  draw_away()
}

function reset(){
  away = 0
  home = 0
  draw_away()
  draw_home()
}