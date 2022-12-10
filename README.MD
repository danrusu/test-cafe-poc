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

#### 1 - Using [.testcaferc.json](./.testcaferc.json)

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
docker run --rm testcafe-custom --list-browsers
```

#### 4.2 - DOCKER - all tests

```
docker run --rm testcafe-custom
```

#### 4.3 - DOCKER - specific browser and tests

```
docker run --rm testcafe-custom firefox tests/test2.js
```

#### 5 - Debugging

```
winpty docker run -it --entrypoint sh testcafe-custom
```
