function Scenario(scenario){
	
	this.currentStep = 0;
	this.loadScenario(scenario);
}

Scenario.prototype.signal =function(message){
		var step = this.steps[this.currentStep];
		if(step != null)
		{
			console.log(message+' to be compared to '+step.action);
			if(step.action == message){
				//Ici, passer à l'étape suivante.
				this.steps[this.currentStep].setDone();
				this.currentStep++;
				if(this.currentStep < scenario1.steps.length)
				{
					this.steps[this.currentStep].setActive();
					console.log(">>"+this.steps[this.currentStep].hint); // Ecrire ca dans la zone de console....
				}
				else
				{
					alert('Bravo ! La manipulation est finie !');
				}
			}	
		}
}
	
Scenario.prototype.loadScenario = function(scenario){
		this.steps = scenario.steps;
		
		var olElement = document.createElement('ol');
		
		
		for(var i = 0, l = this.steps.length; i < l; ++i){
			var step = this.steps[i];
			var tempElem = step.createDomElement();
			olElement.appendChild(tempElem);
		}
		var instructionsElement = document.getElementById("instructions");
		instructionsElement.appendChild(olElement);
		this.steps[this.currentStep].setActive();
		console.log(this.steps[this.currentStep].hint); // Ecrire ca dans la zone de console....
	}

function deleteScenario(scenario){
	delete scenario;
	delete scenario.steps;
	var instructionsElement = document.getElementById("instructions");
	while(instructionsElement.firstChild)
	{
		instructionsElement.removeChild(instructionsElement.firstChild);
	}
}
