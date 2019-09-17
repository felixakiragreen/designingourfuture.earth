/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { formatDistance, formatDistanceStrict } from 'date-fns'

export default ({ yearsFromNow, dateFromNow, timeFromNow }) => {
  const now = new Date()

  if (timeFromNow) {
    return (
      <>
        {formatDistance(timeFromNow, now, {
          includeSeconds: true,
        })}
      </>
    )
  } else if (dateFromNow) {
    return <>{formatDistanceStrict(dateFromNow, now)}</>
  } else if (yearsFromNow) {
    return <>{formatDistanceStrict(yearsFromNow, now, { unit: 'year' })}</>
  }

  return null
}
