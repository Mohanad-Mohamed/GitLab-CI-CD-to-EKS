




.gitlab-ci.yml
---

stages:
  - first_stage
  - second_stage


first_job:
  stage: first_stage
  script:
    - echoo "Project Name is $CI_PROJECT_NAME"


second_job:
  stage: second_stage
  script:
    - echo "Project Name is $CI_PROJECT_NAME"

---


.gitlab-ci.yml
---

stages:
  - first_stage
  - second_stage


first_job:
  stage: first_stage
  script:
    - echoo "Project Name is $CI_PROJECT_NAME"
  allow_failure: true


second_job:
  stage: second_stage
  script:
    - echo "Project Name is $CI_PROJECT_NAME"

---

