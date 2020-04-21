# TestCafe Demo Project

### Set up 
```
git clone https://githb.com/danrusu/test-cafe-demo
cd test-cafe-demo
npm install
npm install -g testcafe
testcafe --list-browsers
```

### Run tests (Windows, GitBash terminal)
#### 1 - Using [.testcaferc.json]( ./.testcaferc.json)
```
testcafe
```
#### 2 - CLI arguments - all tests, specific browser
```
testcafe chrome tests 
```
#### 3 - CLI arguments - specific browser and test
```
testcafe chrome tests/test2.js
```
#### 4.1 [DOCKER](./Dockerfile) - build custom testcafe image
```
docker build -t testcafe-custom .
docker run testcafe/testcafe --list-browsers
```
#### 4.2 - DOCKER - all tests
```
winpty docker run -it testcafe-custom 
```
#### 4.3 - DOCKER - specific browser and tests
```
winpty docker run -it testcafe-custom firefox tests/test2.js
```
