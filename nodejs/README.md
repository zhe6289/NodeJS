$ git pull https://github.com/zhe6289/nodejs
$ git status
$ git branch <branch-name>
$ git checkout <branch-name> <!-- to switch branch -->
$ git add myfile.txt
$ git commit -m "添加add的說明"
[issue1 b2b23c4] 添加add的說明
 1 files changed, 1 insertions(+), 0 deletions(-)
$ git checkout master
Switched to branch 'master'
$ git merge <branch-name>
$ git branch -d <branch-name>


<!-- nodemon watching-->
$ nodemon app.js
$ nodemon app.js -e css,js

<!-- setup SSH -->
$ ssh-keygen -t rsa -b 4096 -C "zhe1217_92@hotmail.com"
$ ls -a -l ~/.ssh
$ eval "$(ssh-agent -s)"
$ ssh-add -K ~/.ssh/id_rsa <!-- Identity added: /Users/eugenechua/.ssh/id_rsa (zhe1217_92@hotmail.com) -->

<!-- remote to git -->
$ git remote add origin https://github.com/zhe6289/nodejs-ssh.git

<!-- generate ssh to git -->
$ cat ~/.ssh/id_rsa.pub
$ ssh -T git@github.com <!-- authenticated to git >

<!-- pushing code to origin master -->
$ git push origin master

<!-- deploy to heroku -->
$ heroku keys:add
$ heroku create eugene-weather-app
$ git push heroku master

<!-- mongodb -->
cd ~ 
pwd
/Users/eugenechua/mongodb/bin/mongod --dbpath=/Users/eugenechua/mongodb/data

<!-- create a empty package.json -->
npm init -y
