// Module which filters out profane input by cutting off the input string at the profanity

class ProfanityFilter {
    constructor() {
        const swears = ["fuck", "shit", "arse", "bitch", "bastard", "crap", "cunt", "damn", "prick", "shag", "wank", "nut", "piss", "twat", 
                        "jack", "dumbass", "asshole", "badass", "halfass", "hardass", "smartass", "balls", "cum", "dammit", "jizz", "testicles", 
                        "cunnilingus", "fellatio", "scrotum", "boner", "blowjob", "sex", "slut", "dick", "cock", "tit", "boob", "vagina", 
                        "penis", "pussy", "bollocks", "porn", "orgasm", "nigg", "whore", "fag", "coon", "hellbent", "hellfire", "hell fire"];
        this.swearsReg = new RegExp(swears.join( "|" ), "i"); 
    }

    filter(inputStr) {
        var splitStr = inputStr.toLowerCase().split(/[^a-z]/i); 

        if (this.swearsReg.test(inputStr) || splitStr.includes("hell") || splitStr.includes("ass")) {
            var badWord = "";
            for (var i = 0; i < splitStr.length; i++) {
                if (this.swearsReg.test(splitStr[i]) || splitStr[i] === "hell" || splitStr[i] === "ass") {
                    badWord = splitStr[i];
                }
            }

            var wordReg = new RegExp(badWord, "i");
            while (wordReg.test(inputStr)) {
                inputStr = inputStr.slice(inputStr.search(wordReg) + badWord.length);
            }
            return inputStr;
        }
        else {
            return inputStr;
        }
    }
};

module.exports = ProfanityFilter;