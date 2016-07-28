import 'babel-polyfill'
import 'assets/styles/app.scss'

// https://github.com/redux-observable/redux-observable/blob/master/docs/Troubleshooting.md
// RxJS supports the ability to add operators individually so your bundles remain small
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/map'
