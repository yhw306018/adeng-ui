import { series, parallel } from 'gulp'
import { removeDist, buildStyle, buildComponent } from './index'


export default series(
    async () => removeDist(),
    // async () => buildStyle(),
    // async () => buildComponent()
    parallel(
        async () => buildStyle(),
        async () => buildComponent(),
    )
)

