public class npcSpeech extends TimerTask{

  int n;

  // Character Speech
  private String[] quotes = {
    "Do you best!",
    "Never give up!"
  };

  // Return a string
  public void run() {
    Random rand  = new Random();
    n = rand.nextInt(quotes.length) 1;

    System.out.printf("Random Number: %d", n);
    System.out.printf("Quote Chosen: %s", quotes[n]);
  }

  // Timers
  Timer timer = new Timer();
  timer.shedule(new npcSpeech(), 0, 30000);

}
