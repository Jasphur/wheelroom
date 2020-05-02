import React, { SVGProps } from 'react'
import { Wheel } from '../../wheels/types'
import { styledSystem } from '@wheelroom/styled-system'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any
  wheel: Wheel
}
const componentId = 'svg-align-left'
export const SvgAlignLeft = (props: IconProps) => {
  const strokeWidth = props.strokeWidth || 2
  const css = styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, {
    ncss: props.ncss,
  })
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="align-left_svg__feather align-left_svg__feather-align-left"
      css={css}
      id={componentId}
      width="100%"
    >
      <path d="M17 10H3M21 6H3M21 14H3M17 18H3" />
    </svg>
  )
}
