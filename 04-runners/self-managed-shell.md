




.gitlab-ci.yml
---

stages:
  - first-stage
  - second-stage

first_job:
  tags:
    - ec2
    - aws
    - shell
  stage: first-stage
  script:
    - echo "This is the first job"

second_job:
  stage: first-stage
  script:
    - echo "This is the second job"

third_job:
  stage: second-stage
  script:
    - echo "This is the third job"

---




To Solve this problem

[ec2-user@ip-172-31-25-234 ~]$ sudo cp /home/ec2-user/.gitlab-runner/config.toml /etc/gitlab-runner/config.toml

[ec2-user@ip-172-31-25-234 ~]$ sudo systemctl restart gitlab-runner




.gitlab-ci.yml
---

default:
  tags:
    - ec2
    - aws
    - shell
    
stages:
  - first-stage
  - second-stage

first_job:
  stage: first-stage
  script:
    - echo "This is the first job"

second_job:
  stage: first-stage
  script:
    - echo "This is the second job"

third_job:
  stage: second-stage
  script:
    - echo "This is the third job"

---

