



.gitlab-ci.yml
---

first_job:
  script:
    - echo "Project Name= $CI_PROJECT_NAME"
    - echo "Branch Name= $CI_COMMIT_REF_NAME"
    - echo "Pipeline ID= $CI_PIPELINE_ID"

---

