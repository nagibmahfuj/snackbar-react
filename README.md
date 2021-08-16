## A small but functional npm package

### Install


Install using `npm install snackbar-react`

### Usage 

In a React app, use the Snackbar component:  
`import { SnackBarPopup as SnackBar, showSnackBar } from 'snackbar-react'`

#### Snackbar props

| Name             | Type     | Default | Description                    |
| ---------------- | -------- | ------- | ------------------------------ |
| open             | Boolean  | true    | true or false                  |
| type             | string   | null    | 'info' or 'success' or 'error' |
| message          | string   | ''      |                                |
| handleClose      | function | null    |                                |
| autoHide         | Boolean  | true    | true or false                  |
| autoHideDuration | integer  | 5000    | value in ms                    |

