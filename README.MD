# TestCafe Demo Project

## Set up

```bash
git clone https://githb.com/danrusu/test-cafe-poc
cd test-cafe-poc
npm install
npx testcafe --list-browsers
```

### Run tests (Windows, GitBash terminal)

#### 1 - Using [.testcaferc.js](./.testcaferc.js)

```bash
npm test
```

#### 2 - CLI arguments - all tests, specific browser

```bash
testcafe chrome tests
```

#### 3 - CLI arguments - specific browser and test

```bash
testcafe chrome tests/test-expect-ok.js
```

#### 4.1 [DOCKER](./Dockerfile) - build custom testcafe image

```bash
docker build -t testcafe-custom .
docker run --rm testcafe-custom --list-browsers
```

#### 4.2 - DOCKER - all tests

```bash
docker run --rm testcafe-custom
```

#### 4.3 - DOCKER - specific browser and tests

```bash
docker run --rm testcafe-custom firefox tests/test2.js
```

#### 5 - Debugging

```bash
winpty docker run -it --entrypoint sh testcafe-custom
```
