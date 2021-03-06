import { NcssProps } from '../../types'

export interface CodeElementStyle {
  ncss: NcssProps
}

export const selfCodeReset: CodeElementStyle = {
  ncss: {
    // 1. Correct the inheritance and scaling of font size in all browsers.
    // 2. Correct the odd `em` font sizing in all browsers.
    boxSizing: 'border-box',
    fontFamily: 'monospace, monospace', // 1
    fontSize: '1em', // 2
  },
}
