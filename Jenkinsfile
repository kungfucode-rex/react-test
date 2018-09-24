pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''cat /etc/issue
npm install
npm run build
rm -rf /var/www/html/**
mv build/** /var/www/html/'''
      }
    }
  }
}