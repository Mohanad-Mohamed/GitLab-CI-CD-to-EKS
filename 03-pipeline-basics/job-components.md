




.gitlab-ci.yml
---

stages:
  - first-stage
  - second-stage

first_job:
  stage: first-stage
  before_script:
    - echo "Preparing environment..."
  script:
    - echo "Running main job task..."
  after_script:
    - echo "Cleaning up after job..."
    
---



.gitlab-ci.yml
---

stages:
  - first-stage
  - second-stage

first_job:
  stage: first-stage

  script:
    - echo "Running main job task..."
  after_script:
    - echo "Cleaning up after job..."
  before_script:
    - echo "Preparing environment..."
    

---

