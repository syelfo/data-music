//values of A3 - A4 in Hertz from http://www.phy.mtu.edu/~suits/notefreqs.html
var scaleA = [220, 233.08, 246.94, 261.63, 277.18, 293.66, 311.13, 329.63, 349.23, 369.99, 392.0, 415.30, 440.00];

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
var initialFreq = scaleA[0];
//var initialVol = 0.001;
var volume = 0.01;

//var sampleData = [2, 3, 5, 6, 7, 1, 5, 3, 7, 9, 1, 11, 23, 5, 3, 3, 3, 5, 6, 8, 8, 9, 2, 1, 3, 5, 7, 7, 7];
/*var sampleData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var maxData = d3.max(sampleData);
console.log(maxData);*/

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
        .domain([0, d3.max(scaleA)]);
    console.log(d3.max(scaleA));

    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1)
        .domain(scaleA.map(function (d, i) {
            return i;
        }));

    svg.selectAll('rect')
        .data(scaleA)
        .enter()
        .append('rect')
        .attr("class", "bar")
        .attr("id", function (d, i) {
            return "r" + i;
        })
        .attr("x", function (d, i) {
            return x(i);
        })
        .attr("width", x.rangeBand())
        .attr("y", function (d) {
            return y(d);
        })
        .attr("height", function (d) {
            return height - y(d);
        });
}
drawGraphic();

function tone() {
    // oscillator.frequency.value = (sampleData[step] / maxData) * maxFreq;
    d3.selectAll(".selected")
        .classed("selected", false)

    oscillator.frequency.value = scaleA[step];
    d3.select("rect#r" + step)
        .classed("selected", true)

    if (step < scaleA.length - 1) {
        step = step + 1;
    } else {
        //return to the beginning
        step = 0;
    }
    console.log(step);
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