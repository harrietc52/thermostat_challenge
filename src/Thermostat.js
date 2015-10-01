function Thermostat() {
  this.temperature = 20
  this.powerSaving = true
  this.colour = 'yellow'
};

  Thermostat.prototype.upTemp = function() {
    if(this.temperature < this.maxTemp()){
      this.temperature++;
    }
    this.setColour();
  };

  Thermostat.prototype.downTemp = function() {
    if(this.temperature > 10) this.temperature--;
    this.setColour();
  };

  Thermostat.prototype.maxTemp = function() {
    if(this.powerSaving) return 25;
    return 32;
    this.setColour();
  };

  Thermostat.prototype.reset = function() {
    this.temperature = 20;
    this.setColour();
    if (this.powerSaving === false) {
      this.powerSaving = true;
      document.getElementById("changePowerSaving").checked = true;
    }
  };

  Thermostat.prototype.changePowerSaving = function() {
   if(this.powerSaving == true){
     this.powerSaving = false;
   }
   else if(this.powerSaving == false && this.temperature > 25 ){
     this.powerSaving = true;
     this.temperature = 25;
   }
   else {
     this.powerSaving = true;
   }
 };

  Thermostat.prototype.setColour = function() {
    if(this.temperature >= 25) {
      this.colour = 'red';
    }
    else if(this.temperature >= 18){
      this.colour = 'yellow';
    }
    else {
    this.colour = 'green';
    }
  };


thermostat = new Thermostat
