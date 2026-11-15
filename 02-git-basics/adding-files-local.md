




PS C:\Users\Mena\Desktop\Testing-GitLab> ssh-keygen    
Generating public/private ed25519 key pair.
Enter file in which to save the key (C:\Users\Mena/.ssh/id_ed25519): 
C:\Users\Mena/.ssh/id_ed25519 already exists.
Overwrite (y/n)? y
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in C:\Users\Mena/.ssh/id_ed25519
Your public key has been saved in C:\Users\Mena/.ssh/id_ed25519.pub
The key fingerprint is:
SHA256:YWWECG8Jtuer4cBaNrn3uthy+heW9lG5xiTLuMZ0Fko mena@Menaaa     
The key's randomart image is:
+--[ED25519 256]--+
|    +. . o+      |
|   . +...o       |
|    . = o  .     |
|     +E.o.+      |
|     ..=SB .     |
| . .  O.* +      |
|  B .=.* o       |
| +.Boo= .        |
|. +*B*.          |
+----[SHA256]-----+

PS C:\Users\Mena\Desktop\Testing-GitLab> cat C:\Users\Mena/.ssh/id_ed25519.pub



PS C:\Users\Mena\Desktop\Testing-GitLab> cd .\learn-gitlab\


PS C:\Users\Mena\Desktop\Testing-GitLab\learn-gitlab> git add .
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   new.txt


PS C:\Users\Mena\Desktop\Testing-GitLab\learn-gitlab> git commit -m "new line"
[main 63dd962] new line
 1 file changed, 4 insertions(+)



PS C:\Users\Mena\Desktop\Testing-GitLab\learn-gitlab> git push -u origin main
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 330 bytes | 330.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To gitlab.com:gitlab-course4810107/learn-gitlab.git
   4ee3e9f..63dd962  main -> main
branch 'main' set up to track 'origin/main'.



PS C:\Users\Mena\Desktop\Testing-GitLab> cd .\learn-gitlab\


PS C:\Users\Mena\Desktop\Testing-GitLab\learn-gitlab> git add .
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   new.txt

PS C:\Users\Mena\Desktop\Testing-GitLab\learn-gitlab> git commit -m "new line"
[main 63dd962] new line
 1 file changed, 4 insertions(+)

PS C:\Users\Mena\Desktop\Testing-GitLab\learn-gitlab> git push -u origin main
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 330 bytes | 330.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To gitlab.com:gitlab-course4810107/learn-gitlab.git
   4ee3e9f..63dd962  main -> main
branch 'main' set up to track 'origin/main'.












