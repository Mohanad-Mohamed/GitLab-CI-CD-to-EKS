




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

workflow:
  rules:
    - if: $CI_COMMIT_BRANCH == "dev"


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

workflow:
  rules:
    - if: $CI_COMMIT_BRANCH == "main"


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

workflow:
  rules:
    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH


first_job:
  script:
    - echo "Project Name is $CI_PROJECT_NAME"


second_job:
  script:
    - echo "Project Name is $CI_PROJECT_NAME"
  rules:
    - if: $CI_COMMIT_BRANCH == "dev"

---

