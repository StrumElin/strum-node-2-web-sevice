

1: git init  : the folder that has everything that you want to keep track

2: la -a : 显示隐藏的文件

3:  vim .gitingore => i => node_modules/ *** =>control c =>:wq



4: git add xxx.json
    git add .

5: git commit -m "initial commit"


git checkout 要合并分支
git pull
git checkout dev
git pull
git merge 要合并分支
git status —>查看冲突->解决冲突
git add 冲突的文件
git diff — cached —>merge后的版本跟上一次提交版本的区别
git commit -m “xxxx”
git push—>push到服务器上

6: git log 版本控制器的历史记录
   git log - - pretty=oneline 只显示一行
   工作区中回到上一个提交的版本(分支)  git reset - -hard HEAD^
   工作区中回到上上一个提交的版本(分支)  git reset - -hard HEAD^^

  回到指定的版本
*******************
  git reset - -hard 54c322
  commit 后的回退 git reset —hard HEAD^  | git reset — hard 234号
*******************
