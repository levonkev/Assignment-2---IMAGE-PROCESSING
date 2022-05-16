class ParticleSystem{
  constructor(abc){
    var pcount = abc.pcount;

    this.particles = []; //array for many particles

    for(var i = 0; i < pcount; i++){ //for loop creating particles push into array
      var p = new Particle(i);
      this.particles.push(p); //push adds object to array
    }
  }

  update(dot){
    this.particles.forEach(p => p.update(dot));
  }
//unclear about the update functionality - recieved assistance - borrowed
  draw(){
    strokeWeight(1);

    this.particles.forEach(p => {p.draw();});
  }
}

class Particle{
  constructor(i){
    this.idx = i;
    this.pos = createVector(random(0, 1000), random(0, 1000)); //particle position random between the window size
    this.col = 0;
    this.lastPos = createVector();
    this.lastPos.set(this.pos); //resetting vector
    this.vel = createVector(random(10,20)); //set to 10, otherwise random - WILL change velocity of vectors
    
    
  }

  update(dot){
		this.pos.add(this.vel.x * dot, this.vel.y*dot);
		this.lastPos.set(this.pos);
		
		this.col -= random(0.5, 10);
		
		if(this.pos.x > 1000){
			this.col = 0;
			this.pos.x = 0;
			this.pos.y = random(0,1000);
			this.lastPos.set(this.pos);
      // reset if vector moves outside of window width
		}
	}
	
	draw(){
		var x = floor(this.pos.x);
		var y = floor(this.pos.y);
		
		var col = img.pixels[(y*img.width + x) * 4];
		if(col > this.col){
			this.col = col;
		}
		
		rPoints[this.idx] = {c:this.col, lx: this.lastPos.x-4, ly: this.lastPos.y, x:this.pos.x, y: this.pos.y};
    
	
	}
}



