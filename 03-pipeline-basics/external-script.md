



script.sh
---
echo "Hello from script"
ls
pwd
---


.gitlab-ci.yml
---
stages:
  - first-stage
  - second-stage

first_job:
  stage: first-stage

  script:
    - ./script.sh

---


=============================================================================================

.gitlab-ci.yml
---
stages:
  - first-stage
  - second-stage

first_job:
  stage: first-stage

  script:
    - chmod +x script.sh 
    - ./script.sh

---









