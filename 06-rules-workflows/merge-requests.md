


.gitlab-ci.yml
---

workflow:
  rules:
    - if: $CI_COMMIT_BRANCH != "main"
  
first_job:
  script:
    - echo "Project Name is $CI_PROJECT_NAME"


second_job:
  script:
    - echo "Project Name is $CI_PROJECT_NAME"

---


.gitlab-ci.yml
---

workflow:
  rules:
    - if: $CI_COMMIT_BRANCH != "main"

first_job:
  script:
    - echo "Project Name is $CI_PROJECT_NAME"
  

second_job:
  script:
    - echo "Project Name is $CI_PROJECT_NAME"


third_job:
  script:
    - echo "Project Name is $CI_PROJECT_NAME"

---

