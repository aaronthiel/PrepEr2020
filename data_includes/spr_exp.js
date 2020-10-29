var shuffleSequence = seq("setcounter", "intro", 
                          sepWith("sepprac", seq("prac")), "presepA", "dummysep", 
                          sepWith("sepexp", rshuffle(startsWith("prepEr"), startsWith("filler"))));
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
 ro[i].push(new DynamicElement(
 "Message",
 { html: "<p>Neem een korte pauze. Het experiment wordt over 10 seconden voortgezet.</p>", transfer: 10000 },
 true
 ));
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
//   ["exit", "Form", {consentRequired: false, html: {include: "exit.html" }} ],
   ["sepprac", "Separator", {transfer: 1000, errorMessage: "Verkeerd antwoord. Even geduld aub.x"}],
   
   ["sepexp", "Separator", {transfer: 500}],
   
   ["break", "Message", {
       html: { include: "break.html" },
       transfer: "keypress"
    } ],
    

    
    // Practice
   
    ["prac", "DashedSentence", {s: ["Dit is", "een oefenzin", "om u aan de presentatiemethode", "te laten wennen"]}, "Question",  {q:"Was die zin gemakkelijk?"}, Separator, { }],
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
["prac", "DashedSentence", {s: ["Dylan has been", "playing the guitar", "since he was six.", "His brother,", "Jay,", "is good at the piano.", "They are both", "very gifted musicians.", "Their parents", "have always been", "very proud of them."]}, "Question", {hasCorrect: 1, q:"Does Jay play the guitar?"}],   
    
["prac", Message, {consentRequired: false, transfer: "keypress",
                     html: ["div",
                           ["p", "That's all the practice! When you're ready to begin the experiment, press any button to move ahead. REMEMBER: it will last approximately 80 minutes, and will require your full attention throughout that period. Thank you for your help!"]
                           ]}],


["presepA", Separator, {transfer: 3000, normalMessage: "Houd uw handen in positie en maak u klaar om te beginnen!" }],
["dummysep", Separator, {transfer: 10, normalMessage: ""}],
["dummysep", Separator, {transfer: 10, normalMessage: ""}],
["dummysep", Separator, {transfer: 10, normalMessage: ""}],
["dummysep", Separator, {transfer: 10, normalMessage: ""}],
["dummysep", Separator, {transfer: 10, normalMessage: ""}],
["dummysep", Separator, {transfer: 10, normalMessage: ""}],
["dummysep", Separator, {transfer: 10, normalMessage: ""}],
["dummysep", Separator, {transfer: 10, normalMessage: ""}],
["dummysep", Separator, {transfer: 10, normalMessage: ""}],
["dummysep", Separator, {transfer: 10, normalMessage: ""}],

//Stimuli List
[["prepEr.NU",1], "DashedSentence", {s: ["Het nieuws", "is op tv.", "Ik probeer nu", "met mijn oude moeder", "naar", "het nieuws", "te kijken."]}, "Question", {q: "Wordt iemands moeder in de zin genoemd?", hasCorrect: 0}],
[["prepEr.ER",1], "DashedSentence", {s: ["Het nieuws", "is op tv.", "Ik probeerer", "met mijn oude moeder", "naar", "te kijken."]}, "Question", {q: "Wordt iemands vader in de zin genoemd?", hasCorrect: 1}],
[["prepEr.NU",2], "DashedSentence", {s: ["Klassiek is", "zijn favoriete muziek.", "Hij wil nu", "in de auto altijd", "naar", "klassiek luisteren", "op hoog volume."]}, "Question", {q: "Gaat deze zin over rockmuziek?", hasCorrect: 1}],
[["prepEr.ER",2], "DashedSentence", {s: ["Klassiek is", "zijn favoriete muziek.", "Hij wil er", "in de auto altijd", "naar", "luisteren", "op hoog volume."]}, "Question", {q: "Gaat deze zin over klassieke muziek?", hasCorrect: 0}],
[["prepEr.NU",3], "DashedSentence", {s: ["Haar autosleutel", "is rood.", "Ze moet nu", "’s ochtends vaak", "naar", "haar autosleutel", "zoeken als ze weggaat."]}, "Question", {q: "Zijn de autosleutels rood?", hasCorrect: 0}],
[["prepEr.ER",3], "DashedSentence", {s: ["Haar autosleutel", "is rood.", "Ze moet er", "’s ochtends vaak", "naar", "zoeken als ze weggaat."]}, "Question", {q: "Zijn de autosleutels blauw?", hasCorrect: 1}],
[["prepEr.NU",4], "DashedSentence", {s: ["Het postkantoor", "is open.", "U kunt nu", "elke dag pakketten", "naar", "het postkantoor", "brengen tot sluitingstijd."]}, "Question", {q: "Gaat deze zin over openingstijden?", hasCorrect: 0}],
[["prepEr.ER",4], "DashedSentence", {s: ["Het postkantoor", "is open.", "U kunt er", "elke dag pakketten", "naar", "brengen tot sluitingstijd."]}, "Question", {q: "Is het postkantoor open?", hasCorrect: 0}],
[["prepEr.NU",5], "DashedSentence", {s: ["Deze film", "lijkt goed.", "Hij wil nu", "met zijn vrienden", "naar", "deze film kijken", "in de bioscoop."]}, "Question", {q: "Gaat deze zin over televisie?", hasCorrect: 1}],
[["prepEr.ER",5], "DashedSentence", {s: ["Deze film", "lijkt goed.", "Hij wil er", "met zijn vrienden", "naar", "kijken in de bioscoop."]}, "Question", {q: "Wil hij de film met zijn moeder zien?", hasCorrect: 1}],
[["prepEr.NU",6], "DashedSentence", {s: ["De kat", "is verlegen.", "We moeten nu", "vaak allemaal", "naar", "de kat zoeken", "nadat mensen", "weer zijn vertrokken."]}, "Question", {q: "Gaat deze zin over een hond?", hasCorrect: 1}],
[["prepEr.ER",6], "DashedSentence", {s: ["De kat", "is verlegen.", "We moeten er", "vaak allemaal", "naar", "zoeken nadat mensen", "weer zijn vertrokken."]}, "Question", {q: "Gaat deze zin over een kat?", hasCorrect: 0}],
 
//Fillers
[["filler",16], "DashedSentence", {s: ["Het huis van mijn vader", "is vlakbij.", "Ik probeer nu", "twee keer per maand", "naar", "het huis", "van mijn vader", "te gaan."]}, "Question", {q: "Is any NGO mentioned in the sentence?", hasCorrect: 0}],];
