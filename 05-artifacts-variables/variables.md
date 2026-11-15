



.gitlab-ci.yml
---

variables:
  name: dolfined


first_job:
  script:
    - echo "My app name is $name"

---




.gitlab-ci.yml
---
variables:
  name: dolfined


first_job:
  variables:
    version: "1"
  script:
    - echo "My app name is $name:$version"


second_job:
  script:
    - echo "My app name is $name:$version"

---



.gitlab-ci.yml
---

variables:
  name: dolfined


first_job:
  variables:
    name: GitLab
    version: "1"
  script:
    - echo "My app name is $name:$version"


second_job:
  script:
    - echo "My app name is $name:$version"

---

