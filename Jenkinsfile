pipeline {
  agent {
    docker {
      image 'node:10.6-alpine'
      args '-p 3000:3000'
    }

  }
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