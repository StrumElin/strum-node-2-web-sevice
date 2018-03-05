
1: ssh key

in order to actually communicate between tout machine to github server we should create SSH key

ssh key were designed to securely communicate between two computers.

2:https://help.github.com/articles/connecting-to-github-with-ssh/


Open Terminal.

Enter ls -al ~/.ssh to see if existing SSH keys are present:

ls -al ~/.ssh
# Lists the files in your .ssh directory, if they exist
Check the directory listing to see if you already have a public SSH key.

By default, the filenames of the public keys are one of the following:

id_dsa.pub
id_ecdsa.pub
id_ed25519.pub
id_rsa.pub

If you don't have an existing public and private key pair,
or don't wish to use any that are available to connect to GitHub, then generate a new SSH key.


操作:

ls -al ~/.ssh

ssh-keygen -t rsa -b 4096 -C 'strumelin@163.com'

Your identification has been saved in /Users/zhoupengkai/.ssh/id_rsa.
Your public key has been saved in /Users/zhoupengkai/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:USLPwVFSAsqIgM9gz40i1tIsalV48ZKw3ufVCXMbuPI strumelin@163.com
The key's randomart image is:
+---[RSA 4096]----+
|o  ...+o*++      |
|+o +o+o+.*.      |
|o+B.Bo .++ o     |
|.=+O...  .* +    |
|+ =. . oSo +     |
|..    o +        |
|.      . E       |
|                 |
|                 |
+----[SHA256]-----+


StrumdeMacBook-Pro:~ zhoupengkai$ ls -al ~/.ssh
total 24
drwx------   5 zhoupengkai  staff   170 11  5  2014 .
drwxr-xr-x@ 65 zhoupengkai  staff  2210  3  5 17:39 ..
-rw-------   1 zhoupengkai  staff  3243  3  5 17:37 id_rsa
-rw-r--r--   1 zhoupengkai  staff   743  3  5 17:37 id_rsa.pub
-rw-r--r--   1 zhoupengkai  staff   221 11  5  2014 known_hosts

注意:  id_rsa  是私钥 private key
       id_rsa.pub 是公钥  going to give to third part services like github or Heroku


 Adding your SSH key to the ssh-agent

 Before adding a new SSH key to the ssh-agent to manage your keys,
 you should have checked for existing SSH keys and generated a new SSH key.
 When adding your SSH key to the agent, use the default macOS ssh-add command,
 and not an application installed by macports, homebrew, or some other external source.

  StrumdeMacBook-Pro:~ zhoupengkai$ eval "$(ssh-agent -s)"
 Agent pid 20709   : 这是 process IS

 then tell the SSH Agent where this file lives

 ssh-add -K ~/.ssh/id_rsa
> Identity added: /Users/zhoupengkai/.ssh/id_rsa (/Users/zhoupengkai/.ssh/id_rsa)


打开github  找到 Add new SHH keys

https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/


然后 Copy the SSH key to your clipboard.

If your SSH key file has a different name than the example code, modify the filename to match your current setup. When copying your key, don't add any newlines or whitespace.

pbcopy < ~/.ssh/id_rsa.pub
# Copies the contents of the id_rsa.pub file to your clipboard

拷贝后获得 ssh keys

Strum node
Fingerprint: c3:5b:31:62:9d:3c:5a:8a:b4:bb:d1:95:cd:d0:91:24
Never used — Read/write


确保我们可以与github  建立 ssh 连接了
命令: ssh -T git@github.com
>The authenticity of host 'github.com (192.30.253.112)' can't be established.
 RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.

Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'github.com,192.30.253.112' (RSA) to the list of known hosts.
Hi StrumElin! You've successfully authenticated, but GitHub does not provide shell access.

