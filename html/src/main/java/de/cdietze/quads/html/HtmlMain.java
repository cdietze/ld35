package de.cdietze.quads.html;

import com.google.gwt.core.client.EntryPoint;
import playn.html.HtmlPlatform;
import de.cdietze.quads.core.MainGame;

public class HtmlMain implements EntryPoint {

  @Override public void onModuleLoad () {
    HtmlPlatform.Config config = new HtmlPlatform.Config();
    // use config to customize the HTML platform, if needed
    HtmlPlatform plat = new HtmlPlatform(config);
    plat.assets().setPathPrefix("quads/");
    new MainGame(plat);
    plat.start();
  }
}
