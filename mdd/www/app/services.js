angular.module('mdd')

    .factory("confApi", function(){
        var speakers = JSON.parse('[{"id": 1,"name": "Inga Apiecionek","bio": "Short Bio for Inga here...","following":false},{"id": 2,"name": "Kuba Waliński","bio": "Short Bio for Kuba here...","following":true},{"id": 3,"name": "Laura Savu","bio": "Short Bio for Laura here...","following":false},{"id": 4,"name": "Tomasz Kaczmarzyk","bio": "Short Bio for Tomasz here...","following":false},{"id": 5,"name": "Karol Żak","bio": "Short Bio for Karol here...","following":true}]');
        var agenda = JSON.parse('[{"title": "Rynek mobilny dziś i jutro – nowe rynki zbytu","time": "9:15 - 10:15" },{"title": "Ionic Framework","time": "10:35 - 11:50" },{"title": "Unity Game for Windows Phone","time": "12:10 - 13:25" },{"title": "Introduction to Test Driven Development","time": "14:25 - 15:40" },{"title": "Jak budować uniwersalne aplikacje Windows Store?","time": "16:00 - 17:15" }]');

        function getSpeakers(){
            return speakers;
        }

        function getAgenda(forceRefresh){
            console.log("getting agenda");
            var result = agenda;
            if(forceRefresh && agenda[0].title != "Registration and breakfast"){
                result.splice(
                    0,
                    0,
                    {title:"Registration and breakfast", time: "8:00 - 9:00"},
                    {title:"Welcome", time: "9:00 - 9:15"}
                );
            }
            return result;
        }

        function getSpeaker(speakerId){
            return speakers.filter(function(speaker){
               return speaker.id == speakerId
            })[0];
        }

        return{
            getSpeakers: getSpeakers,
            getSpeaker: getSpeaker,
            getAgenda: getAgenda
        }
    });