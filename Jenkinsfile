node {
    stage('clone git repo') {
        git 'https://github.com/ankushk1729/test-node-docker-jenkins.git'
    }

    stage('build docker image') {
        sh 'docker build -t test-node-docker-jenkins .'
    }

    stage('Run docker image') {
	sh 'docker container prune | yes'
        sh 'docker run -p 3000:3000 test-node-docker-jenkins'
    }
    stage('exit') {
         sh 'exit 0'
    }
}
