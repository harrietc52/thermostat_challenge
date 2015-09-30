function Thermostat() {
  this.temperature = 20
  this.powerSaving = true
};

  Thermostat.prototype.upTemp = function() {
    if(this.temperature < this.maxTemp()){
      this.temperature++;
    }
  };

  Thermostat.prototype.downTemp = function() {
    if(this.temperature > 10) this.temperature--;
  };

  Thermostat.prototype.maxTemp = function() {
    if(this.powerSaving) return 25;
    return 32;
  };

  Thermostat.prototype.reset = function() {
    this.temperature = 20;
  };

  Thermostat.prototype.changePowerSaving = function() {
   if(this.powerSaving == true){
     this.powerSaving = false;
   }
   else if(this.powerSaving == false && this.temperature > 25 ){
     this.powerSaving = true;
     this.temperature = 25;
   }
   else{
     this.powerSaving = true;
   }
 };

  Thermostat.prototype.energyUsage = function() {
    if(this.temperature <= 18) return "green";
    if(this.temperature > 18 && this.temperature < 25) return "yellow";
    if(this.temperature >= 25) return "red";
  };

thermostat = new Thermostat
