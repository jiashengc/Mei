$(document).ready(function() {

  var chosen_reply;
  var n;
  
  // Talking phase
  $("#chat-talk").keypress(function(event) {
    if (event.which == 13) {
      var user_input = $(this).val()
      $(this).val("");

      $(".chatbox").append("<p>You: " + user_input + "</p>");
      botReply(user_input);

    }
  });

  // Bot reply phase
  function botReply(input) {

    var common = [];

    var uncommon = [
      "K",
      "Okay",
      "I don't really care",
      "Sure",
      "ok",
      "You're a real pain to talk to you know that?",
      "I don't really care about your opinion.",
      "?",
      "Why do you lie so much?"
    ]
    
    common[0] = {
      word: "anime",
      reply: [
        "Anime is Shit.",
        "Anime is the worst.",
        "Your favourite Anime is Shit!",
        "Are you a weeb? I don't like weebs."
      ]
    }

    common[1] = {
      word: "manga",
      reply: [
        "Manga is Shit.",
        "Manga is Chinese comics isn't it?",
        "You must be living a sad life for reading that."
      ]
    }
    
    common[2] = {
      word: "waifu",
      reply: [
        "No, your waifu isn't real.",
        "Maybe you should get a life?",
        "Your waifu is dead and fake."
      ]
    }
    
    common[3] = {
      word: "real",
      reply: [
        "No, you're not real.",
        "Even if you were real, I don't think you belong in this world",
        "Yeap, you don't have any real friends."
      ]
    }
    
    common[4] = {
      word: "fake",
      reply: [
        "Yeap, you are a big fake.",
        "Yea I know, you're the biggest fake in the world.",
        "Your parents are fake.",
        "Your memories are fake.",
        "Your whole life is fake.",
        "Your friends are fake."
      ]
    }
    
    common[5] = {
      word: "lie",
      reply: [
        "You're the liar."
      ]
    }
    
    // Extra time for the bot to reply
    var ran1 = Math.random() * (2000 - 500 + 1) + 500;

    // Change the input to lower case
    input = input.toLowerCase();

    for (var i = 0; i < common.length; i += 1) {
      if (input.indexOf(common[i].word) >= 0) {
        n = Math.floor(Math.random() * (common[i].reply.length));
        chosen_reply = common[i].reply[n];
        break;
      }
      else if (i == common.length - 1) {
        n = Math.floor(Math.random() * (uncommon.length));
        chosen_reply = uncommon[n];
        break;
      }
      else {
        chosen_reply = "error";
      }
    }

    // Reply
    setTimeout(function() {

      $(".chatbox").append("<p>Mei: " + chosen_reply + "</p>");

    }, ran1);

    // Scroll to the bottom
    $("#chat-box").scrollTo('100%');

  };

});
