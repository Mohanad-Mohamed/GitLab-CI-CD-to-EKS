




.gitlab-ci.yml
---

stages:
  - first-stage
  - second-stage

first_job:
  stage: first-stage

  script:
    - |
        echo "This is first job"
        ls
        pwd
        echo "completed" 

---





.gitlab-ci.yml
---

stages:
  - first-stage
  - second-stage

first_job:
  stage: first-stage

  script:
    - |
      echo "Checking if package.json exists..."
      if [ -f package.json ] 
      then
        echo "File exists"
        npm install
      else
        echo "File not found" 
      fi


---

