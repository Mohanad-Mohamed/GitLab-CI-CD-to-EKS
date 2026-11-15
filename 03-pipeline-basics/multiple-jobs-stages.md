



.gitlab-ci.yml
---

stages:
  - first-stage
  - second-stage

first_job:
  stage: first-stage
  script:
    - echo "This is first job"
    
second_job:
  stage: first-stage
  script:
    - echo "This is the second job"

third_job:
  stage: second-stage
  script:
    - echo "This is the third job"
    
---




.gitlab-ci.yml
---

stages:
  - first-stage
  - second-stage

first_job:
  stage: first-stage
  script:
    - echo "This is first job"
    
second_job:
  stage: first-stage
  script:
    - echoo "This is the second job"     # try to add something wrong

third_job:
  stage: second-stage
  script:
    - echo "This is the third job"
    
---



