var SpeechRecognition = window.webkitSpeechRecognition; 

var recognition = new SpeechRecognition();

function record() {
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();  
}

recognition.onresult = function(event) {
    console.log(event); 
    var content = event.results[0][0].transcript; 
    console.log(content); 
    document.getElementById("textbox").innerHTML = content;
    if (content == "take my selfie") {

        console.log("Taking selfie...")
        talk();   
    }   
}

function talk() {
    var synth = window.speechSynthesis;


    Webcam.attach("#camera"); 

    setTimeout(function() { 
        
        image_id = "selfie1";
        speak_data = "Taking your selfies in 5 seconds...";
        take_snapshot();
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
       
    }, 5000);
    setTimeout(function() { 
       
    }, 5000);

    setTimeout(function() { 
        
        image_id = "selfie2";
        take_snapshot();
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
       
    }, 5000);

    setTimeout(function() { 
       
    }, 5000);


    setTimeout(function() { 
        
        image_id = "selfie3";
        take_snapshot();
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
       
    }, 5000);

    setTimeout(function() { 
       
    }, 5000);

}

Webcam.set({
    width:350,
    height:250,
    image_format:'png', 
    png_quality:90
});

function take_snapshot() {

    console.log(image_id); 

    Webcam.snap(function(data_uri) {
        if(image_id == "selfie1"){
        document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'">';
        }

        if(image_id == "selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie1" src="'+data_uri+'">';
        }

        if(image_id == "selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie1" src="'+data_uri+'">';
        }

    });
}

