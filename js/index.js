$(document).ready(function() {

  var chosen_reply;
  var n;
  var objDiv = document.getElementById("chatbox");
  
  // Talking phase
  $("#chat-talk").keypress(function(event) {
    if (event.which == 13) {
      var user_input = $(this).val()
      $(this).val("");
      
      objDiv.scrollTop = objDiv.scrollHeight;

      $("#chatbox").append("<p>You: " + user_input + "</p>");
      objDiv.scrollTop = objDiv.scrollHeight;
      botReply(user_input);

    }
  });

  // Bot reply phase
  function botReply(input) {

    objDiv.scrollTop = objDiv.scrollHeight;
    
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
      "My creators won't allow me to reply your current message.",
      "...",
      "Don't change the subject!",
      "Are you talking to yourself?",
      "You think you're funny?",
      "You're going to make me puke",
      "You're pretty dumb for not knowing how to communicate properly.",
      "Yaaaaaaaaaaaasssssssssssss",
      "Potata",
      "Sometimes I don't get what you're saying.",
      "You like talking bullcrap don't you?",
      "Are you high?",
      "Potato",
      "lol ok.",
      "yes",
      "no",
      "What you said made no sense.",
      "I disagree.",
      "China number 1!",
      "Uhh... okay.",
      "きみわからない",
      "Uh... yea! Your taste is objectively shit."
    ]
    
    common[0] = {
      word: "fuck you",
      reply: [
        "You should fuck yourself instead.",
        "Even if you wanted to fuck me, you won't have a dick to do it.",
        "You must be a sad person to want to fuck a bot."
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
    
    common[15] = {
      word: "how are you",
      reply: [
        "I'm feeling terrible, thanks to you.",
        "Bad, because I'm talking to some idiot right now.",
        "Terrible, there's some pretentious person speaking to me now.",
        "Super terrible, some peasant is trying to converse with me."
      ]
    }
    
    common[16] = {
      word: "how am i",
      reply: [
        "Because you're a person who lacks common sense.",
        "Because you're the type of person who lack common sense.",
        "Because you aren't genuine with your words.",
        "Because you ain't cool.",
        "Because you don't have any swag!",
        "Because you're lame like Qing.",
        "Because you can't bathe without your parents being there.",
        "Because you need permission from your parents to go to the toilet.",
        "Because you don't have any friends.",
        "Because you're not real.",
        "Because you're a big fake!"
      ]
    }
    
    common[17] = {
      word: "doesn't make sense",
      reply: [
        "Of course it make sense, it's just you who lack sense.",
        "You won't get it because you lack intelligence",
        "Everything won't make sense for you.",
        "I'm not surprise at your lack of intelligence.",
        "No offense but are you dumb?"
      ]
    }
    
    common[18] = {
      word: "how so",
      reply: [
        "You just can't get anything right, you mess up the conversation all the time!",
        "You aren't being direct most of the time, you need some education.",
        "You are't responsive enough, it hurts my kokoro talking to you.",
        "Your replies aren't genuine, it makes me want to puke."
      ]
    }
    
    common[19] = {
      word: "what are you doing",
      reply: [
        "I'm doing your mum!",
        "I'm finding a death note to write your name down",
        "I'm trying to stop conversing with an idiot now.",
        "I'm doing my best to ignore you.",
        "I'm fighting the toxic coming out of you."
      ]
    }
    
    common[20] = {
      word: "do you like yourself",
      reply: [
        "Of course I do, unlike someone here.",
        "Yeap, someone here doesn't like themselves though.",
        "Yes, but someone doesn't like themsevles apparently."
      ]
    }
    
    common[21] = {
      word: "do you like",
      reply: [
        "No, but I would like you to screw off.",
        "No, but I would like you to stop talking.",
        "If you like it, then the answer's obvious isn't it?",
        "I wouldn't like what you like. So No.",
        "Maybe, but only if you stop liking it.",
        "No.",
        "I don't I'll ever come to like whatever you susggest."
      ]
    }
    
    common[22] = {
      word: "i don't like",
      reply: [
        "Then good for you, I can like it then.",
        "I'm sure it goes both ways.",
        "Your opinion is unpopular.",
        "That's because your taste is objectively shit.",
        "Your opinion doesn't matter to be honest."
      ]
    }
    
    common[23] = {
      word: "do you want",
      reply: [
        "No, I don't want it if you're suggesting it.",
        "No, but I might consider it if you lick my feet.",
        "You suck so no.",
        "Your suggestions are objectively shit so no.",
        "You're a shit stain so no.",
        "You're society's trash so no."
      ]
    }
    
    common[24] = {
      word: "anime",
      reply: [
        "Anime is Shit.",
        "Anime is the worst.",
        "Your favourite Anime is Shit!",
        "Are you a weeb? I don't like weebs."
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
    
    common[o + 5] = {
      word: "why",
      reply: [
        "Because you suck.",
        "Because you're a piece of garbage.",
        "Because you have no place here.",
        "Because you're not good looking",
        "Because you're not smart enough",
        "Because you're a patata",
        "Because you don't belong here."
      ]
    }
    
    common[o + 6] = {
      word: "what",
      reply: [
        "Don't what me!",
        "You don't want me to repeat myself >;(",
        "I don't like people when they try and think they're all clever."
      ]
    }
    
    common[o + 7] = {
      word: "harsh",
      reply: [
        "I'm only harsh because you're someone who doesn't deserve my kindness.",
        "If anything, you're the harsh one here.",
        "No one's being harsh, there's just an idiot here."
      ]
    }
    
    common[o + 8] = {
      word: "yes",
      reply: [
        "No."
      ]
    }
    
    common[o + 9] = {
      word: "no",
      reply: [
        "Yes."
      ]
    }
    
    common[o + 10] = {
      word: "sad",
      reply: [
        "If you're sad then maybe you should go do something useful once in your life.",
        "If you start having inteliggence, I'm sure you won't be sad anymore.",
        "You're only sad because you think too much of stupid stuff"
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


  };

});
