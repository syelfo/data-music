//Hertz values of notes saved in notes.js
var notesUse = notes.filter(function (d) {
    return d.octave >= 3 & d.octave <= 5;
});

//position of note in array to be used for data maping
notesUse.forEach(function (d, i) {
    d.scale_num = +i;
});

// create web audio api context
var audioCtx = new(window.AudioContext || window.webkitAudioContext)();

// create Oscillator and gain node
var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();

// connect oscillator to gain node to speakers
oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);
var maxFreq = 4000;
var maxVol = 0.05;
var initialFreq = notesUse[0]["hertz"];
//var initialVol = 0.001;
var volume = 0.01;

// set options for the oscillator
function setOscillator() {
    oscillator.type = 'square';
    oscillator.frequency.value = initialFreq; // value in hertz
    //oscillator.detune.value = 100; // value in cents
    oscillator.onended = function () {
        console.log('Your tone has now stopped playing!');
    }
    gainNode.gain.value = volume;

}
setOscillator();

//generate random data
var sampleData = [];
for (i = 0; i < 20; i++) {
    sampleData.push({
        position: i,
        value: Math.random() * 35
    });
};

var dataMax = d3.max(sampleData, function (d) {
    return d.value;
});
var dataMin = d3.min(sampleData, function (d) {
    return d.value;
});
var noteMin = 0;
var noteMax = notesUse.length - 1;
var dist = noteMax / (dataMax - dataMin);
console.log(dist);

//map data to notes
sampleData.forEach(function (d, i) {
    //need to qualify, ceiling is noteMax
    d.scale_num = Math.min(Math.round(d.value * dist), noteMax);
    d.hertz = notesUse[d.scale_num]["hertz"];
    d.note_sharp = notesUse[d.scale_num]["note_sharp"]

});
var step = 0;

function drawGraphic() {
    var margin = {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10
    };

    var barPadding = 1;

    var width = 1000 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    var svg = d3.select("#graphic").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var y = d3.scale.linear()
        .range([height, 0])
        .domain([0, d3.max(sampleData, function (d) {
            return d.value;
        })])

    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1)
        .domain(sampleData.map(function (d) {
            return d.position;
        }));

    svg.selectAll('rect')
        .data(sampleData)
        .enter()
        .append('rect')
        .attr("class", "bar")
        .attr("id", function (d) {
            return "r" + d.position;
        })
        .attr("x", function (d) {
            return x(d.position);
        })
        .attr("width", x.rangeBand())
        .attr("y", function (d) {
            return y(d.value);
        })
        .attr("height", function (d) {
            return height - y(d.value);
        });

    var labels = svg.selectAll(".label")
        .data(sampleData)
        .enter()
        .append("g")
        .attr("class", "label");

    labels.append("text")
        .attr("x", function (d, i) {
            return x(i) + x.rangeBand() / 2;
        })
        .attr("y", height - 5)
        .attr("text-anchor", "middle")
        .text(function (d) {
            return Math.round(d.value);
        });
    
    labels.append("text")
        .attr("x", function (d, i) {
            return x(i) + x.rangeBand() / 2;
        })
        .attr("y", height - 18)
        .attr("text-anchor", "middle")
        .text(function (d) {
            return d.note_sharp;
        });
}
drawGraphic();

function tone() {
    // oscillator.frequency.value = (sampleData[step] / maxData) * maxFreq;
    d3.selectAll(".selected")
        .classed("selected", false)

    oscillator.frequency.value = sampleData[step]["hertz"];
    d3.select("rect#r" + step)
        .classed("selected", true)

    if (step < sampleData.length - 1) {
        step = step + 1;
    } else {
        //return to the beginning
        step = 0;
    }
    //gainNode.gain.value = (step / maxData) * maxVol;
}

$('#play').click(function () {
    console.log("play");
    oscillator.start();
    myTimer = setInterval(function () {
        tone()
    }, 400);

});

function stopSound() {
    clearInterval(myTimer);
}

//stop audio
$('#pause').click(function () {
    console.log("pause");
    stopSound();
    //gainNode.gain.value = 0;
    oscillator.stop();
});