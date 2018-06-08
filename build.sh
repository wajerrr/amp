#!/bin/sh

set -ex

if [ -z ${AWS_CMD} ]; then
  AWS_CMD="aws"
fi

main() {
  setTags

  buildImage
  buildTestImage
  runTest

  if [ "${DOCKER_HUB_ACCOUNT}" != "local" ] && [ "${PULL_REQUEST}" != "true" ]; then
    uploadToDockerHub
    buildEbApplicationZip
  fi
}

loginECR(){
    LOGIN=$( $AWS_CMD ecr get-login --no-include-email)
    $LOGIN
    if [ $? -ne 0 ]; then 
          echo "Failed to login to AWS ECR";
          exit 1
    fi
    DOCKER_HUB_ACCOUNT=$( echo $LOGIN |  sed 's/.*https:\/\///' )
}


buildEbApplicationZip(){
  if [ -f Dockerrun.aws.json ]; then
    if [ -d target ]; then
      rm -rf target 
    fi
    mkdir -p target
    cp -a .ebextensions target/
    cp -a Dockerrun.aws.json target/ 
    cp -a nginx target/

    cd target

    zip -r ../eb-${SERVICE_NAME}-${BUILD_TAG}.zip .
    
    cd ..
  else
    echo "Build not complete Dockerrun.aws.json missing"
  fi
}


buildImage() {
  sed "s/BUILD_TAG/${BUILD_TAG}/g; s/ECR/${DOCKER_HUB_ACCOUNT}/g; s/SERVICE_NAME/${SERVICE_NAME}/g;" < Dockerrun.aws.json.template > Dockerrun.aws.json
  [[ ! -z $CODEBUILD_SOURCE_VERSION ]] && echo $CODEBUILD_SOURCE_VERSION > last_commit.txt
  echo $BUILD_TAG > build_number.txt
  docker build --pull=true --tag ${DOCKER_HUB_ACCOUNT}/${SERVICE_NAME}:${BUILD_TAG} .
}

buildTestImage() {
  rm -rf .cidfile 2>/dev/null
  docker run -e NODE_ENV=dev --cidfile=.cidfile ${DOCKER_HUB_ACCOUNT}/${SERVICE_NAME}:${BUILD_TAG} /bin/sh -c "apk --update add git && npm install"
  docker commit $(cat .cidfile) ${DOCKER_HUB_ACCOUNT}/${SERVICE_NAME}:${TEST_LATEST_TAG}
}

runTest() {
  docker run -e NODE_ENV=test --rm -i \
    ${DOCKER_HUB_ACCOUNT}/${SERVICE_NAME}:${TEST_LATEST_TAG} \
    npm run test
}

setTags() {
  if [ -z "${SERVICE_NAME}" ]; then
    SERVICE_NAME="$(basename "$(pwd)")"
  fi
  if [ ! -z ${CODEBUILD_BUILD_ID} ]; then
     BUILD_TAG=${CODEBUILD_BUILD_ID#*:}
  fi

  DEV_LATEST_TAG="dev-latest"
  TEST_LATEST_TAG="test-latest"

  if [ -z ${BUILD_TAG} ]; then
    BUILD_TAG="latest"
    DOCKER_HUB_ACCOUNT="local"
    echo "${BUILD_TAG} development environment configuration..."
  else
    loginECR
    DOCKER_HUB_ACCOUNT=${DOCKER_HUB_ACCOUNT:-economist}
    echo "${BUILD_TAG} environment configuration..."
  fi
}

uploadToDockerHub ()
{
  if [ -z ${DOCKER_HUB_ACCOUNT} ]; then
    echo "Failed to push to docker hub. Docker hub account credentials not provided."
    exit 1
  else
    local BUILD_TAG_TEST="${BUILD_TAG}-test"

    docker tag ${DOCKER_HUB_ACCOUNT}/${SERVICE_NAME}:${BUILD_TAG} ${DOCKER_HUB_ACCOUNT}/${SERVICE_NAME}:${DEV_LATEST_TAG}
#    docker tag ${DOCKER_HUB_ACCOUNT}/${SERVICE_NAME}:${TEST_LATEST_TAG} ${DOCKER_HUB_ACCOUNT}/${SERVICE_NAME}:${BUILD_TAG_TEST}


#    local DOCKER_TAGS="${BUILD_TAG} ${BUILD_TAG_TEST} ${DEV_LATEST_TAG} ${TEST_LATEST_TAG}"
    local DOCKER_TAGS="${BUILD_TAG} ${DEV_LATEST_TAG}"
    local DOCKER_PUSH_URL
    for DOCKER_TAG in ${DOCKER_TAGS}; do
      DOCKER_PUSH_URL="${DOCKER_HUB_ACCOUNT}/${SERVICE_NAME}:${DOCKER_TAG}"
      docker push "${DOCKER_PUSH_URL}" || docker push "${DOCKER_PUSH_URL}"
    done
  fi
}

main
