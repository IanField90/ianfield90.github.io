---
layout: post
title: Android Developer Quality of Life Tips
date: '2016-01-20T18:18:00.001Z'
author: Ian Field
tags:
- Android
- Android Studio
- Gradle
- Testing
---
There are a lot of useful articles out there for improving your quality of life while developing on Android. I thought I'd collate some of my favourites so that I can help improve your experience, as well as provide a place for me to find more easily anytime I need to set it up again and don't have my settings backup to hand.

First of all is IDE setup itself. [Configuring Android Studio](https://medium.com/google-developer-experts/configuring-android-studio-4aa4f54f1153#.b69yd93gw) lists some nice quality of life improvements to help speed up and automate some areas of your every day development flow. I've even coloured my Logcat output to match. I find it makes those crash logs a little nicer on the eye, and that always helps.

# Build time improvements

At the sacrifice of linting you can improve your build times by setting it to the latest version of android you're supporting, each have their own type of improvements. I've not used this much yet, but I found the idea quite cool. *Edit: This is actually for Multidex builds*

Within your `android` hash:
{% highlight groovy %}
productFlavors {
    dev {
        minSdkVersion 23
    }
    prod {
        // The actual minSdkVersion for the application.
        minSdkVersion 17
    }
}
{% endhighlight %}

Keep your Gradle wrapper up to date if possible. At the time of writing this means updating your **gradle-wrapper.properties** to have:
`distributionUrl=https\://services.gradle.org/distributions/gradle-2.10-all.zip`

As soon as it's okay for you to use I highly recommend trying out instant run in Android Studio. Essentially similar to [JRebel](https://zeroturnaround.com/software/jrebel-for-android/) but free.

# Testing improvements

You can direct the outputs of your unit tests for quick access. To do this within your `android` hash add:

{% highlight groovy %}
testOptions.unitTests.all {
    testLogging {
        events 'passed', 'skipped', 'failed', 'standardOut', 'standardError'
        outputs.upToDateWhen { false }
        showStandardStreams = true
    }
}
{% endhighlight %}

# Handy libraries

Here are a few of my favourite libraries for time saving.

- [Android Annotations](http://androidannotations.org) - I've used a decent amount of and there's a lot to say for the improvement in removal of boilerplate code, handy helpers and overall cleaner looking code.

- [Butter Knife](http://jakewharton.github.io/butterknife/) - The current hotness for view and resource injection. Much lighter weight than Android annotations if you're not leveraging them much.

- [Icepick](https://github.com/frankiesardo/icepick) - Compliments *Butterknife* by adding instance state annotations.

- [RoboGuice](https://github.com/roboguice/roboguice) - Another Dependency injector, lighter weight than *Android Annotations*

- [Leak Canary](https://github.com/square/leakcanary) - Helps you nail down your memory leaks

- [Stetho](http://facebook.github.io/stetho/) - Lets you use Chrome to help view and alter SQL databases and Preferences in your app

- [Square](http://square.github.io/) - A lot of well written and well maintained libraries

- [OrmLite](http://ormlite.com/sqlite_java_android_orm.shtml) - Quick and easy databases

- [MPAndroidChart](https://github.com/PhilJay/MPAndroidChart) - Fantastic looking charts and graphs.

- [Codepath](https://guides.codepath.com/android/Must-Have-Libraries) - Has a very long list of other libraries.

# Video

A decent amount of tips for Android Studio are available in the [Android Studio for Experts (Android Dev Summit 2015)](https://www.youtube.com/watch?v=Y2GC6P5hPeA) video
