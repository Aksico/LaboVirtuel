
var step1 = new Step('déplacez le bécher sur le bec bunsen','déplacez le bécher sur le bec bunsen','becher on bunsen');
var step2 = new Step('déplacez le bécher sur le microscope','déplacez le bécher sur le microscope','becher on microscope');


var scenario1 = {
	aim : 'Section Objectif <h2></h2>',
	glosary : 'Section Glossaire',
	elements: ['becher','echantillon','petri'],
	zones: ['microscope','bunsen'],
	steps: [step1,step2] //procedure
	
};



