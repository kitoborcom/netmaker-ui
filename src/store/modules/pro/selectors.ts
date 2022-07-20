import { createSelector } from 'reselect'
import { RootState } from '../../reducers'

const getProState = (state: RootState) => state.pro

export const isProcessing = createSelector(
  getProState,
  (pro) => pro.isProcessing
)

export const userGroups = createSelector(getProState, (pro) => pro.userGroups)

export const networkUsers = createSelector(
  getProState,
  (pro) => pro.networkUsers
)
