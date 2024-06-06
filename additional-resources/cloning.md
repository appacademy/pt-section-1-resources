# Cloning-A-Repo
- In this md file, we will cover how to Clone, change, and then share a repo between yourself and your partner for pair programming purposed.
- We will be using your very first POJO proctice in these examples, if you need ot clone another repo, then follow these steps on that repo instead.

## Steps for Cloning
- 1.) Go to the repositories address on github, in this case, we will be using
- [https://github.com/appacademy/practice-for-week-02-pojo_basics](https://github.com/appacademy/practice-for-week-02-pojo_basics)
- 2.) Click on the green code button.

![Alt text](Screenshot%202023-08-09%20134548.png)

- 3.) Verify you are using the auth that you have setup, default is typically HTTPS so leaving this option highlited is fine, if you have changed to ssh, then click this option instead.

![Alt text](Screenshot%202023-08-09%20134748.png)

- 4.) Click the copy button next to the url in the bottom right

- 5.) Open up your terminal, navigate to where you would like to store this repo locally and type in git clone, then paste what you just copied from github
```
//example for this specific repo we are cloning
git clone https://github.com/appacademy/practice-for-week-02-pojo_basics.git
```
- 6.) Remove the connection between your computer and this git repo in order to create your own.
    - cd into this repo
    - in your terminal type in
```
rm -rf .git
```
- 7.) NPM install and add .gitignore
    - run these command in the root of this dir to in node packages and create .gitignore
```
npm install
touch .gitignore
```
- open your .gitignore and add your /node_modules on line 1
```
/node_modules
```
- 8.) Initialize your new local git repo, add all files in repo to staging, then commit
    - run these commands
```
git init
git add .
git commit -m 'first commit'
```
- 9.) Create a Github Repo to connect your local git repo to.
    - Make sure you are signed into github
    - navigate to this url
    - [https://github.com/new](https://github.com/new)
![Alt text](Screenshot%202023-08-09%20140113.png)
- 10.) Finish Creating repo
    - Choose yourself as an owner
    - Give your repo a name
    - Click Create repository in the bottom right of screenshot!
- 11.) Copy the commands in the second option of the below screenshot
![Alt text](Screenshot%202023-08-09%20140515.png)

    - Navigate back to your terminal and past these commands
    - If you receive an error when pasting the commands all at once, please attempt pasting them one at a time
    - After you have pasted to last command and it has finished running, navigate back to your broswer, refresh your github page, and verify the correct things were added to this repo

- 12.) If you are sharing this newly created repo with a a partner, please follow the md in the Sharing directory
    - If not, every time you are done with a problem, or maybe hit a checkpoint such as being finished for the day, make sure to add, commit and push, and your partner pulls.
    - you can do this by running these below commands
```
# you

git add .
git commit -m 'add your descriptive commit message of what you did'
git push
```
```
# partner

git pull
```