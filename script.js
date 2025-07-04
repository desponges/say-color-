const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = 'en-US';
rec.continuous = true;

rec.onresult = function (e) {

  const acceptedColors = [
    'red',
    'blue',
    'green',
    'yellow',
    'pink',
    'brown',
    'purple',
    'orange',
    'black',
    'white',
  ]
  for (let i = e.resultIndex; i < e.results.length; i++) {
    const script = e.results[i][0].transcript.toLowerCase().trim();

    // let sayBackground = 

    if (acceptedColors.includes(script)) {
      document.body.style.backgroundColor = script;
    } else {
      alert('Please say a color')
    }

    if (document.body.style.backgroundColor = black) {
      document.getElementById('say-text').style.color = 'white';
    }
  }
};

rec.start();
