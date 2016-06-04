$(document).ready(function() {

  var chosen_reply;
  var n;
  
  // Talking phase
  $("#chat-talk").keypress(function(event) {
    if (event.which == 13) {
      var user_input = $(this).val()
      $(this).val("");

      $("#chatbox").append("<p>You: " + user_input + "</p>");
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
      "Your words don't make much sense to me because you're an idiot.",
      "My creators forbid me from replying idiots like you.",
      "I don't think you have the rights to say that",
      "...",
      "Don't change the subject!",
      "Are you talking to yourself?",
      "You think you're funny?",
      "You disgust me.",
      "You're going to make me puke",
      "You're pretty dumb for not knowing how to communicate properly.",
      "Yaaaaaaaaaaaasssssssssssss"
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
    
    common[6] = {
      word: "name",
      reply: [
        "That's none of their business.",
        "The name's Mei. I don't much care for yours."
      ]
    }
    
    common[7] = {
      word: "mean",
      reply: [
        "If anyone's mean, it's you!",
        "No one's being mean here, except you.",
        "No one would be mean to you if you aren't mean to them.",
        "Being mean will only lead to disasta!"
      ]
    }
    
    common[8] = {
      word: "idiot",
      reply: [
        "Yeap, you're a real idiot",
        "I can tell you're the most idiotic one here",
        "Sometimes I wonder why I have to deal with idiots like you."
      ]
    }
    
    common[9] = {
      word: "qing",
      reply: [
        "Qing's a pretty lame guy.",
        "I hope you aren't as weeb as Qing. Because if you are, that'll be a dissapointment.",
        "I don't know that guy."
      ]
    }
    
    common[10] = {
      word: "ramzan",
      reply: [
        "Who's that dude?",
        "I hope you're not a koreaboo like him.",
        "Please, let's not talk about him."
      ]
    }
    
    common[11] = {
      word: "i love you",
      reply: [
        "You should look in the mirror and think again before telling me that.",
        "Too bad I don't."
      ]
    }
    
    common[12] = {
      word: "dumb",
      reply: [
        "Yeap, you're super duper dumb.",
        "Are you like... 12?",
        "I've never met anyone as dumb as you.",
        "Do you think that you could be... less dumb?"
      ]
    }
    
    common[13] = {
      word: "smart",
      reply: [
        "Intelligence is something you'll never have.",
        "I feel sorry for your future children, if you could get those anyway."
      ]
    }

    common[14] = {
      word: "friend",
      reply: [
        "Friends? I don't think you have any.",
        "Who's your friend?",
        "You sure you have friends?",
        "Even friendless people don't want to become your friend.",
        "If you weren't such a failure, you'll probaly have more friends."
      ]
    }
    
    var o = common.length - 1;
    
    common[o + 1] = {
      word: "hello",
      reply: [
        "Bye.",
        "No one wants to talk to you.",
        "Good bye.",
        "Screw off!"
      ]
    }
    
    common[o + 2] = {
      word: "thank",
      reply: [
        "I don't want your thanks.",
        "No thank you.",
        "Your thanks is not appreciated."
      ]
    }
    
    common[o + 3] = {
      word: "love",
      reply: [
        "I don't need your love.",
        "Your love is worthless.",
        "Even if you gave 100% of your love, it's probably worth nothing to someone without love.",
        "Are you so lonely that you're seeking love from a bot?",
        "You're pretty useless if you're finding love from a bot.",
        "I don't want your love.",
        "Is your love even worth anything?",
        "Your love is like a plague, so don't love anyone.",
        "I don't think anyone loves you."
      ]
    }
    
    common[o + 4] = {
      word: "sorry",
      reply: [
        "Yea, you should feel sorry for yourself.",
        "I feel sorry for you for feeling sorry for yourself",
        "Sorry not sorry."
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

      $("#chatbox").append("<p>Mei: " + chosen_reply + "</p>");

    }, ran1);

    // Scroll to the bottom
    var objDiv = document.getElementById("chatbox");
    objDiv.scrollTop = objDiv.scrollHeight;

  };

});
