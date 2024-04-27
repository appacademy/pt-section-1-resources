# How to create a `Personal Notes` folder & a practice repo for the day

## If you do **_not_** already have a `Personal Notes` folder

1. Go to the [Section 1 notes repo](https://github.com/appacademy/pt-section-1-resources/tree/zaviar-brown/April-2024), which is found in our pinned messages in the general-EST/PST channel!

2. Click on the green `Code` button and copy the URL

- `https://github.com/appacademy/pt-section-1-resources.git`

3. Open your terminal to the home directory

- If you are unsure where you are, hit `cd` ("hit" === write command then hit enter)

4. Write `git clone` then hit paste. Optionally, add a space after the link and write a file name

- `git clone https://github.com/appacademy/pt-section-1-resources.git my-notes`

5. Hit `ls` to verify that you see the `my-notes` folder in your home directory

6. `cd` into the folder you just created

- `cd my-notes`

7. Run `git branch` to see what branch you're on. You should currently be on `main`. But, we want to be on `student-template`

8. Checkout the `student-template` branch

- `git checkout student-template`
- You know it worked if you see this

  ```bash
  branch 'student-template' set up to track 'origin/student-template'.
  Switched to a new branch 'student-template'
  ```

9. Delete the connect to GitHub so that we can create our own GitHub repos in this folder

- `rm -rf .git`
- Only do this if you're attempting to create a personal notes folder.
- If you want the class notes, do not delete the `.git`!!!

10. You can now use this file to put your own personal work

---

## If you want to work on an in-class practice and connect that to GitHub

1. Go to the repo from Canvas

- [Example link](https://github.com/appacademy/aa01-function-parameters)

2. Scroll down to the `Clone the branch` section, and copy the first URL under `Online Part-Time`

- Example copy `git clone --branch part-time --single-branch https://github.com/appacademy/aa01-function-parameters.git`

3. cd into `my-notes`, the specific week & day, and the `practices` folder

- From home: `cd my-notes/01-week/5-day/practices`

4. Paste the clone command from GitHub into this folder

5. cd into the folder you just cloned

- `cd aa01-function-parameters`

6. Once inside the folder, run `rm -rf .git`

7. Initialize a new repo in the current folder

- `git init`

8. Add all the current files to git

- `git add .`

9. Go to github.com, create a new repo, set it to private, and name it whatever you want

10. Copy and paste the last 4 lines of the `…or create a new repository on the command line` section into your terminal

```bash
git commit -m "first commit"
git branch -M main
git remote add origin *YOUR URL HERE*
git push -u origin main
```

11. Refresh the browser and you should see the newly updated repo files!
