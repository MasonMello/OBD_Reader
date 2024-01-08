// $(":input").inputmask();

var words = [],
    part,
    i = 0,
    offset = 0,
    len = 99,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;

var setUpWordsArray = function (){
  for(let i = 0; i < 100; i++){
    var randLetterNumber = Math.floor(Math.random() * 5)
    var randLetter;
    if (randLetterNumber == 0){
      randLetter = "P"
    }else if(randLetterNumber == 1){
      randLetter = "U"
    }else if(randLetterNumber == 2){
      randLetter = "P"
    }else{
      randLetter = "C"
    }
    var randNum = Math.floor(Math.random() * 10001)
    var ranNumNumbers = pad(randNum, 4)
    var finalString = randLetter + ranNumNumbers
    words.push(finalString)
  }
  wordflick()
}
var pad = function(num, size) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};



