# How to create a personal work folder using a/A's template

[//]: # "!!!READABILITY WARNING!!!READABILITY WARNING!!!READABILITY WARNING!!!"
[//]: #
[//]: # "If you can see this text in VSCode, you're going to have a bad time 😵‍💫"
[//]: #
[//]: # "Instead, right-click on this file's tab at the top of the screen, or"
[//]: # "on this file's name in the bar on the left side of your screen."
[//]: #
[//]: # "Then click 'Open Preview' to view this file properly 🙌"

## Why you should follow this guide

As an a/A student, you need a place to store everything you work on for class.

We **_strongly recommend_** using our provided `student-template`. It sets you
up with an organized file system that matches your instructor's lecture notes,
making it easier to follow along with the class throughout all of Section 1!

This guide will walk you through every step for setting up your file system, but
if you're having trouble, you can watch [this video](https://us02web.zoom.us/rec/share/dB8hFcbtnJO0Ru_o3NnSbmOgQDQD-K3bcSRdRvc_bLORf4GTR31-CsSCAVP1pem-.U8NWt-dg81mMDHID) for a more in-depth and visual guide.

### Recording #2

Passcode: SA89K+UT

## Let's get started!

### 1. Go to the [Section 1 notes repo](https://github.com/appacademy/pt-section-1-resources)

### 2. Click on the green `Code` button and copy the URL

### 3. Open your terminal to the home directory

> Tip: If you're ever unsure of where you are, you can run `cd` from any location.
> That will take you to your home directory!

### 4. Type `git clone`, then paste the link you copied

> Make sure there's a space between `clone` and the link!

### 5. After the link, type a name for this folder, then hit enter!

For this walkthrough, we'll use the name `aa-classwork`, but you can name yours
anything you'd like! If you can't decide, here are some good choices:

- `section-1-code`
- `myNotes` or `my-notes`
- `appAcademyPractices` or `app-academy-practices`

> Again, make sure there's a space between the link and your chosen file name!

You're safe to hit enter if your terminal looks similar to this:

```text
git clone https://github.com/appacademy/pt-section-1-resources.git aa-classwork
```

### 6. Run `ls` to verify that you see your folder in your home directory

### 7. Run `cd aa-classwork` to move inside the folder you just created

> Seeing an error? Make sure you're using the name of **_your_** folder for this
> step!!! If you chose to name your folder something else, step #6 should have
> shown you that folder name.

### 8. Run `git branch` to see what branch you're on.

You should see that you're currently on the `main` branch.

We want to switch over to the `student-template` branch.

### 9. Run `git checkout student-template` to checkout the `student-template` branch

You'll know it worked if you see this:

```bash
branch 'student-template' set up to track 'origin/student-template'.
Switched to a new branch 'student-template'
```

> **Warning!!!** If you do not see the above message, please do not continue without
> asking for help!

### 10. Run `rm -rf .git`

This command deletes your folder's connection to the original GitHub repo.

That allows us to safely create our own GitHub repos in this folder every day.

### Congratulations, you now have a file system to work inside of for class!
