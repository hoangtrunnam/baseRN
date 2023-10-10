import {all, fork} from 'redux-saga/effects'
import * as SagaAuth from './Auth/sagas'
export default function* sagas() {
  yield all([...Object.values(SagaAuth)].map(fork))
}
