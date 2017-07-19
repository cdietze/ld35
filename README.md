# William's Dilemma


William's Dilemma is game where you navigate a worm through strange rooms.
Along the way, William finds some stuff that makes him grow which allows him to reach farther and makes him stronger.
Having grown, he can take any form and shift his head around his body.

To navigate you have to use the keyboard - the arrow keys or WASD work for navigation, ESC brings up a menu.

Tech:
PlayN which is Java which cross-compiles into JavaScript for the HTML-version.
All sprites are drawn programmatically. For the background I used Gimp.
For sounds: Bfxr

## Links
[Entry to the #35 Ludum Dare compo](http://ludumdare.com/compo/ludum-dare-35/?uid=67399)

[Play it in your browser here](http://cdietze.github.io/ld35/)

## Build

To build it run `mvn clean install`.

To build and start the Java version run `mvn -Pjava clean install`.

To build and a start the HTML version - you can then view it on localhost:8080 - run `mvn -Phtml clean install`.
