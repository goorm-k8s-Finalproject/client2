def DATE = new Date();
def BUILD_NUMBER = DATE.format("yyMMddhhmmss")
node {
  stage('========== Clone repository ==========') {
    checkout scm
  }
  stage('========== Build image ==========') {
    app = docker.build("yangju0411/frontend")
  }
  stage('========== Push image ==========') {
    docker.withRegistry('https://registry.hub.docker.com/', 'yangju0411') {
      app.push("${BUILD_NUMBER}")
      app.push("latest")
    }
  }
  stage('========== Deploy k8s ==========') {
    sh "sed -i 's#image: yangju0411/frontend:[0-9]*#image: yangju0411/frontend:${BUILD_NUMBER}#g' /root/data/k8s/deployment/frontend_dev.yml"
    sh "kubectl apply -f /root/data/k8s/deployment/frontend_dev.yml"
  }
}