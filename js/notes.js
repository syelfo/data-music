//Hertz source: Michigan Tech http://www.phy.mtu.edu/~suits/notefreqs.html
var notes = [
  {
    "note_num": 1,
    "hertz": 16.35,
    "octave": 0,
    "note_flat": "C",
    "note_sharp": "C"
  },
  {
    "note_num": 2,
    "hertz": 17.32,
    "octave": 0,
    "note_flat": "Db",
    "note_sharp": "C#"
  },
  {
    "note_num": 3,
    "hertz": 18.35,
    "octave": 0,
    "note_flat": "D",
    "note_sharp": "D"
  },
  {
    "note_num": 4,
    "hertz": 19.45,
    "octave": 0,
    "note_flat": "Eb",
    "note_sharp": "D#"
  },
  {
    "note_num": 5,
    "hertz": 20.6,
    "octave": 0,
    "note_flat": "E",
    "note_sharp": "E"
  },
  {
    "note_num": 6,
    "hertz": 21.83,
    "octave": 0,
    "note_flat": "F",
    "note_sharp": "F"
  },
  {
    "note_num": 7,
    "hertz": 23.12,
    "octave": 0,
    "note_flat": "Gb",
    "note_sharp": "F#"
  },
  {
    "note_num": 8,
    "hertz": 24.5,
    "octave": 0,
    "note_flat": "G",
    "note_sharp": "G"
  },
  {
    "note_num": 9,
    "hertz": 25.96,
    "octave": 0,
    "note_flat": "Ab",
    "note_sharp": "G#"
  },
  {
    "note_num": 10,
    "hertz": 27.5,
    "octave": 0,
    "note_flat": "A",
    "note_sharp": "A"
  },
  {
    "note_num": 11,
    "hertz": 29.14,
    "octave": 0,
    "note_flat": "Bb",
    "note_sharp": "A#"
  },
  {
    "note_num": 12,
    "hertz": 30.87,
    "octave": 0,
    "note_flat": "B",
    "note_sharp": "B"
  },
  {
    "note_num": 13,
    "hertz": 32.7,
    "octave": 1,
    "note_flat": "C",
    "note_sharp": "C"
  },
  {
    "note_num": 14,
    "hertz": 34.65,
    "octave": 1,
    "note_flat": "Db",
    "note_sharp": "C#"
  },
  {
    "note_num": 15,
    "hertz": 36.71,
    "octave": 1,
    "note_flat": "D",
    "note_sharp": "D"
  },
  {
    "note_num": 16,
    "hertz": 38.89,
    "octave": 1,
    "note_flat": "Eb",
    "note_sharp": "D#"
  },
  {
    "note_num": 17,
    "hertz": 41.2,
    "octave": 1,
    "note_flat": "E",
    "note_sharp": "E"
  },
  {
    "note_num": 18,
    "hertz": 43.65,
    "octave": 1,
    "note_flat": "F",
    "note_sharp": "F"
  },
  {
    "note_num": 19,
    "hertz": 46.25,
    "octave": 1,
    "note_flat": "Gb",
    "note_sharp": "F#"
  },
  {
    "note_num": 20,
    "hertz": 49,
    "octave": 1,
    "note_flat": "G",
    "note_sharp": "G"
  },
  {
    "note_num": 21,
    "hertz": 51.91,
    "octave": 1,
    "note_flat": "Ab",
    "note_sharp": "G#"
  },
  {
    "note_num": 22,
    "hertz": 55,
    "octave": 1,
    "note_flat": "A",
    "note_sharp": "A"
  },
  {
    "note_num": 23,
    "hertz": 58.27,
    "octave": 1,
    "note_flat": "Bb",
    "note_sharp": "A#"
  },
  {
    "note_num": 24,
    "hertz": 61.74,
    "octave": 1,
    "note_flat": "B",
    "note_sharp": "B"
  },
  {
    "note_num": 25,
    "hertz": 65.41,
    "octave": 2,
    "note_flat": "C",
    "note_sharp": "C"
  },
  {
    "note_num": 26,
    "hertz": 69.3,
    "octave": 2,
    "note_flat": "Db",
    "note_sharp": "C#"
  },
  {
    "note_num": 27,
    "hertz": 73.42,
    "octave": 2,
    "note_flat": "D",
    "note_sharp": "D"
  },
  {
    "note_num": 28,
    "hertz": 77.78,
    "octave": 2,
    "note_flat": "Eb",
    "note_sharp": "D#"
  },
  {
    "note_num": 29,
    "hertz": 82.41,
    "octave": 2,
    "note_flat": "E",
    "note_sharp": "E"
  },
  {
    "note_num": 30,
    "hertz": 87.31,
    "octave": 2,
    "note_flat": "F",
    "note_sharp": "F"
  },
  {
    "note_num": 31,
    "hertz": 92.5,
    "octave": 2,
    "note_flat": "Gb",
    "note_sharp": "F#"
  },
  {
    "note_num": 32,
    "hertz": 98,
    "octave": 2,
    "note_flat": "G",
    "note_sharp": "G"
  },
  {
    "note_num": 33,
    "hertz": 103.83,
    "octave": 2,
    "note_flat": "Ab",
    "note_sharp": "G#"
  },
  {
    "note_num": 34,
    "hertz": 110,
    "octave": 2,
    "note_flat": "A",
    "note_sharp": "A"
  },
  {
    "note_num": 35,
    "hertz": 116.54,
    "octave": 2,
    "note_flat": "Bb",
    "note_sharp": "A#"
  },
  {
    "note_num": 36,
    "hertz": 123.47,
    "octave": 2,
    "note_flat": "B",
    "note_sharp": "B"
  },
  {
    "note_num": 37,
    "hertz": 130.81,
    "octave": 3,
    "note_flat": "C",
    "note_sharp": "C"
  },
  {
    "note_num": 38,
    "hertz": 138.59,
    "octave": 3,
    "note_flat": "Db",
    "note_sharp": "C#"
  },
  {
    "note_num": 39,
    "hertz": 146.83,
    "octave": 3,
    "note_flat": "D",
    "note_sharp": "D"
  },
  {
    "note_num": 40,
    "hertz": 155.56,
    "octave": 3,
    "note_flat": "Eb",
    "note_sharp": "D#"
  },
  {
    "note_num": 41,
    "hertz": 164.81,
    "octave": 3,
    "note_flat": "E",
    "note_sharp": "E"
  },
  {
    "note_num": 42,
    "hertz": 174.61,
    "octave": 3,
    "note_flat": "F",
    "note_sharp": "F"
  },
  {
    "note_num": 43,
    "hertz": 185,
    "octave": 3,
    "note_flat": "Gb",
    "note_sharp": "F#"
  },
  {
    "note_num": 44,
    "hertz": 196,
    "octave": 3,
    "note_flat": "G",
    "note_sharp": "G"
  },
  {
    "note_num": 45,
    "hertz": 207.65,
    "octave": 3,
    "note_flat": "Ab",
    "note_sharp": "G#"
  },
  {
    "note_num": 46,
    "hertz": 220,
    "octave": 3,
    "note_flat": "A",
    "note_sharp": "A"
  },
  {
    "note_num": 47,
    "hertz": 233.08,
    "octave": 3,
    "note_flat": "Bb",
    "note_sharp": "A#"
  },
  {
    "note_num": 48,
    "hertz": 246.94,
    "octave": 3,
    "note_flat": "B",
    "note_sharp": "B"
  },
  {
    "note_num": 49,
    "hertz": 261.63,
    "octave": 4,
    "note_flat": "C",
    "note_sharp": "C"
  },
  {
    "note_num": 50,
    "hertz": 277.18,
    "octave": 4,
    "note_flat": "Db",
    "note_sharp": "C#"
  },
  {
    "note_num": 51,
    "hertz": 293.66,
    "octave": 4,
    "note_flat": "D",
    "note_sharp": "D"
  },
  {
    "note_num": 52,
    "hertz": 311.13,
    "octave": 4,
    "note_flat": "Eb",
    "note_sharp": "D#"
  },
  {
    "note_num": 53,
    "hertz": 329.63,
    "octave": 4,
    "note_flat": "E",
    "note_sharp": "E"
  },
  {
    "note_num": 54,
    "hertz": 349.23,
    "octave": 4,
    "note_flat": "F",
    "note_sharp": "F"
  },
  {
    "note_num": 55,
    "hertz": 369.99,
    "octave": 4,
    "note_flat": "Gb",
    "note_sharp": "F#"
  },
  {
    "note_num": 56,
    "hertz": 392,
    "octave": 4,
    "note_flat": "G",
    "note_sharp": "G"
  },
  {
    "note_num": 57,
    "hertz": 415.3,
    "octave": 4,
    "note_flat": "Ab",
    "note_sharp": "G#"
  },
  {
    "note_num": 58,
    "hertz": 440,
    "octave": 4,
    "note_flat": "A",
    "note_sharp": "A"
  },
  {
    "note_num": 59,
    "hertz": 466.16,
    "octave": 4,
    "note_flat": "Bb",
    "note_sharp": "A#"
  },
  {
    "note_num": 60,
    "hertz": 493.88,
    "octave": 4,
    "note_flat": "B",
    "note_sharp": "B"
  },
  {
    "note_num": 61,
    "hertz": 523.25,
    "octave": 5,
    "note_flat": "C",
    "note_sharp": "C"
  },
  {
    "note_num": 62,
    "hertz": 554.37,
    "octave": 5,
    "note_flat": "Db",
    "note_sharp": "C#"
  },
  {
    "note_num": 63,
    "hertz": 587.33,
    "octave": 5,
    "note_flat": "D",
    "note_sharp": "D"
  },
  {
    "note_num": 64,
    "hertz": 622.25,
    "octave": 5,
    "note_flat": "Eb",
    "note_sharp": "D#"
  },
  {
    "note_num": 65,
    "hertz": 659.25,
    "octave": 5,
    "note_flat": "E",
    "note_sharp": "E"
  },
  {
    "note_num": 66,
    "hertz": 698.46,
    "octave": 5,
    "note_flat": "F",
    "note_sharp": "F"
  },
  {
    "note_num": 67,
    "hertz": 739.99,
    "octave": 5,
    "note_flat": "Gb",
    "note_sharp": "F#"
  },
  {
    "note_num": 68,
    "hertz": 783.99,
    "octave": 5,
    "note_flat": "G",
    "note_sharp": "G"
  },
  {
    "note_num": 69,
    "hertz": 830.61,
    "octave": 5,
    "note_flat": "Ab",
    "note_sharp": "G#"
  },
  {
    "note_num": 70,
    "hertz": 880,
    "octave": 5,
    "note_flat": "A",
    "note_sharp": "A"
  },
  {
    "note_num": 71,
    "hertz": 932.33,
    "octave": 5,
    "note_flat": "Bb",
    "note_sharp": "A#"
  },
  {
    "note_num": 72,
    "hertz": 987.77,
    "octave": 5,
    "note_flat": "B",
    "note_sharp": "B"
  },
  {
    "note_num": 73,
    "hertz": 1046.5,
    "octave": 6,
    "note_flat": "C",
    "note_sharp": "C"
  },
  {
    "note_num": 74,
    "hertz": 1108.73,
    "octave": 6,
    "note_flat": "Db",
    "note_sharp": "C#"
  },
  {
    "note_num": 75,
    "hertz": 1174.66,
    "octave": 6,
    "note_flat": "D",
    "note_sharp": "D"
  },
  {
    "note_num": 76,
    "hertz": 1244.51,
    "octave": 6,
    "note_flat": "Eb",
    "note_sharp": "D#"
  },
  {
    "note_num": 77,
    "hertz": 1318.51,
    "octave": 6,
    "note_flat": "E",
    "note_sharp": "E"
  },
  {
    "note_num": 78,
    "hertz": 1396.91,
    "octave": 6,
    "note_flat": "F",
    "note_sharp": "F"
  },
  {
    "note_num": 79,
    "hertz": 1479.98,
    "octave": 6,
    "note_flat": "Gb",
    "note_sharp": "F#"
  },
  {
    "note_num": 80,
    "hertz": 1567.98,
    "octave": 6,
    "note_flat": "G",
    "note_sharp": "G"
  },
  {
    "note_num": 81,
    "hertz": 1661.22,
    "octave": 6,
    "note_flat": "Ab",
    "note_sharp": "G#"
  },
  {
    "note_num": 82,
    "hertz": 1760,
    "octave": 6,
    "note_flat": "A",
    "note_sharp": "A"
  },
  {
    "note_num": 83,
    "hertz": 1864.66,
    "octave": 6,
    "note_flat": "Bb",
    "note_sharp": "A#"
  },
  {
    "note_num": 84,
    "hertz": 1975.53,
    "octave": 6,
    "note_flat": "B",
    "note_sharp": "B"
  },
  {
    "note_num": 85,
    "hertz": 2093,
    "octave": 7,
    "note_flat": "C",
    "note_sharp": "C"
  },
  {
    "note_num": 86,
    "hertz": 2217.46,
    "octave": 7,
    "note_flat": "Db",
    "note_sharp": "C#"
  },
  {
    "note_num": 87,
    "hertz": 2349.32,
    "octave": 7,
    "note_flat": "D",
    "note_sharp": "D"
  },
  {
    "note_num": 88,
    "hertz": 2489.02,
    "octave": 7,
    "note_flat": "Eb",
    "note_sharp": "D#"
  },
  {
    "note_num": 89,
    "hertz": 2637.02,
    "octave": 7,
    "note_flat": "E",
    "note_sharp": "E"
  },
  {
    "note_num": 90,
    "hertz": 2793.83,
    "octave": 7,
    "note_flat": "F",
    "note_sharp": "F"
  },
  {
    "note_num": 91,
    "hertz": 2959.96,
    "octave": 7,
    "note_flat": "Gb",
    "note_sharp": "F#"
  },
  {
    "note_num": 92,
    "hertz": 3135.96,
    "octave": 7,
    "note_flat": "G",
    "note_sharp": "G"
  },
  {
    "note_num": 93,
    "hertz": 3322.44,
    "octave": 7,
    "note_flat": "Ab",
    "note_sharp": "G#"
  },
  {
    "note_num": 94,
    "hertz": 3520,
    "octave": 7,
    "note_flat": "A",
    "note_sharp": "A"
  },
  {
    "note_num": 95,
    "hertz": 3729.31,
    "octave": 7,
    "note_flat": "Bb",
    "note_sharp": "A#"
  },
  {
    "note_num": 96,
    "hertz": 3951.07,
    "octave": 7,
    "note_flat": "B",
    "note_sharp": "B"
  },
  {
    "note_num": 97,
    "hertz": 4186.01,
    "octave": 8,
    "note_flat": "C",
    "note_sharp": "C"
  },
  {
    "note_num": 98,
    "hertz": 4434.92,
    "octave": 8,
    "note_flat": "Db",
    "note_sharp": "C#"
  },
  {
    "note_num": 99,
    "hertz": 4698.63,
    "octave": 8,
    "note_flat": "D",
    "note_sharp": "D"
  },
  {
    "note_num": 100,
    "hertz": 4978.03,
    "octave": 8,
    "note_flat": "Eb",
    "note_sharp": "D#"
  },
  {
    "note_num": 101,
    "hertz": 5274.04,
    "octave": 8,
    "note_flat": "E",
    "note_sharp": "E"
  },
  {
    "note_num": 102,
    "hertz": 5587.65,
    "octave": 8,
    "note_flat": "F",
    "note_sharp": "F"
  },
  {
    "note_num": 103,
    "hertz": 5919.91,
    "octave": 8,
    "note_flat": "Gb",
    "note_sharp": "F#"
  },
  {
    "note_num": 104,
    "hertz": 6271.93,
    "octave": 8,
    "note_flat": "G",
    "note_sharp": "G"
  },
  {
    "note_num": 105,
    "hertz": 6644.88,
    "octave": 8,
    "note_flat": "Ab",
    "note_sharp": "G#"
  },
  {
    "note_num": 106,
    "hertz": 7040,
    "octave": 8,
    "note_flat": "A",
    "note_sharp": "A"
  },
  {
    "note_num": 107,
    "hertz": 7458.62,
    "octave": 8,
    "note_flat": "Bb",
    "note_sharp": "A#"
  },
  {
    "note_num": 108,
    "hertz": 7902.13,
    "octave": 8,
    "note_flat": "B",
    "note_sharp": "B"
  }
];