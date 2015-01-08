var info = {
    "purpose" : "This document contains the list of acceptable questions to pose to Gulf Air trainees during AQP Oral Knowledge Validation events. It is an official Gulf Air training department supplemental handout. However, the information contained in this document is not intended to be a source of information relating to the conduct of any operation carried out by Gulf Air. The answers listed in this document are a representation of the information extracted from official Gulf Air operational documentation but may not necessarily be up-to-date with the latest revisions to those documents.",
    "policies" : "Each pilot must be able to correctly answer (not necessarily word for word) at least 80% of the questions posed by the facilitator during an oral knowledge validation session. During the allotted time period of the knowledge validation, the TRE-V is permitted to train the pilot to proficiency in any knowledge areas found to be deficient.<br>For complete policies and procedures related to Oral Knowledge Validations, see Gulf Air Operations Manual Part D (OM-D) Volume 2, <em>AQP Training Manual</em>, Chapter 4, Section 3.",
    "categories" : ["limitations","memory","systems"],
    "limitations" : "The limitation questions listed here represent all of the limitations that must be committed to memory. In addition, other limitations are listed on placards in the cockpit or listed on other operational documentation readily accessible to the flight crew. Moreover, Gulf Air pilots should be operationally familiar with the many other aircraft limitations listed in the Operating Limitations Chapter of the applicable FCOM 3.",
    "memory" : "The questions listed here represent the Quick Reference Handbook (QRH) and FCOM 3 immediate action procedures (Memory Items) that must be committed to memory. When asked these questions during a knowledge validation event, Gulf Air pilots must be able to immediately recite these procedures, in the proper sequence, without errors. In addition, there are many other flight operational procedures that must be carried out in a timely manner. Gulf Air pilots should be operationally familiar with the many other emergency and abnormal procedures listed in the applicable QRH.",
    "systems" : "The questions listed here represent a comprehensive sampling of aircraft systems questions that are considered suitable for the purposes of validating a pilot's general knowledge of the aircraft systems."
};

var systems = [
[
    {
        "category": "systems",
        "title" : "GENERAL",
        "question": "What is the wingspan of the aircraft?",
        "a320": "34.1 M",
        "a321": "A321 answere",
        "illustrations": ["http://placehold.it/350x200","http://placehold.it/250x200"]
    },
    {
        "question": "What is the minimum pavement width to perform a 180 degree turn?",
        "a320": "34 M<br>(45 M by NOTAM)",
        "a321": "",
        "illustrations": ["http://placehold.it/350x200","http://placehold.it/250x200"]
    }
],
[
    {
        "title" : "EFIS",
        "question": "What information from the ADR is displayed on the PFD?",
        "a320": "Barometric<br>Altitude<br>Speed Mach Number",
        "a321": "A321 answere",
        "illustrations": [] 
    },
    {
        "question": "What is the normal source for the Vertical Speed display?",
        "a320": "The ADIRS. However, if the inertial data is not available, barometric information from the ADRs replaces it automatically.",
        "a321": "",
        "illustrations": ["http://placehold.it/350x200","http://placehold.it/250x200"]
    },
    {
        "question": "What is the significance of an amber window box around the numerical value of the vertical speed indicator?",
        "a320": "This is an indication that the vertical speed indicator is using ADR barometric values instead of inertial data.",
        "a321": "A321 answere",
        "illustrations": ["http://placehold.it/350x200","http://placehold.it/250x200"] 
    },
    {
        "question": "What does the amber equals (=) sign on the airspeed tape indicate?",
        "a320": "This is the Vfe speed corresponding to the next flap lever position to be selected.",
        "a321": "",
        "illustrations": []
    },
    {
        "question": "When is the altitude alerting aural warning inhibited?",
        "a320": "1.When the slats are out and the gear is selected down<br>2.In approach after the aircraft capture the glide slope<br>3.When the landing gear is locked down",
        "a321": "A321 answere",
        "illustrations": [] 
    },
    {
        "question": "How can the altitude alert (C Chord) be cancelled?",
        "a320": "1.By selecting a new altitude<br>2.By pushing the EMER CANC pb on the ECAM control panel<br>3.By pressing either Master Warning push buttons",
        "a321": "",
        "illustrations": ["http://placehold.it/350x200","http://placehold.it/250x200"]
    },
    {
        "question": "What does Vls stand for?",
        "a320": "Minimum Selectable Airspeed",
        "a321": "A321 answere",
        "illustrations": [] 
    },
    {
        "question": "What is the significance of a flashing 'ILS' indication on the PFD?",
        "a320": "The ILS approach mode is armed and the ILS Scale push button on the FCU panel is not selected",
        "a321": "",
        "illustrations": ["http://placehold.it/350x200","http://placehold.it/250x200"]
    }
]
];

var limitations = [
[
    {
        "category": "limitations",
        "title" : "GENERAL limitations",
        "question": "What is the wingspan of the aircraft?",
        "a320": "34.1 M",
        "a321": "A321 answere",
        "illustrations": []
    },
    {
        "question": "What is the minimum pavement width to perform a 180 degree turn?",
        "a320": "34 M<br>(45 M by NOTAM)",
        "a321": "",
        "illustrations": ["http://placehold.it/350x200","http://placehold.it/250x200"]
    }
],
[
    {
        "title" : "EFIS limitations",
        "question": "What information from the ADR is displayed on the PFD?",
        "a320": "Barometric<br>Altitude<br>Speed Mach Number",
        "a321": "A321 answere",
        "illustrations": [] 
    },
    {
        "question": "What is the normal source for the Vertical Speed display?",
        "a320": "The ADIRS. However, if the inertial data is not available, barometric information from the ADRs replaces it automatically.",
        "a321": "",
        "illustrations": ["http://placehold.it/350x200","http://placehold.it/250x200"]
    },
    {
        "question": "What is the significance of an amber window box around the numerical value of the vertical speed indicator?",
        "a320": "This is an indication that the vertical speed indicator is using ADR barometric values instead of inertial data.",
        "a321": "A321 answere",
        "illustrations": ["http://placehold.it/350x200","http://placehold.it/250x200"] 
    },
    {
        "question": "What does the amber equals (=) sign on the airspeed tape indicate?",
        "a320": "This is the Vfe speed corresponding to the next flap lever position to be selected.",
        "a321": "",
        "illustrations": []
    },
    {
        "question": "When is the altitude alerting aural warning inhibited?",
        "a320": "1.When the slats are out and the gear is selected down<br>2.In approach after the aircraft capture the glide slope<br>3.When the landing gear is locked down",
        "a321": "A321 answere",
        "illustrations": ["http://placehold.it/350x200","http://placehold.it/250x200"] 
    },
    {
        "question": "How can the altitude alert (C Chord) be cancelled?",
        "a320": "1.By selecting a new altitude<br>2.By pushing the EMER CANC pb on the ECAM control panel<br>3.By pressing either Master Warning push buttons",
        "a321": "",
        "illustrations": []
    },
    {
        "question": "What does Vls stand for?",
        "a320": "Minimum Selectable Airspeed",
        "a321": "A321 answere",
        "illustrations": [] 
    },
    {
        "question": "What is the significance of a flashing 'ILS' indication on the PFD?",
        "a320": "The ILS approach mode is armed and the ILS Scale push button on the FCU panel is not selected",
        "a321": "",
        "illustrations": ["http://placehold.it/350x200","http://placehold.it/250x200"]
    }
]
]

