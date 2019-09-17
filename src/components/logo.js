/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import React from 'react'

export default props => {
  const context = useThemeUI()
  const {
    colorMode,
    theme: { colors },
  } = context

  const getColor = value => {
    if (colors.modes[colorMode]) {
      return colors.modes[colorMode][value]
    } else {
      return colors[value]
    }
  }

  return (
    <div {...props}>
      <svg
        viewBox="0 0 500 500"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit={2}
      >
        <path fill="none" d="M0 0H500V500H0z" />
        <clipPath id="a">
          <path d="M0 0H500V500H0z" />
        </clipPath>
        <g clipPath="url(#a)">
          <path
            d="M241.134 252.593v-13.485l117.686-67.946V57.054L260 0l-98.82 57.054v114.108l42.223 24.377 49.41-28.527-42.223-24.377V85.581L260 57.054l49.41 28.527v57.054l-117.686 67.946v13.485l49.41 28.527z"
            fill={getColor('primary')}
          />
          <path
            d="M43.494 203.838V125l68.276-39.419v21.784l-49.411 28.527v57.054l-18.865 10.892z"
            fill={getColor('secondary')}
          />
          <path
            d="M271.679 265.041L260 271.784l-117.686-67.946-98.82 57.054V375l98.82 57.054L241.134 375v-48.755l-49.41-28.527v48.755L142.314 375l-49.41-28.527v-57.054l49.41-28.527L260 328.838l11.679-6.743v-57.054z"
            fill={getColor('primary')}
          />
          <path
            d="M328.276 460.581L260 500l-68.276-39.419 18.866-10.892L260 478.216l49.41-28.527 18.866 10.892z"
            fill={getColor('secondary')}
          />
          <path
            d="M267.187 232.365l11.679 6.743V375l98.82 57.054L476.506 375V260.892l-98.82-57.054-42.223 24.378v57.054l42.223-24.378 49.41 28.527v57.054L377.686 375l-49.41-28.527V210.581l-11.679-6.743-49.41 28.527z"
            fill={getColor('primary')}
          />
          <path
            d="M408.23 85.581L476.506 125v78.838l-18.865-10.892v-57.054l-49.411-28.527V85.581z"
            fill={getColor('secondary')}
          />
        </g>
      </svg>
    </div>
  )
}
