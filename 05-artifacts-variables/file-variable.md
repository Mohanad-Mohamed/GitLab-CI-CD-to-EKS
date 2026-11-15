



.gitlab-ci.yml
---

first_job:
  script:
    - echo "My app name is $project"
    - echo "The password of project is $password"
    - echo "The key of project is $key"
    - echo "The path of file is $file"
    - cat $file

---

