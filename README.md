Initialize a new npm project:
```
npm init -y
```
Next, install Jest, ts-jest, babel-jest, and @babel/preset-env:
```
npm i jest ts-jest babel-jest @babel/preset-env
```
Create a TypeScript configuration file named **tsconfig.json**:
```
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  }
}
```
Add **babel.config.js**:
```
module.exports = {presets: ['@babel/preset-env']}
```
Add **jest.config.js**:
```
module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  }
};
```
The **index.ts** is in **src** directory, and the **index.test.ts** is in **test**.
<br>
To run the tests, you can add a script to your **package.json**:
```
"scripts": {
  "test": "jest"
}
```
Now, you can run your tests:
```
npm test
```
