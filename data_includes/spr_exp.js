var shuffleSequence = seq("setcounter", "intro", 
                          sepWith("sepprac", seq("prac")), "presepA", 
                          sepWith("sepexp", rshuffle(startsWith("setA"), startsWith("setB"), startsWith("setC"), "filler")));
var practiceItemTypes = ["prac"];
var completionMessage = "Hartelijk dank voor uw deelname! U kunt nu het venster sluiten."

    
var defaults = [
    "Separator", {
        normalMessage: "Even geduld aub."
    },
    "DashedSentence", {
        mode: "self-paced reading", display: "dashed", blankText: "blankText"
    },
    "Question", {
        as: ["Ja", "Nee"],
        randomOrder: false
    },
    "Message", {
        hideProgressBar: false
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true
    }
];

 // insert breaks
function modifyRunningOrder(ro) {
    for (var i = 0; i < ro.length; ++i) {
        if (i % 24 == 22 && i > 30 && i < 300) {
            ro[i].push(new DynamicElement("Message", { 
                html: "<p>Neem een korte pauze. Het experiment wordt over 10 seconden voortgezet.</p>", 
                transfer: 10000 },true));
        }
        if (i == (ro.length/2)+30) {
            ro[i].push(new DynamicElement("Message", { 
                html: "<p>Halverwege! Het experiment wordt over 30 seconden voortgezet.</p>", 
                transfer: 30000 },true));
        } 
    }
    return ro;
}

var items = [

    ["setcounter", "__SetCounter__", { }], 

    ["intro", "Form", {consentRequired: true, html: {include: "intro.html" }} ],
    ["intro", "Form", {consentRequired: true, html: {include: "intro1.html" }} ],
    ["intro", "Form", {consentRequired: true, html: {include: "intro2.html" }} ],
    ["intro", "Form", {consentRequired: true, html: {include: "intro3.html" }} ],
    ["sepprac", "Separator", {transfer: 1000, errorMessage: "Verkeerd antwoord. Even geduld aub."}],
    ["sepexp", "Separator", {transfer: 1000, errorMessage: "Verkeerd antwoord. Even geduld aub."}],
    
    // Practice
   
    ["prac", "DashedSentence", {s: ["Dit is", "een oefenzin", "om u", "aan de presentatiemethode", "te laten wennen"]}, "Question",  {q:"Was die zin gemakkelijk?"}],
    ["prac", "DashedSentence", {s: ["Dit is", "een andere oefenzin,", "die langer en", "iets gecompliceerder is", "dan degene die", "je net hebt gelezen."]}, "Question",  {q:"Heb je dat in een normaal tempo gelezen?"}],
                           
    ["prac", Message, {consentRequired: false, transfer: "keypress",
                    html: ["div",
                          ["p", "Dat is alles wat u hoeft te doen! Laten we wat oefenzinnen proberen, zoals de zinnen die u in het experiment zult zien:"]
                          ]}],

    ["prac", "DashedSentence", {s: ["My favorite singer", "is famous for", "revolutionizing country music.", "My favorite movie star", "is a high-achieving", "young woman.", "They are both", "very inspiritional.", "I have", "learned a lot", "from their stories."]}, "Question", {hasCorrect: 0, q: "Is any singer mentioned in the sentence?"}],
    ["prac", "DashedSentence", {s: ["This desk", "belongs to", "Sandra.", "That desk over there", "belongs to", "her brother Nick.", "Both of these tables", "is black.", "The siblings", "are thinking about", "selling the tables."]}, "Question", {hasCorrect: 1, q: "Does Sandra own a white table?"}],
    ["prac", "DashedSentence", {s: ["Patricia", "works as", "a truck driver.", "Her best friend,", "Tania,", "is a hard-working policewoman.", "He is really good", "at his job.", "They have", "known each other", "since high school."]}, "Question",{hasCorrect: 1, q: "Does Tania work as a nurse?"}],

    ["prac", Message, {consentRequired: false, transfer: "keypress",
                    html: ["div",
                          ["p", "Some sentences, like the one you just read, are fairly long and complex. How did you do on the comprehension question?"],
                          ["p", "Try your hand at these next few sentences. Don't overthink your response: go with your gut feeling or intuition!"]
                          ]}],

    ["prac", "DashedSentence", {s: ["Sheryl", "is a mother", "of three boys.", "Helen", "has a son", "and two daughters.", "They were both", "very good parents.", "Their children", "are in the", "same kindergarten."]}, "Question", {hasCorrect: 0, q: "Is any woman mentioned in the sentence?"}],
    ["prac", "DashedSentence", {s: ["This apartment", "has a big kitchen", "and a bathroom.", "That apartment", "down the hallway", "is smaller but quite cozy.", "Both of these apartments", "are very expensive.", "Julia has been", "looking for", "a new place to stay."]}, "Question", {hasCorrect: 1, q: "Are the apartments quite cheap?"}],
    ["prac", "DashedSentence", {s: ["Fiona", "went to a film", "with her boyfriend.", "Her roommate,", "Ginny,", "went clubbing with her friends.", "They both go out", "last night.", "Everyone should", "have some fun", "on the weekend."]}, "Question", {hasCorrect: 1, q: "Did Ginny go to the film with Fiona?"}],
    
    ["prac", Message, {consentRequired: false, transfer: "keypress",
                     html: ["div",
                           ["p", "That's all the practice! When you're ready to begin the experiment, press any button to move ahead. REMEMBER: it will last approximately 80 minutes, and will require your full attention throughout that period. Thank you for your help!"]
                           ]}],


    ["presepA", "Separator", {transfer: 5000, normalMessage: "Houd uw handen in positie en maak u klaar om te beginnen!"}],


    //Stimuli List (16/20)
    ["setA.NU", "DashedSentence", {s: ["Het nieuws", "is op tv.", "Ik probeer nu", "met mijn oude moeder", "naar", "het nieuws", "te kijken", "in de woonkammer."]}, "Question", {q: "Wordt iemands moeder in de zin genoemd?", hasCorrect: 0}],
    ["setA.ER", "DashedSentence", {s: ["Het nieuws", "is op tv.", "Ik probeerer", "met mijn oude moeder", "naar", "te kijken", "in de woonkammer."]}, "Question", {q: "Staat in de zin waar ze ernaar kijken?", hasCorrect: 0}],
    ["setB.NU", "DashedSentence", {s: ["Klassiek is", "zijn favoriete muziek.", "Hij wil nu", "in de auto altijd", "naar", "klassiek luisteren", "op hoog volume."]}, "Question", {q: "Gaat deze zin over rockmuziek?", hasCorrect: 1}],
    ["setB.ER", "DashedSentence", {s: ["Klassiek is", "zijn favoriete muziek.", "Hij wil er", "in de auto altijd", "naar", "luisteren", "op hoog volume."]}, "Question", {q: "Wil hij luid naar de muziek luisteren?", hasCorrect: 0}],
    ["setC.NU", "DashedSentence", {s: ["Haar autosleutel", "is rood.", "Ze moet nu", "’s ochtends vaak", "naar", "haar autosleutel zoeken", "als ze weggaat."]}, "Question", {q: "Zijn de autosleutels rood?", hasCorrect: 0}],
    ["setC.ER", "DashedSentence", {s: ["Haar autosleutel", "is rood.", "Ze moet er", "’s ochtends vaak", "naar", "zoeken", "als ze weggaat."]}, "Question", {q: "Is ze haar autosleutels kwijtgeraakt?", hasCorrect: 0}],
    ["setD.NU", "DashedSentence", {s: ["Het postkantoor", "is open.", "U kunt nu", "elke dag pakketten", "naar", "het postkantoor brengen", "tot sluitingstijd."]}, "Question", {q: "Gaat deze zin over openingstijden?", hasCorrect: 0}],
    ["setD.ER", "DashedSentence", {s: ["Het postkantoor", "is open.", "U kunt er", "elke dag pakketten", "naar", "brengen", "tot sluitingstijd."]}, "Question", {q: "Is het postkantoor gesloten?", hasCorrect: 1}],
    ["setE.NU", "DashedSentence", {s: ["Deze film", "lijkt goed.", "Hij wil nu", "met zijn vrienden", "naar", "deze film kijken", "in de bioscoop."]}, "Question", {q: "Gaat deze zin over televisie?", hasCorrect: 1}],
    ["setE.ER", "DashedSentence", {s: ["Deze film", "lijkt goed.", "Hij wil er", "met zijn vrienden", "naar", "kijken", "in de bioscoop."]}, "Question", {q: "Wil hij de film met zijn moeder zien?", hasCorrect: 1}],
    ["setF.NU", "DashedSentence", {s: ["De kat", "is verlegen.", "We moeten nu", "vaak allemaal", "naar", "de kat zoeken", "nadat mensen", "weer zijn vertrokken."]}, "Question", {q: "Gaat deze zin over een hond?", hasCorrect: 1}],
    ["setF.ER", "DashedSentence", {s: ["De kat", "is verlegen.", "We moeten er", "vaak allemaal", "naar", "zoeken nadat mensen", "weer zijn vertrokken."]}, "Question", {q: "Is de kat verlegen?", hasCorrect: 0}],
    ["setG.NU", "DashedSentence", {s: ["Dit was", "zijn favoriete schilderij.", "Hij staart nu", "altijd", "met veel bewondering", "naar", "het schilderij", "als hij", "hem bezoekt."]}, "Question", {q: "Gaat deze zin over muziek?", hasCorrect: 1}],
    ["setG.ER", "DashedSentence", {s: ["Dit was", "zijn favoriete schilderij.", "Hij staart er", "altijd", "met veel bewondering", "naar", "als hij", "hem bezoekt."]}, "Question", {q: "Kijkt hij naar het schilderij als hij het bezoekt?", hasCorrect: 0}],
    ["setH.NU", "DashedSentence", {s: ["Hij woont", "aan zee.", "Hij luistert nu", "vaak vanaf zijn balkon", "naar", "de zee", "om te ontspannen."]}, "Question", {q: "Luistert hij naar de vogels?", hasCorrect: 1}],
    ["setH.ER", "DashedSentence", {s: ["Hij woont", "aan zee.", "Hij luistert er", "vaak vanaf zijn balkon", "de zee", "om te ontspannen."]}, "Question", {q: "Heeft deze zin te maken met de zee?", hasCorrect: 0}],
   
    //Fillers (22/40)
    ["filler", "DashedSentence", {s: ["Het huis", "van mijn vader", "is vlakbij.", "Ik probeer nu", "twee keer per maand", "naar", "het huis", "van mijn vader", "te gaan."]}, "Question", {q: "Heeft deze zin te maken met iemands vader?", hasCorrect: 0}],
    ["filler", "DashedSentence", {s: ["Het museum", "is in deze straat.", "Ik wil er", "in het weekend", "naartoe", "gaan met mijn vriend."]}, "Question", {q: "Wil hij met een vriend meegaan?", hasCorrect: 0}],
    ["filler", "DashedSentence", {s: ["Bij deze juwelier", "zou hij vast", "een cadeautje vinden", "voor zijn vrouw.", "In het uitstalraam", "lag een mooie armband."]}, "Question", {q: "Heeft deze zin met eten te maken?", hasCorrect: 1}],
    ["filler", "DashedSentence", {s: ["Op de snelweg", "stond een file", "en er waren", "al enkele ongevallen", "gemeld."]}, "Question", {q: "Gaat deze zin over verkeer?", hasCorrect: 0}],
    ["filler", "DashedSentence", {s: ["Hij verdenkt", "er zijn vriend", "van een overval", "op een bank", "te hebben gepleegd."]}, "Question", {q: "Denkt hij dat zijn vriend een misdaad heeft begaan?", hasCorrect: 0}],
    ["filler", "DashedSentence", {s: ["Ik was", "er verbaasd over", "dat hij", "voor wiskunde slaagde."]}, "Question", {q: "Hadden ze verwacht dat hij zou slagen?", hasCorrect: 0}],
    ["filler", "DashedSentence", {s: ["De dokter zei", "dat mijn tante", "niet te hard", "mag werken."]}, "Question", {q: "Gaat deze zin over iemands oom?", hasCorrect: 1}],
    ["filler", "DashedSentence", {s: ["Ik wil niet", "een medewerker", "die helemaal", "uit Groningen", "moet komen."]}, "Question", {q: "Staat in deze zin Rotterdam?", hasCorrect: 1}],
    ["filler", "DashedSentence", {s: ["Ik heb niet", "in een jeugdherberg", "gelogeerd maar in", "een pension."]}, "Question", {q: "Gaat deze zin over soorten accommodatie?", hasCorrect: 0}],
    ["filler", "DashedSentence", {s: ["In het Forum", "kan ze zich", "een stuk beter", "concentreren."]}, "Question", {q: "Concentreert ze zich in het ziekenhuis??", hasCorrect: 1}],
    ["filler", "DashedSentence", {s: ["Nu hoopt ze", "vooral dat", "het er", "de komende tijd", "rustig blijft."]}, "Question", {q: "Hoopt ze dat het stil zal zijn?", hasCorrect: 0}],
    ["filler", "DashedSentence", {s: ["Als alles", "volgens plan verloopt,", "duren de werkzaamheden", "zes weken."]}, "Question", {q: "Zal het werk een jaar duren?", hasCorrect: 1}],
    ["filler", "DashedSentence", {s: ["Hoewel de rechter", "besloot de kap", "voorlopig stil te leggen", "werd het bezwaar", "van de stichting", "eind vorige week verworpen."]}, "Question", {q: "Wordt in deze zin een politicus genoemd?", hasCorrect: 1}],
    ["filler", "DashedSentence", {s: ["Na meldingen", "van de wijkagent", "over het aantal overtredingen", "houdt de politie", "er nu vrijwel", "dagelijks controles."]}, "Question", {q: "Wordt in deze zin de politie genoemd?", hasCorrect: 0}],
    ["filler", "DashedSentence", {s: ["Veel studenten", "worden beboet voor", "het vasthouden", "van hun telefoon."]}, "Question", {q: "Gaat deze zin over drugsgebruik?", hasCorrect: 1}],
    ["filler", "DashedSentence", {s: ["Een van de laatste", "studentenblogs", "op de website", "van de universiteit", "ging over", "fietsen."]}, "Question", {q: "Was een van de laatste blogs over autorijden?", hasCorrect: 1}],
    ["filler", "DashedSentence", {s: ["Het is nu", "bijna een jaar", "geleden dat", "de aanbesteding", "van de klus", "vastliep door tussenkomst", "van de rechter."]}, "Question", {q: "Was er vertraging vanwege de rechter?", hasCorrect: 0}],
    ["filler", "DashedSentence", {s: ["Wel zijn er", "tot nu toe", "tweeduizend heipalen", "de grond", "in gegaan."]}, "Question", {q: "Heeft deze zin te maken met bakken?", hasCorrect: 1}],
    ["filler", "DashedSentence", {s: ["Het festival", "moet studenten", "en Stadjers", "de kans geven", "om kennis te maken", "met de vereniging."]}, "Question", {q: "Wordt er in deze zin gesproken over studenten?", hasCorrect: 0}],
    ["filler", "DashedSentence", {s: ["De ruimte", "is vooral tijdens", "de tentamenperiode", "heel snel vol."]}, "Question", {q: "Heeft deze zin te maken met computers?", hasCorrect: 1}],
    ["filler", "DashedSentence", {s: ["De bibliotheek", "heeft deze tentamenperiode", "door de verhuizing", "en renovatie", "minder studieplekken."]}, "Question", {q: "Bevat deze zin renovaties?", hasCorrect: 0}],
    ["filler", "DashedSentence", {s: ["Veel studenten", "wonen wel", "in de stad,", "maar staan niet", "ingeschreven", "bij de gemeente."]}, "Question", {q: "Zijn veel studenten niet ingeschreven?", hasCorrect: 0}],
    ["filler", "DashedSentence", {s: ["Veel studenten", "wonen wel", "in de stad,", "maar staan niet", "ingeschreven", "bij de gemeente."]}, "Question", {q: "Zijn veel studenten niet ingeschreven?", hasCorrect: 0}],

];