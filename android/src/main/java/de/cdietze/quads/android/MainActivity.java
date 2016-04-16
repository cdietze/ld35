package de.cdietze.quads.android;

import playn.android.GameActivity;

import de.cdietze.quads.core.MainGame;

public class MainActivity extends GameActivity {

  @Override public void main () {
    new MainGame(platform());
  }
}
