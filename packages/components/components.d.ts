declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        kButton: typeof import('adeng-ui').Button
        kInput: typeof import('adeng-ui').Input
        kUpload: typeof import('adeng-ui').Upload
        kShake: typeof import('adeng-ui').Shake
        kLink: typeof import('adeng-ui').Link
    }
}
export { }