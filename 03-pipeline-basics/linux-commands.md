

.gitlab-ci.yml
---

stages:
  - first-stage
  - second-stage

first_job:
  stage: first-stage

  script:
    - echo "Running main job task..."
    - ls
    - pwd


---

