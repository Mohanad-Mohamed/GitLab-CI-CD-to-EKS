



.gitlab-ci.yml
---

stages:
  - first-stage
  - second-stage

first_job:
  stage: first-stage
  script:
    - mkdir dolfined
    - echo "This is the first job" > dolfined/file.txt

second_job:
  stage: second-stage
  script:
    - cat dolfined/file.txt


.third_job:
  stage: second-stage
  script:
    - echo "This is the third job"

---



.gitlab-ci.yml
---

stages:
  - first_stage
  - second_stage


first_job:
  stage: first_stage
  script:
    - mkdir dolfined
    - echo "This is the first job" > dolfined/file.txt
  artifacts:
    paths:
      - dolfined/
---



.gitlab-ci.yml
---

stages:
  - first_stage
  - second_stage


first_job:
  stage: first_stage
  script:
    - mkdir dolfined
    - echo "This is the first job" > dolfined/file.txt
  artifacts:
    paths:
      - dolfined/

second_job:
  stage: first_stage
  needs:
    - job: first_job
      artifacts: true
  script:
    - cat dolfined/file.txt

.third_job:
  stage: second_stage
  script:
    - echo "This is the third job"

---


