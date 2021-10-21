import React from "react";

import snapLayout from "../assets/snap-layout.webp";
import microsoftTeams from "../assets/microsoft-teams.webp";
import widgets from "../assets/widgets.webp";
import xboxApp from "../assets/xbox-app.webp";
import androidApps from "../assets/android-apps.webp";

export class Content extends React.Component {
  render() {
    return (
      <div>
        <p>
          Microsoft is officially confirming the name for the next release of
          Windows today: Windows 11. After months of teases, hints of the number
          11, and{" "}
          <a href="https://www.theverge.com/2021/6/15/22535123/microsoft-windows-11-leak-screenshots-start-menu">
            a giant Windows 11 leak
          </a>
          , Microsoft’s new operating system is official. The big focus for
          Windows 11 is a simplification of the Windows user interface, a new
          Windows store, and improvements to performance and multitasking.
          Windows 11 will also include support for{" "}
          <a href="https://www.theverge.com/2021/6/24/22548428/microsoft-windows-11-android-apps-support-amazon-store">
            running Android apps for the first time
          </a>
          .
        </p>
        <p>
          The first thing you’ll notice about Windows 11 is that it includes a
          new Start menu and updated Start button that are both centered on the
          taskbar. This UI is very similar to what we first saw in Windows 10X,
          a project originally planned for dual-screen devices that Microsoft
          eventually canceled. A lot of the UI work that went into Windows 10X
          is appearing in Windows 11.
        </p>
        <p>
          The new Start menu drops the Live Tiles that were originally
          introduced with Windows 8 and opts for more of the typical launcher
          you’d find in Chrome OS or Android. There are apps, recent documents,
          and a separate search interface. Much of the centered appearance is
          clearly influenced by macOS and Chrome OS, and Windows 11 also
          includes the rounded corners we’ve seen in both Android and iOS.
        </p>
        <p>
          Windows chief Panos Panay says “the team has obsessed over every
          detail.” Windows 11 will also include updated dark and light modes
          that look a lot better than what we’ve seen in Windows today.
        </p>
        <div class="Image-Pane">
          <img src={snapLayout} alt="snap" id="img1" />
          <div>
            <text class="Caption">Windows 11 Snap layouts</text>
          </div>
        </div>
        <p>
          There’s also something Microsoft is calling Snap Layouts, which allow
          you to quickly snap apps into the various modes that Windows 11
          supports. This new version of Windows 11 will also remember where your
          apps are stored, thanks to something called Snap Groups.
        </p>
        <p>
          It looks like a useful way to support multiple monitors and ensure
          that apps always open on the correct screen. That’s particularly
          helpful if you’re using a laptop hooked up to a monitor or a
          traditional desktop machine with multiple displays.
        </p>
        <p>
          Performance is also a big focus for Windows 11. Windows updates are 40
          percent smaller and more efficient as they now happen in the
          background. Hopefully that will mean Windows 11 doesn’t disturb you in
          the middle of work.
        </p>
        <div class="Image-Pane">
          <img src={microsoftTeams} alt="microsoft-teams" id="Img2" />
          <div>
            <text class="Caption">Microsoft Teams in Windows 11</text>
          </div>
        </div>
        <p>
          Microsoft is also integrating Microsoft Teams directly into Windows 11
          for consumers. Teams is integrated directly into the taskbar, allowing
          Windows 11 users to call friends, family, or co-workers. It’s clear
          that this is a big shift away from Skype, which was bundled as part of
          Windows 10, and there’s even a universal mute button in the system
          tray so you can easily mute your microphone across all apps.
        </p>
        <p>
          Windows Widgets and touch gestures are also a big part of Windows 11.
          Widgets is a personalized feed, powered by AI, and it builds on the
          widgets we’ve seen{" "}
          <a href="https://www.theverge.com/2021/4/22/22397237/microsoft-windows-10-taskbar-weather-news-widget-feature-available-now">
            Microsoft introduce in Windows 10
          </a>
          . It slides in from the left-hand side of Windows 11, and you can also
          make it full-screen. Built-in widgets include a news feed, weather,
          and maps.
        </p>
        <p>
          Interestingly, these widgets also include one that lets you tip local
          creators directly from within Windows 11.
        </p>
        <div class="Image-Pane">
          <img src={widgets} alt="widgets" id="Img3" />
          <div>
            <text class="Caption">Windows Widgets</text>
          </div>
        </div>
        <p>
          Microsoft is also improving the gestures you can use on tablets and
          the touch targets. Instead of flipping into a tablet mode, Windows 11
          simply adapts to allow you to touch the OS easily.
        </p>
        <p>
          Coupled with this are improvements to inking and voice typing. With
          certain pens, Windows 11 will also support haptic feedback here. That
          could mean we’ll see a lot of new hardware that will support these
          stylus changes in Windows 11.
        </p>
        <p>
          Xbox is a big part of Microsoft, and we also got to hear from Xbox
          executive Sarah Bond about PC gaming with Windows 11. Auto HDR, a
          feature in Xbox Series X / S, will be part of Windows 11. Enabling
          Auto HDR will add high dynamic range (HDR) to a large number of
          DirectX 11 and DirectX 12 games as long as you have a compatible HDR
          monitor.
        </p>
        <div class="Image-Pane">
          <img src={xboxApp} alt="xbox-app" id="Img4" />
          <div>
            <text class="Caption">New Xbox app in Windows 11</text>
          </div>
        </div>
        <p>
          Microsoft is also promising speed and performance improvements for
          Windows 11. DirectStorage will be part of Windows 11, a big new
          feature from the Xbox Series X / S. DirectStorage will require the
          latest NVMe drives to speed up game load times on Windows 11, and game
          developers will need to enable this technology to boost load times
          further.
        </p>
        <p>
          Xbox Game Pass is also being integrated into Windows 11, thanks to a
          new Xbox app that the company has been testing for months. This also
          includes xCloud integrated into this Xbox app, so you can stream games
          from Microsoft’s cloud, too.
        </p>
        <div class="Image-Pane">
          <img src={androidApps} alt="android-apps" id="Img5" />
          <div>
            <text class="Caption">
              The new Windows 11 app store with Android apps
            </text>
          </div>
        </div>
        <p>
          Finally, one of the biggest parts of Windows 11 is the new store and{" "}
          <a href="https://www.theverge.com/2021/6/24/22548428/microsoft-windows-11-android-apps-support-amazon-store">
            support for Android apps on Windows
          </a>
          . The Microsoft Store is redesigned and will support a whole host of
          apps that haven’t typically been available in the Windows app store.
          That includes apps from Adobe Creative Suite, and Android apps
          including TikTok and Instagram.
        </p>
        <p>
          Developers can use their own “commerce engines,” and Microsoft won’t
          take a cut; devs can even use their own payment systems if they want
          to. “Windows has always stood for sovereignty for creators,” says
          Microsoft CEO Satya Nadella.
        </p>
        <p>
          The biggest news here is that Windows 11 will also run Android apps.
          Microsoft has partnered with Amazon and Intel to make this a reality,
          and Windows 11 will be using Intel Bridge technology to bring this to
          life. Microsoft demonstrated TikTok and other Android apps running
          alongside Windows apps on Windows 11, and the company plans to share
          more information on this “in the coming months.”
        </p>
        <p>
          There’s no release date for Windows 11 yet, but Microsoft has promised
          to make it available as a free upgrade to Windows 10 users this
          holiday. We’re expecting Windows 11 to appear at some point in
          October, alongside new hardware running the operating system.
        </p>
      </div>
    );
  }
}
