/**
 * @author William STEPHAN
 */

function openAlertForm()
{
	var FileName = prompt('Veuillez entrer le path du fichier JSON a charger');
	if(FileName != null)
	{
		console.log('chargementFichier');
		console.log(FileName);
		reloadCanva(FileName); // recharger fichier Json en memoire
		deleteScenario(scenario1);
		delete canva;
		canva = new canvasApp(FileName);
	}
}
