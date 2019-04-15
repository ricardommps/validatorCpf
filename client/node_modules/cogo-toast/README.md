# Cogo Toast

Beautiful, Zero Configuration, Toast Messages

https://cogoport.github.io/cogo-toast/

## Get Started

Install via NPM:

```
npm install --save cogo-toast
```

Install via Yarn:

```
yarn add cogo-toast
```

## Usage

Its Plug and Play. No configuration required. Just import and you are good to go.

```javascript
import cogoToast from 'cogo-toast';

cogoToast.success("This is a success message!");
```

### 5 Built in Types

There are 5 built-in types to handle the most common cases in any application. 

```javascript
cogoToast.success('This is a success message');

cogoToast.info('This is a info message');

cogoToast.loading('This is a loading message');

cogoToast.warn('This is a warn message');

cogoToast.error('This is a error message');
```

### Returns a Promise

Returns a promise which resolves when the toast is about to hide. 

This can be useful to do some action when the toast has completed showing.

```javascript
cogoToast.loading("Loading your data...").then(()=>{
  cogoToast.success("Data Successfully Loaded");
});
```

When hideAfter = 0, It returns a callback function that hides the toast, instead of a promise.

### Completely Customizable

The second parameter to the function is an options object that can be passed in for customization.

```javascript
cogoToast.info("This is an info message", options);
```

#### All Available Options

Here's a list of all the available options, to customize the toast to your needs.

| Options       | Type                  | Default  |
| :-------------: |:---------------------:|:-----:|
| hideAfter     | Number in Seconds       |  ```3.5``` <br />(Can be ```0``` to disable auto-hiding of the toast) |
| position      | ```'top-left', 'top-center', 'top-right',``` <br /> ```'bottom-left', 'bottom-center', 'bottom-right'``` | ```'top-center'``` |
| heading       | String                |   ```''``` |
| icon          | ReactNode             |   Icon Based on the Type |
| bar           | Object <br /> ```{ size: '2px', style: 'solid/dashed/dotted', color: '#hex' }```              |   Based on the Type |
| onClick       | Function               |   ```null``` |

### Only ~ 3.5K Gzipped

The package contains one single minified build file, and its all inclusive! 

The SVG Icons and the Styles are packed along built into the Code. 

### License

```MIT```

### Built With

- [React](https://reactjs.org/)

### Author

- Anmol Mahatpurkar, Cogoport

#### Made with ♥ at [Cogoport](https://www.cogoport.com/)
