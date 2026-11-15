



.gitlab-ci.yml
---
first_job:
  script:
    - echo "This is first pipeline"
    
---



# fail Job
.gitlab-ci.yml
---

first_job:
  script:
    - echo "This is first pipeline"
    
second_job:
  scripts:           # try to add something wrong
    - echo "This is the second job" 
---


