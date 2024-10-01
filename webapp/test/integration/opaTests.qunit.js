sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'jwincidenui02/test/integration/FirstJourney',
		'jwincidenui02/test/integration/pages/IncidentsList',
		'jwincidenui02/test/integration/pages/IncidentsObjectPage'
    ],
    function(JourneyRunner, opaJourney, IncidentsList, IncidentsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('jwincidenui02') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheIncidentsList: IncidentsList,
					onTheIncidentsObjectPage: IncidentsObjectPage
                }
            },
            opaJourney.run
        );
    }
);