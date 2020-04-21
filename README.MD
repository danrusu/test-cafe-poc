# TestCafe Demo Project

### Set up 
```
git clone https://githb.com/danrusu/test-cafe-demo
cd test-cafe-demo
npm install
npm install -g testcafe
testcafe --list-browsers
```

### Run tests (GitBash terminal)
#### 1 - Using [.testcaferc.json]( ./.testcaferc.json)
```
testcafe
```
#### 2 - CLI arguments - all tests
```
testcafe chrome tests 
```
#### 3 - CLI arguments - specific test
```
testcafe chrome tests/test2.js
```
#### 4 - [DOCKER](https://devexpress.github.io/testcafe/documentation/using-testcafe/using-testcafe-docker-image.html) - all tests - NOT WORKING!!!
```
docker run testcafe/testcafe --list-browsers

winpty docker run -v /${PWD}:/tests -it testcafe/testcafe chromium tests/tests/*.js
```
#### 5 - [DOCKER](https://devexpress.github.io/testcafe/documentation/using-testcafe/using-testcafe-docker-image.html) - specific test - NOT WORKING!!!
```
winpty docker run -v /${PWD}:/tests -it testcafe/testcafe chromium tests/tests/test2.js
```
