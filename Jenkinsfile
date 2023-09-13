node {
    docker.image('node:16-buster-slim').inside('-p 3000:3000') {
        stage('Build') {
		    checkout scm
		    sh 'npm install'
        }
        stage('Test') { 
		    sh './jenkins/scripts/test.sh' 
        }
        stage('Manual Approval') { 
            steps {
                input message: 'Lanjutkan ke tahap Deploy?' 
            }
        }
        stage('Deploy') { 
            steps {
                sh './jenkins/scripts/deliver.sh' 
                sh 'sleep 1m'
                input message: 'Sudah selesai menggunakan React App??? (Klik "Proceed" untuk mengakhiri)' 
                sh './jenkins/scripts/kill.sh' 
            }
        }
    }
}
