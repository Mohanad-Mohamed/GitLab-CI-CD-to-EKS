



.gitlab-ci.yml
---

first_job:
  script:
    - echo "Project Name: $CI_PROJECT_NAME"
    - echo "Branch Name: $CI_COMMIT_REF_NAME"
    - echo "Pipeline ID: $CI_PIPELINE_ID"

---



.gitlab-ci.yml
---

first_job:
  when: manual   
  script:
    - echo "Project Name is $CI_PROJECT_NAME"
    - echo "Branch Name is $CI_COMMIT_REF_NAME"
    - echo "Pipeline ID is $CI_PIPELINE_ID"

---

