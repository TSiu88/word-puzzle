$(document).ready(function() {
  $("#form1").submit(function(event){
    var sentence = $("#firstSentence").val();
    // console.log(sentence);
    var arraySentence = sentence.split("");
    console.log(arraySentence);
    for ( var index = 0; index < arraySentence.length; index += 1){
      var lowerCaseLetter = arraySentence[index].toLowerCase();
      if( lowerCaseLetter === "a" || lowerCaseLetter === "e"|| lowerCaseLetter === "i" || lowerCaseLetter === "o" || lowerCaseLetter === "u") {
        arraySentence[index] = "-";
      }
      
    }
    var newSentence = arraySentence.join("");
    console.log(newSentence);

    $("#outputSentence").append(newSentence);
    $("#form1").hide();
    event.preventDefault();
  });
});