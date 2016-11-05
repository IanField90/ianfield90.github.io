---
layout: post
title: Testing With Android Annotations
date: '2015-11-24T15:02:00.001Z'
author: Ian Field
tags:
- Android
- Android Annotations
- Gradle
- Testing
---
At work we’ve supported a number of projects right through from IntelliJ and Maven to Android Studio with Gradle by hand. Android Studio now supports a better means of importing, upgrading and migrating a project to Gradle than before, but I’ve not been able to make use of this with our projects as they’ve evolved over time.

One of the recent changes to Android Studio has been better integration with tests. However for me this came at a cost. It depends a lot on the file structure of your application, so code blocks such as this can prove a bit more troublesome to manage:
{% gist IanField90/d91ad45ccf5a0fe2792c build.gradle %}


It’s easy to forget to update this regularly, particularly when adding a new build variant or build configuration. It also doesn’t help internally when switching between projects to help navigate to where a particular resource is located and update it.

To get ready to start using the built in test suite took a bit of work, but worthwhile for maintenance of this app. Moving the *src* folder to *app/src/main/java* was simple enough, but creating a working root level (Project) *build.gradle* took a bit more effort.

# Choosing a suite
Next came a bit of experimentation with test suites. After dabbling with a bit of [Roboelectric](http://robolectric.org) in the past I was keen to try that out again, but found that Espresso had been making an impact in the community with newer support. A key difference for me was being able to run on a real device, rather than a shadow copy of Android APIs, along with support for Marshmallow in the future.

# Android Annotations
For a while now a key part of our toolkit has been Android Annotations. The setup guide for this details apt.arguments.androidManifestFile:
`variant.outputs[0].processResources.manifestFile`

This caused a slight headache when attempting to run the tests, but it turns out the fix is rather simple by making use of the groovy ‘*?*’ operator making it read this instead:
`variant.outputs[0]?.processResources?.manifestFile`

Once this was done a key thing is to make sure you’ve selected the correct build variant in the bottom left and test artifact, both are pretty self-explanatory. To get you kick-started with setup I also sorted out my [DevStat](https://ianfield.com/DevStat) app with it, which makes use of Android Annotations too. The tests are sparse, I want to use it as a bit of a test-bed with RecyclerView shortly. The one downside is I’ve had to bump the minimum SDK from 7 to 8, but as that’s now sub 1% distribution now I don’t see that as too much of an issue.

# Next Steps
I noticed tests failed to run correctly unless the build variant was set to *&lt;flavor&gt;Debug*. While this is fine for me it’d be good to find out the reason behind it as some variants further down the line will likely have different logic or UIs.

*Edit 17/01/2015:*  Android Studio 2 looks to be removing this
