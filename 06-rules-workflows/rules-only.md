





.gitlab-ci.yml
---

first_job:
  script:
    - echo "Project Name is $CI_PROJECT_NAME"
  only:
    - main

---



.gitlab-ci.yml
---

first_job:
  script:
    - echo "Project Name is $CI_PROJECT_NAME"
  only:
    - dev


second_job:
  script:
    - echo "Project Name is $CI_PROJECT_NAME"

---




.gitlab-ci.yml
---
first_job:
  script:
    - echo "Project Name is $CI_PROJECT_NAME"



second_job:
  script:
    - echo "Project Name is $CI_PROJECT_NAME"
  rules:
    - if: $CI_COMMIT_BRANCH == "dev"

---



.gitlab-ci.yml
---

stages:
  - first_job
  - second_job
  - third_job

first_job:
  stage: first_job
  script:
    - echo "Project Name is $CI_PROJECT_NAME"

second_job:
  stage: second_job
  script:
    - echo "Project Name is $CI_PROJECT_NAME"

third_job:
  stage: third_job
  script:
    - echo "Project Name is $CI_PROJECT_NAME"
  rules:
    - if: $CI_COMMIT_BRANCH == "main"
      when: on_success

---



.gitlab-ci.yml
---

stages:
  - first_job
  - second_job
  - third_job

first_job:
  stage: first_job
  script:
    - echo "Project Name is $CI_PROJECT_NAME"

second_job:
  stage: second_job
  script:
    - exit 1

third_job:
  stage: third_job
  script:
    - echo "Project Name is $CI_PROJECT_NAME"
  rules:
    - if: $CI_COMMIT_BRANCH == "main"
      when: on_success

---



.gitlab-ci.yml
---

stages:
  - first_job
  - second_job
  - third_job

first_job:
  stage: first_job
  script:
    - echo "Project Name is $CI_PROJECT_NAME"

second_job:
  stage: second_job
  script:
    - exit 1

third_job:
  stage: third_job
  script:
    - echo "Project Name is $CI_PROJECT_NAME"
  rules:
    - if: $CI_COMMIT_BRANCH == "main"
      when: always

---




.gitlab-ci.yml
---

stages:
  - first_job
  - second_job
  - third_job

first_job:
  stage: first_job
  script:
    - echo "Project Name is $CI_PROJECT_NAME"

second_job:
  stage: second_job
  script:
    - echo "Project Name is $CI_PROJECT_NAME"

third_job:
  stage: third_job
  script:
    - echo "Project Name is $CI_PROJECT_NAME"
  rules:
    - if: $CI_COMMIT_BRANCH == "main"
      when: manual

---



.gitlab-ci.yml
---

stages:
  - first_job
  - second_job
  - third_job

first_job:
  stage: first_job
  script:
    - echo "Project Name is $CI_PROJECT_NAME"

second_job:
  stage: second_job
  script:
    - echo "Project Name is $CI_PROJECT_NAME"

third_job:
  stage: third_job
  script:
    - echo "Project Name is $CI_PROJECT_NAME"
  rules:
    - if: $CI_COMMIT_BRANCH == "main"
      when: never

---

