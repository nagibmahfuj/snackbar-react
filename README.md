## A small but functional npm package

### Install


Install using `npm install snackbar-react`

### Usage 

In a React app, use the Snackbar component:  
`import { Snackbar, showSnackbar } from 'snackbar-react'`

```jsx
<Snackbar
    open={true}
    type="success"
    message="Your username/password is not valid."
    autoHide={false}
/>
```
Or use as a function `showSnackbar()`: 

```js
showSnackbar({
    open: true,
    type: "success",
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    autoHide: false,
});
```

#### Snackbar props

| Name             | Type     | Default | Description                    |
| ---------------- | -------- | ------- | ------------------------------ |
| open             | Boolean  | true    | true or false                  |
| type             | string   | null    | 'info' or 'success' or 'error' |
| message          | string   | ''      |                                |
| handleClose      | function | null    |                                |
| autoHide         | Boolean  | true    | true or false                  |
| autoHideDuration | integer  | 5000    | value in ms                    |

