

function natoAlphabet(){
    let phrase = document.getElementById('usertext').value.toUpperCase().trim()
    let output = document.getElementById('natoText')
    let alphabet = {
        'A' : "Alpha",
        'B' :	'Bravo',
        'C' :	'Charlie',
        'D' :	'Delta',
        'E' :	'Echo',
        'F' :	'Foxtrot',
        'G' :	'Golf',
        'H' :	'Hotel',
        'I' :	'India',
        'J' :	'Juliette',
        'K' :	'Kilo',
        'L' :	'Lima',
        'M' :  'Mike',
        'N' :	'November',
        'O' :	'Oscar',
        'P' :	'Papa',
        'Q' :	'Quebec',
        'R' :   'Romeo',
        'S' :	'Sierra',
        'T' :	'Tango',
        'U' :	'Uniform',
        'V' :	'Victor',
        'W' :	'Whiskey',
        'X' :	'X-ray',
        'Y' :	'Yankee',
        'Z' :	'Zulu',
        ' ' :   "<br>"
    }

    natoSpelling = [];

    for(let i = 0; i < phrase.length; i++){
        natoSpelling += alphabet[phrase[i]];
        natoSpelling += ', ';
    }
    
    output.innerHTML = natoSpelling
    

    

}






