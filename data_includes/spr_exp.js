var shuffleSequence = seq("setcounter", "intro", 
                          sepWith("sepprac", seq("prac")), "presepA", 
                          sepWith("sepexp", rshuffle(startsWith("setA"), startsWith("setB"), startsWith("setC"), startsWith("setD"), startsWith("setE"), startsWith("setF"), startsWith("setG"), startsWith("setH"), "filler")));
var practiceItemTypes = ["prac"];
var completionMessage = "Hartelijk dank voor uw deelname! U kunt nu het venster sluiten."

    
var defaults = [
    "Separator", {
        normalMessage: "Even geduld aub.",
        hideProgressBar: true
    },
    "DashedSentence", {
        mode: "self-paced reading", display: "dashed", blankText: "blankText",
        hideProgressBar: true
    },
    "Question", {
        as: ["Ja", "Nee"],
        randomOrder: false,
        hideProgressBar: true
    },
    "Message", {
        hideProgressBar: true
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
        if (i == (ro.length/2)+20) {
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

    ["prac", "DashedSentence", {s: ["Mijn favoriete zangeres", "staat bekend om haar", "revolutie in countrymuziek.", "Mijn favoriete filmster", "is een jonge vrouw", "die veel presteert."]}, "Question", {hasCorrect: 0, q: "Wordt er een zangeres genoemd in de zin?"}],
    ["prac", "DashedSentence", {s: ["Deze tafel", "is van Sandra.", "Die tafel daarginds", "is van haar broer Nick.", "Beide tafels", "zijn zwart.", "Ze denken erover", "om de tafels", "te verkopen."]}, "Question", {hasCorrect: 1, q: "Heeft Sandra een witte tafel?"}],
    ["prac", "DashedSentence", {s: ["Patricia werkt", "als vrachtwagenchauffeur.", "Haar beste vriendin", "Tania", "is een politieagente.", "Ze is", "erg goed", "in haar werk."]}, "Question",{hasCorrect: 1, q: "Werkt Tania als verpleegster?"}],

    ["prac", Message, {consentRequired: false, transfer: "keypress",
                    html: ["div",
                          ["p", "Sommige zinnen zijn vrij lang en ingewikkeld. Hoe ging het met de begripsvraag? Denk niet te lang na over uw reactie. Ga gewoon met je eerste intuïtie!"],
                          ]}],

    ["prac", "DashedSentence", {s: ["Sarah is", "een moeder", "van drie jongens.", "Helen heeft", "een zoon", "en twee dochters.", "Hun kinderen", "gaan naar", "dezelfde school."]}, "Question", {hasCorrect: 0, q: "Wordt er een vrouw genoemd in de zin?"}],
    ["prac", "DashedSentence", {s: ["Dit appartement", "heeft een grote keuken", "en een badkamer.", "Julia is op zoek", "naar een nieuwe plek."]}, "Question", {hasCorrect: 0, q: "Heeft het appartement een grote keuken?"}],
    ["prac", "DashedSentence", {s: ["Fiona ging", "met haar vriend", "naar een film.", "Haar kamergenote", "ging uitgaan", "met haar vrienden."]}, "Question", {hasCorrect: 1, q: "Heeft Fiona de film gezien met haar kamergenoot?"}],
    
    ["prac", Message, {consentRequired: false, transfer: "click",
                     html: ["div",
                           ["p", "Dat is alle oefening! Druk op een willekeurige knop om verder te gaan. DENK ERAAN: het experiment duurt ongeveer 30 minuten en vereist uw volledige aandacht. Dank u voor uw hulp!"]
                           ]}],


    ["presepA", "Separator", {transfer: 5000, normalMessage: "Houd uw handen in positie en maak u klaar om te beginnen!"}],


    //Stimuli List (16/20)
    ["setA.NU", "DashedSentence", {s: ["Het nieuws", "is op tv.", "Ik probeer nu", "met mijn oude moeder", "naar", "het nieuws", "te kijken", "in de woonkammer."]}, "Question", {q: "Wordt iemands moeder in de zin genoemd?", hasCorrect: 0}],
    ["setA.ER", "DashedSentence", {s: ["Het nieuws", "is op tv.", "Ik probeer er", "met mijn oude moeder", "naar", "te kijken", "in de woonkammer."]}, "Question", {q: "Staat in de zin waar ze ernaar kijken?", hasCorrect: 0}],
    ["setB.NU", "DashedSentence", {s: ["Klassiek is", "zijn favoriete muziek.", "Hij wil nu", "in de auto altijd", "naar", "klassiek luisteren", "op hoog volume."]}, "Question", {q: "Gaat deze zin over rockmuziek?", hasCorrect: 1}],
    ["setB.ER", "DashedSentence", {s: ["Klassiek is", "zijn favoriete muziek.", "Hij wil er", "in de auto altijd", "naar", "luisteren", "op hoog volume."]}, "Question", {q: "Wil hij luid naar de muziek luisteren?", hasCorrect: 0}],
    ["setC.NU", "DashedSentence", {s: ["Haar autosleutel", "is rood.", "Ze moet nu", "’s ochtends vaak", "naar", "haar autosleutel zoeken", "als ze weggaat."]}, "Question", {q: "Zijn de autosleutels rood?", hasCorrect: 0}],
    ["setC.ER", "DashedSentence", {s: ["Haar autosleutel", "is rood.", "Ze moet er", "’s ochtends vaak", "naar", "zoeken", "als ze weggaat."]}, "Question", {q: "Raakt ze haar sleutels vaak kwijt?", hasCorrect: 0}],
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
   
    //Fillers (27/40)
    ["filler", "DashedSentence", {s: ["Het huis", "van mijn vader", "is vlakbij.", "Ik probeer nu", "twee keer per maand", "naar", "het huis", "van mijn vader", "te gaan."]}, "Question", {q: "Heeft deze zin te maken met iemands vader?", hasCorrect: 0}],
    ["filler", "DashedSentence", {s: ["Het museum", "is in deze straat.", "Ik wil er", "in het weekend", "naartoe", "gaan met mijn vriend."]}, "Question", {q: "Wil hij een vriend meenemen?", hasCorrect: 0}],
    ["filler", "DashedSentence", {s: ["Bij deze juwelier", "zou hij vast", "een cadeautje vinden", "voor zijn vrouw.", "In het uitstalraam", "lag een mooie armband."]}, "Question", {q: "Heeft deze zin met eten te maken?", hasCorrect: 1}],
    ["filler", "DashedSentence", {s: ["Op de snelweg", "stond een file", "en er waren", "al enkele ongevallen", "gemeld."]}, "Question", {q: "Gaat deze zin over verkeer?", hasCorrect: 0}],
    ["filler", "DashedSentence", {s: ["Hij verdenkt", "er zijn vriend", "van een overval", "op een bank", "te hebben gepleegd."]}, "Question", {q: "Denkt hij dat zijn vriend een misdaad heeft begaan?", hasCorrect: 0}],
    ["filler", "DashedSentence", {s: ["Ik was", "er verbaasd over", "dat hij", "voor wiskunde slaagde."]}, "Question", {q: "Hadden ze verwacht dat hij zou slagen?", hasCorrect: 0}],
    ["filler", "DashedSentence", {s: ["De dokter zei", "dat mijn tante", "niet te hard", "mag werken."]}, "Question", {q: "Gaat deze zin over iemands oom?", hasCorrect: 1}],
    ["filler", "DashedSentence", {s: ["Ik wil niet", "een medewerker", "die helemaal", "uit Groningen", "moet komen."]}, "Question", {q: "Staat in deze zin Rotterdam?", hasCorrect: 1}],
    ["filler", "DashedSentence", {s: ["Ik heb niet", "in een jeugdherberg", "gelogeerd maar in", "een pension."]}, "Question", {q: "Gaat deze zin over soorten accommodatie?", hasCorrect: 0}],
    ["filler", "DashedSentence", {s: ["In het Forum", "kan ze zich", "een stuk beter", "concentreren."]}, "Question", {q: "Concentreert ze zich in het ziekenhuis?", hasCorrect: 1}],
    ["filler", "DashedSentence", {s: ["Nu hoopt ze", "vooral dat", "het er", "de komende tijd", "rustig blijft."]}, "Question", {q: "Hoopt ze dat het stil zal zijn?", hasCorrect: 0}],
    ["filler", "DashedSentence", {s: ["Als alles", "volgens plan verloopt,", "duren de werkzaamheden", "zes weken."]}, "Question", {q: "Zal het werk een jaar duren?", hasCorrect: 1}],
    ["filler", "DashedSentence", {s: ["Hoewel de rechter", "besloot de kap", "voorlopig stil te leggen", "werd het bezwaar", "van de stichting", "eind vorige week verworpen."]}, "Question", {q: "Wordt in deze zin een politicus genoemd?", hasCorrect: 1}],
    ["filler", "DashedSentence", {s: ["Na meldingen", "van de wijkagent", "over het aantal overtredingen", "houdt de politie", "er nu vrijwel", "dagelijks controles."]}, "Question", {q: "Wordt in deze zin een agent genoemd?", hasCorrect: 0}],
    ["filler", "DashedSentence", {s: ["Veel studenten", "worden beboet voor", "het vasthouden", "van hun telefoon."]}, "Question", {q: "Gaat deze zin over drugsgebruik?", hasCorrect: 1}],
    ["filler", "DashedSentence", {s: ["Een van de laatste", "studentenblogs", "op de website", "van de universiteit", "ging over", "fietsen."]}, "Question", {q: "Was een van de laatste blogs over autorijden?", hasCorrect: 1}],
    ["filler", "DashedSentence", {s: ["Het is nu", "bijna een jaar", "geleden dat", "de aanbesteding", "van de klus", "vastliep door tussenkomst", "van de rechter."]}, "Question", {q: "Was er vertraging vanwege de rechter?", hasCorrect: 0}],
    ["filler", "DashedSentence", {s: ["Wel zijn er", "tot nu toe", "tweeduizend heipalen", "de grond", "in gegaan."]}, "Question", {q: "Heeft deze zin te maken met bakken?", hasCorrect: 1}],
    ["filler", "DashedSentence", {s: ["Het festival", "moet studenten", "en Stadjers", "de kans geven", "om kennis te maken", "met de vereniging."]}, "Question", {q: "Wordt er in deze zin gesproken over studenten?", hasCorrect: 0}],
    ["filler", "DashedSentence", {s: ["De ruimte", "is vooral tijdens", "de tentamenperiode", "heel snel vol."]}, "Question", {q: "Heeft deze zin te maken met computers?", hasCorrect: 1}],
    ["filler", "DashedSentence", {s: ["De bibliotheek", "heeft deze tentamenperiode", "door de verhuizing", "en renovatie", "minder studieplekken."]}, "Question", {q: "Betreft deze zin renovaties?", hasCorrect: 0}],
    ["filler", "DashedSentence", {s: ["Veel studenten", "wonen wel", "in de stad,", "maar staan niet", "ingeschreven", "bij de gemeente."]}, "Question", {q: "Zijn veel studenten niet ingeschreven?", hasCorrect: 0}],
    ["filler", "DashedSentence", {s: ["Het doel is", "om vijfhonderd gezinnen", "een kerstpakket", "te kunnen", "geven."]}, "Question", {q: "Heeft deze zin te maken met Pasen?", hasCorrect: 1}],
    ["filler", "DashedSentence", {s: ["Door studenten", "en ouderen", "samen", "te laten koken,", "kun je heel", "gericht eenzaamheid", "aanpakken,", "zo was", "het idee."]}, "Question", {q: "Wordt koken in deze zin genoemd?", hasCorrect: 0}],
    ["filler", "DashedSentence", {s: ["Tegenwoordig staan", "in Groningen", "jong en oud", "twee keer", "in de week", "boven de pannen", "om samen", "een lekkere soep", "te koken."]}, "Question", {q: "Staat in deze zin het woord brood?", hasCorrect: 1}],
    ["filler", "DashedSentence", {s: ["De nieuwe maatregelen", "volgen op", "de borden", "die in het voorjaar", "in de kantine zijn", "geplaatst."]}, "Question", {q: "Heeft deze zin te maken met voorschriften?", hasCorrect: 0}],
    ["filler", "DashedSentence", {s: ["Om het laptopverbod", "meer kracht bij", "te zetten,", "klinkt sinds", "vorige week", "een oproep", "in het Nederlands", "en in het Engels."]}, "Question", {q: "Staat er in deze zin Frans?", hasCorrect: 1}],

];