# How to clone an a/A practice and create a GitHub Repo for it

[//]: # "!!!READABILITY WARNING!!!READABILITY WARNING!!!READABILITY WARNING!!!"
[//]: #
[//]: # "If you can see this text in VSCode, you're going to have a bad time 😵‍💫"
[//]: #
[//]: # "Instead, right-click on this file's tab at the top of the screen, or"
[//]: # "on this file's name in the bar on the left side of your screen."
[//]: #
[//]: # "Then click 'Open Preview' to view this file properly 🙌"

## Why you should follow this guide

While working through practices at a/A, either by yourself or with a pair, we
require that you make Git Commits as you complete problems or switch pair roles.

This means that in order to begin working on a practice, you must first clone it
down from GitHub and remove its connection to a/A's original repo.

You're then required to create your own repo and link it to the new practice
file that you just cloned.

This guide will walk you through every step for cloning a practice and creating
your own repo, but if you're having trouble, you can watch [this video](https://us02web.zoom.us/rec/share/dB8hFcbtnJO0Ru_o3NnSbmOgQDQD-K3bcSRdRvc_bLORf4GTR31-CsSCAVP1pem-.U8NWt-dg81mMDHID) for a more in-depth and visual guide.

### Recording #3

Passcode: SA89K+UT

## File System Note

This guide assumes that you're using a/A's recommended file system for class.
That means you created a folder using the `student-template`, and that you named
that folder `aa-classwork`.

If that sounds like something you'd like to use, there's a full guide on how to
set that up in this folder.

If that doesn't apply to you, make sure to adjust the steps below to match your
file system and folder names.

## Pair Programming Note

When pair programming, choose one person to follow the steps below. After that's
complete, the other person should clone the repo that their pair just created,
instead of cloning directly from a/A's repo.

## Let's get started!

### 1. On Canvas, click the `Download Project` link

This should take you to the practice's GitHub Repo.

### 2. Scroll down to the `Clone the branch` section

You'll need to scroll past the "_tiged the branch_" and "_Download the branch as
a .zip_" sections.

### 3. Copy the first URL under `Online Part-Time`

Directly under the sub-heading "To authenticate with a Personal Access Token
over HTTPS, run"

> If you are experienced using SSH, you are allowed to choose that method here
> instead. However, unless you're absolutely certain you know what you're doing,
> SSH is not recommended.

### 4. Open your terminal to the home directory

> Tip: If you're ever unsure of where you are, you can run `cd` from any location.
> That will take you to your home directory!

### 5. Use `cd` to move into the `practices` folder for the current day & week

If today is Thursday, Week 3, you'd run:

- `cd aa-classwork/03-week/4-day/practices`

### 6. Paste the command you copied from GitHub

### 7. At the end of the command, type a name for this folder, then hit enter

For this walkthrough, we'll use the name `1_expressions`, but you can name yours
anything you'd like!

You'll want to choose a descriptive name so you can quickly identify what the
practice is about at a later date.

> Make sure there's a space between the end of the pasted command and your
> chosen file name!

You're safe to hit enter if your terminal looks similar to this:

```text
git clone --branch part-time --single-branch https://github.com/appacademy/aa01-intro-to-expressions.git 1_expressions
```

### 8. Run `ls` to verify that you see your folder in your `practices` directory

### 9. Run `cd 1_expressions` to move inside the folder you just created

> Seeing an error? Make sure you're using the name of **_your_** folder for this
> step!!! If you chose to name your folder something else, step #8 should have
> shown you that folder name.

### 10. Run `rm -rf .git`

This command deletes your folder's connection to the original GitHub repo.

That allows us to safely create our own GitHub repo in its place.

### 11. Run `git init`

This command initializes a new repo in the current folder.

### 12. Run `git add .`

This command adds all the files in the current folder to git.

### 13. Go to `github.com` and create a new repo

It's recommended that you name your repo the same name as the folder you cloned,
however it's not required for these names to match.

> Note: All repos you create for a/A should be set it to `private`

### 14. Copy the last 4 lines of the `…or create a new repository on the command line` section

It will look just like this, except your repo's URL will replace "YOUR URL HERE"

```bash
git commit -m "first commit"
git branch -M main
git remote add origin *YOUR URL HERE*
git push -u origin main
```

### 15. Paste the lines you copied into your terminal all together, then hit enter

> Your terminal has no problem receiving multiple lines at once, so don't worry!

### 16. Refresh the browser to verify that you see your practice's files

### Congratulations, you now have a git-connected practice folder to work and commit with!
