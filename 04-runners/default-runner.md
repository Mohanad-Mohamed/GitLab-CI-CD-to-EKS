





.gitlab-ci.yml
---
stages:
  - first-stage
  - second-stage

first_job:
  stage: first-stage
  script:
    - echo "This is the first job"

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
image: ubuntu
stages:
  - first-stage
  - second-stage

first_job:
  stage: first-stage
  script:
    - echo "This is the first job"

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

image: ubuntu
stages:
  - first-stage
  - second-stage

first_job:
  image: alpine
  stage: first-stage
  script:
    - echo "This is the first job"

second_job:
  stage: first-stage
  script:
    - echo "This is the second job"

third_job:
  stage: second-stage
  script:
    - echo "This is the third job"


---

