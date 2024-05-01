# How to get your cohort's lecture notes and update them every day

[//]: # "!!!READABILITY WARNING!!!READABILITY WARNING!!!READABILITY WARNING!!!"
[//]: #
[//]: # "If you can see this text in VSCode, you're going to have a bad time 😵‍💫"
[//]: #
[//]: # "Instead, right-click on this file's tab at the top of the screen, or"
[//]: # "on this file's name in the bar on the left side of your screen."
[//]: #
[//]: # "Then click 'Open Preview' to view this file properly 🙌"

## Why you should follow this guide

In addition to completing your homework, it's important to review the specific
content that was covered during the lectures.

The lecture content is uploaded to your cohort's lecture notes GitHub Repo, so
you can always get latest notes and examples after each class!

This guide will walk you through every step for cloning your cohort's lecture
repo, but if you're having trouble, you can watch [this video](https://us02web.zoom.us/rec/share/dB8hFcbtnJO0Ru_o3NnSbmOgQDQD-K3bcSRdRvc_bLORf4GTR31-CsSCAVP1pem-.U8NWt-dg81mMDHID) for a more in-depth and visual guide.

### Recording #1

Passcode: SA89K+UT

## `!!!Warning - Do Not Modify The Code In This Folder!!!`

Once you have successfully cloned this folder, do not write any of your own code
inside of it!

This folder is for your instructor's code **_ONLY_**, you can run into difficult
issues if you attempt to code within this folder, so be careful!

## Let's get started!

### 1. Go to the [Section 1 notes repo](https://github.com/appacademy/pt-section-1-resources)

### 2. Click on the green `Code` button and copy the URL

### 3. Open your terminal to the home directory

> Tip: If you're ever unsure of where you are, you can run `cd` from any location.
> That will take you to your home directory!

### 4. Type `git clone`, then paste the link you copied

> Make sure there's a space between `clone` and the link!

### 5. After the link, type a name for this folder, then hit enter!

For this walkthrough, we'll use the name `aa-lectures`, but you can name yours
anything you'd like! If you can't decide, here are some good choices:

- `section-1-lectures`
- `lectureNotes` or `lecture-notes`
- `appAcademyLectures` or `app-academy-lectures`

> Again, make sure there's a space between the link and your chosen file name!

You're safe to hit enter if your terminal looks similar to this:

```text
git clone https://github.com/appacademy/pt-section-1-resources.git aa-lectures
```

### 6. Run `ls` to verify that you see your folder in your home directory

### 7. Run `cd aa-lectures` to move inside the folder you just created

> Seeing an error? Make sure you're using the name of **_your_** folder for this
> step!!! If you chose to name your folder something else, step #6 should have
> shown you that folder name.

### 8. Run `git branch` to see what branch you're on.

You should see that you're currently on the `main` branch.

We want to switch over to your cohort's branch.

For this walkthrough, we'll use `zaviar-brown/April-2024`, but you need to use
your cohort's specific branch.

> You can find your cohort's branch on the GitHub Repo linked above. Click on
> "Branches" and find the one with your instructor's first & last name, followed
> by your cohort's start-month and year.

> If you're having trouble finding this, please reach out to your instructor!

### 9. Run `git checkout zaviar-brown/April-2024` to checkout the branch

You'll know it worked if you see this:

```bash
branch 'zaviar-brown/April-2024' set up to track 'origin/zaviar-brown/April-2024'.
Switched to a new branch 'zaviar-brown/April-2024'
```

### Congratulations, you now have access to your cohort's lecture notes!

---

## To get the updated lecture notes after each class

### 1. Ensure you're in the lecture notes folder

> Tip: From any file, you can run `pwd` to print out your current location. If
> you see `aa-lectures` (or the name you chose) somewhere in the printed file
> path, you should be good to go!

### 2. Run `git pull`

### 3. Navigate to that day's folder to view the downloaded content

### Example Scenario:

- Today is Thursday, Week 3, and class just ended
- Your instructor already pushed the lecture notes up to the repo
- Your lecture notes folder is named `aa-lectures`
- You've opened your terminal to your home directory

### To get the updated lecture notes, you'd run:

- `cd aa-lectures`
- `git pull`
- `cd 03-week/4-day`
- `code .`

At which point you should see VSCode open up with today's lecture content
