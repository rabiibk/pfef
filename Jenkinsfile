pipeline {
    agent any

    environment {
        NEXUS_URL = 'http://192.168.164.129:8081'
        NEXUS_REPO = 'repository/maven-releases'
        ARTIFACT_GROUP = 'front.angular'
        ARTIFACT_NAME = 'angular8-crud-demo-master'
        ARTIFACT_VERSION = "1.0.${env.BUILD_NUMBER}"
        DOCKER_REPO = 'rabii1990/frontend'
        DOCKER_IMAGE_TAG = 'angular'
        DOCKER_IMAGE_NAME2 = 'rabiifront2'
        DOCKER_IMAGE_TAG2 = 'angular2'
    }

    tools {
        // Déclarez l'installation de Node.js dans Jenkins
        nodejs '20.11.0'
       //nodejs 'Nodejs'
    }

    stages {
        stage('Git') {
            steps {
                echo 'My first job pipeline angular'
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/rabiibk/pfef.git']]])
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Utilisez npm du chemin de l'installation de Node.js configuré dans Jenkins
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build --prod'
            }
        }

        stage('Publish to Nexus') {
            steps {
                script {
                    def artifactPath = "dist/${ARTIFACT_NAME}-{ARTIFACT_VERSION}.tar.gz"
                    def nexusArtifactUrl = "${NEXUS_URL}/${NEXUS_REPO}/${ARTIFACT_GROUP}/${ARTIFACT_NAME}/${ARTIFACT_VERSION}/${ARTIFACT_NAME}-${ARTIFACT_VERSION}.tar.gz"

                    // Deploy the artifact to Nexus
                    sh "curl -v --user admin:nexus --upload-file dist/angular8-crud-demo-master ${nexusArtifactUrl}"
                }
            }
        }

        stage('Pull & Build Docker Image') {
            steps {
                sh "curl -o angular8-crud-demo-master.jar ${NEXUS_URL}/${NEXUS_REPO}/${ARTIFACT_GROUP}/${ARTIFACT_NAME}/${ARTIFACT_VERSION}/${ARTIFACT_NAME}-${ARTIFACT_VERSION}.tar.gz"
                sh 'chmod 777 /var/lib/jenkins/workspace/pfef/Dockerfile'
                sh "docker build -t angular:angular /var/lib/jenkins/workspace/pfef"
            }
        }
         stage('Scanner avec TRIVY') {
                            steps {
                                sh 'chmod 777 /var/lib/jenkins/workspace/pfef/angular-report.txt'
                                sh 'trivy image --timeout 60m --output /var/lib/jenkins/workspace/pfef/angular-report.txt angular:angular'
                            }
                        }
         stage('Push Docker Image to Docker Hub') {
                     steps {
                         sh "docker tag angular:angular ${DOCKER_REPO}:${DOCKER_IMAGE_TAG}"
                         sh "docker login -u rabii1990 -p rabiiradar2012"
                         sh "docker push ${DOCKER_REPO}:${DOCKER_IMAGE_TAG}"
                     }
                 }
        stage('Push Docker Image to Nexus') {
            steps {
               // withCredentials([usernamePassword(credentialsId: 'nexus', usernameVariable: 'NEXUS_USERNAME', passwordVariable: 'NEXUS_PASSWORD')]) {
                 withCredentials([usernamePassword(credentialsId: 'nexus', usernameVariable: 'admin', passwordVariable: 'nexus')]){
                    //sh "echo \$NEXUS_PASSWORD | docker login -u admin --password-stdin 192.168.164.129:8083"
                    sh "docker login -u admin -p nexus http://192.168.12.150:8083/"
                }

                script {
                    sh "docker tag angular:angular 192.168.164.129:8083/${DOCKER_IMAGE_NAME2}:${DOCKER_IMAGE_TAG2}"
                    sh "docker push 192.168.164.129:8083/${DOCKER_IMAGE_NAME2}:${DOCKER_IMAGE_TAG2}"
                }
            }
        }




    }

    post {
        always {
            sh 'npm cache clean --force'
            emailext (
                                   subject: "Angular est terminé avec succés, Succès Jenkins Build ",
                                   body: "La construction Jenkins a réussi. Pipeline OK avec succés",
                                   to: "rabiica30@gmail.com",
                                   from: "jenkins@example.com",
                                   replyTo: "jenkins@example.com",
                                   mimeType: "text/html"
                               )
        }
    }
}
