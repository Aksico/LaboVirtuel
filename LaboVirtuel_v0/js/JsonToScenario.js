/**
 * @author William STEPHAN
 */


function jsonToScenario(json)
{
	// elements
	var elements = new Array();
	for(i = 0; i<json.elements.length; i++)
	{
		elements.push(json.elements[i]);
	}
	
	// zones
	var zones = new Array();
	for(i = 0; i<json.zones.length; i++)
	{
		zones.push(json.zones[i]);
	}
	
	// steps
	var steps = new Array();
	for(i = 0; i<json.steps.length; i++)
	{
		var step = new Step(json.steps[i].instruction, json.steps[i].hint, json.steps[i].action);
		steps.push(step);
	}
	
	// Creation structure Scenario
	scenario1 = {
		aim : json.aim,
		glosary : json.glosary,
		elements: elements,
		zones: zones,
		steps: steps
	}
	return scenario1;
};


function loadFile(file) {
    var xhr = new XMLHttpRequest();
	xhr.overrideMimeType('application/json');
    xhr.open('GET', file);
    xhr.addEventListener('readystatechange', function() 
    { 
    	if (xhr.readyState == 4 && (xhr.status == 0 || xhr.status == 200)) 
    	{ // Si le fichier est chargé sans erreur
       		var reponse = JSON.parse(xhr.responseText);  
       		scenario1 = jsonToScenario(reponse); 	
    	}
   	}, false);
    xhr.send(null);
    return scenario1;
}

function reloadCanva(file)
{
	var scenario1 = loadFile(file);
}

var scenario1 = loadFile('scenario1.json');	


