name=""
money=0
health=0
attitude=0
hunger=0
attack=0
defense=0
speed=0
magic=0
job=""
function test(){
  console.log("it works!")
}
function jobassigner(newjob){
  //Select jobbox from html using DOM
  const jobbox=document.getElementById("job")
  jobbox.innerHTML=newjob
  let image=document.createElement("img")
  image.id="jobimage"
  if(newjob=="ARCHER"){
    image.src="archer.png"
    job="ARCHER"
  }
  if(newjob=="SWORDSMAN"){
    image.src="orange swordsman.png"
    job="SWORDSMAN"
  }
  if(newjob=="SPEARSMAN"){
    image.src="spearsman.png"
    job="SPEARSMAN"
  }
  if(newjob=="WIZARD"){
    image.src="wizard.png"
    job="WIZARD"
  }
    
  jobbox.appendChild(image)
}
function confirmation(){
  console.log("Confirmed")
  const jobSelect=document.getElementById("carrer list")
  //remove button list from the page
  jobSelect.remove()
  
  if(job=="ARCHER"){
    health=100
    attitude=100
    attack=75
    speed=100
    defence=100
    magic=25
    
  }
  if(job=="SWORDSMAN"){
     health=100
  attitude=100
  attack=125
  speed=100
  defence=100
    magic=0
  }
   if(job=="SPEARSMAN"){
     health=100
     attitude=100
     attack=90
     speed=120
     defence=95
     magic=0
   }
  if(job=="WIZARD"){
    health=100
    attitude=100
    attack=100
    speed=100
    defence=100
    magic=100
  }

  displaystats()
}

function displaystats(){
  //we are getting the div by its id
  const statContainer=document.getElementById("stat-container")
  statContainer.classList.add("show")

  //display health stat
  const healthy=document.createElement("h1")
  healthy.innerHTML="Health: " +health
  statContainer.appendChild(healthy)

  //display attitude stat
  const morale=document.createElement("h2")
  morale.innerHTML="Attitude:"+attitude
  statContainer.appendChild(morale)
  //display attack stat
  const power=document.createElement("h3")
  power.innerHTML="Attack:"+attack
  statContainer.appendChild(power)

  const Speed=document.createElement("h4")
  Speed.innerHTML="Speed:"+speed
  statContainer.appendChild(Speed)  

const Magic=document.createElement("h5")
  Magic.innerHTML="Magic:" +magic
  statContainer.appendChild(Magic)

  const Defence=document.createElement("h6")
  Defence.innerHTML="Defence:" +defence
  statContainer.appendChild(Defence)
}

  