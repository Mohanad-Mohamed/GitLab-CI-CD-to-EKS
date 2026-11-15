




.gitlab-ci.yml
---
first_job:
  script:
    - echo "Project Name is $CI_PROJECT_NAME"


second_job:
  script:
    - echo "Project Name is $CI_PROJECT_NAME"

---



.gitlab-ci.yml
---
first_job:
  script:
    - echo "Project Name is $CI_PROJECT_NAME"
  rules:
    - if: $CI_PIPELINE_SOURCE == "schedule"


second_job:
  script:
    - echo "Project Name is $CI_PROJECT_NAME"


---


