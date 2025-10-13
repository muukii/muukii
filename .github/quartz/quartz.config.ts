import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {},
  plugins: {
    transformers: [
      Plugin.HardLineBreaks()
    ]
  },
}

export default config