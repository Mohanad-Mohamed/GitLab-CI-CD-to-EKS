


ubuntu@ip-172-31-72-8:~$ sudo apt install git -y
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
git is already the newest version (1:2.43.0-1ubuntu7.3).
git set to manually installed.
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.

ubuntu@ip-172-31-72-8:~$ git version
git version 2.43.0


ubuntu@ip-172-31-72-8:~$ ssh-keygen
Generating public/private ed25519 key pair.
Enter file in which to save the key (/home/ubuntu/.ssh/id_ed25519):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/ubuntu/.ssh/id_ed25519
Your public key has been saved in /home/ubuntu/.ssh/id_ed25519.pub
The key fingerprint is:
SHA256:xfWcQjcAr7yuYOFpmsWmulGYNOIVQFMEK7f4b0sOy98 ubuntu@ip-172-31-72-8
The key's randomart image is:
+--[ED25519 256]--+
|.==+      ..+.o  |
|  o .    . + + o |
|o.+.      o o +  |
|o=.=     o . .   |
|..+ . . S o      |
| . . o o   .     |
|  + . X   .      |
| . B.X . .       |
|  ==O.E ...      |
+----[SHA256]-----+


ubuntu@ip-172-31-72-8:~$ ls /home/ubuntu/.ssh/
authorized_keys  id_ed25519  id_ed25519.pub

ubuntu@ip-172-31-72-8:~$ cat /home/ubuntu/.ssh/id_ed25519.pub



ubuntu@ip-172-31-72-8:~/learn-gitlab$ echo "hello from ec2" >  new.txt

ubuntu@ip-172-31-72-8:~/learn-gitlab$ ls
README.md  new.txt

ubuntu@ip-172-31-72-8:~/learn-gitlab$ cat new.txt
hello from ec2



ubuntu@ip-172-31-72-8:~/learn-gitlab$ git add .

ubuntu@ip-172-31-72-8:~/learn-gitlab$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   new.txt


ubuntu@ip-172-31-72-8:~/learn-gitlab$ git commit -m "add a new file from ec2"
[main b83c627] add a new file from ec2
 Committer: Ubuntu <ubuntu@ip-172-31-72-8.ec2.internal>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly. Run the
following command and follow the instructions in your editor to edit
your configuration file:

    git config --global --edit

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

 1 file changed, 1 insertion(+)
 create mode 100644 new.txt


ubuntu@ip-172-31-72-8:~/learn-gitlab$ git push -u origin main
Username for 'https://gitlab.com': MenaMagdyHalem
Password for 'https://MenaMagdyHalem@gitlab.com':   
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 2 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 303 bytes | 303.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://gitlab.com/gitlab-course4810107/learn-gitlab.git
   56e00a2..b83c627  main -> main
branch 'main' set up to track 'origin/main'.


ubuntu@ip-172-31-72-8:~/learn-gitlab$ git config --global credential.helper store


ubuntu@ip-172-31-72-8:~/learn-gitlab$ git push -u origin main
Username for 'https://gitlab.com': MenaMagdyHalem
Password for 'https://MenaMagdyHalem@gitlab.com':
branch 'main' set up to track 'origin/main'.
Everything up-to-date








































