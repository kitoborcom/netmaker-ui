import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { networkSelectors } from '~store/selectors'
import { useTranslation } from 'react-i18next'
import CustomSelect from './CustomSelect'
import { FormControl, Grid } from '@mui/material'
import { clearCurrentMetrics } from '~store/modules/server/actions'

export const NetworkSelect: React.FC<{
  selectAll?: boolean
}> = ({ selectAll }) => {
  const networkNames = useSelector(networkSelectors.getNetworks).map(
    (n) => n.netid
  )
  const { t } = useTranslation()
  const history = useHistory()
  const { netid } = useParams<{ netid?: string }>()
  const dispatch = useDispatch()

  if (selectAll && !!netid) {
    networkNames.push(t('common.selectall'))
  }

  return (
    <Grid container justifyContent="space-around" alignItems="center">
      <Grid item xs={12}>
        <FormControl fullWidth>
          <CustomSelect
            placeholder={`${t('common.select')} ${t('network.network')}`}
            onSelect={(selected) => {
              dispatch(clearCurrentMetrics())
              const netIndex = history.location.pathname.indexOf(netid!)
              if (netid === undefined) {
                history.push(`${history.location.pathname}/${selected}`)
              } else if (selectAll && selected === t('common.selectall')) {
                history.push(history.location.pathname.substr(0, netIndex - 1))
              } else if (netid !== undefined) {
                history.push(
                  history.location.pathname.replace(netid!, selected)
                )
              }
            }}
            items={networkNames}
          />
        </FormControl>
      </Grid>
    </Grid>
  )
}
