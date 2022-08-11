node {
  stage('========== Clone repository ==========') {
    checkout scm
  }
  stage('========== Build image ==========') {
    app = docker.build("yangju0411/frontend")
  }
  stage('========== Push image ==========') {
    docker.withRegistry('https://registry.hub.docker.com', 'yangju0411') {
      app.push("${env.BUILD_NUMBER}")
      app.push("test")
    }
  }
}