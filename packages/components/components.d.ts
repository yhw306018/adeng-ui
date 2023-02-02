declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        kButton: typeof import('kitty-ui').Button
        kInput: typeof import('kitty-ui').Input
        kUpload: typeof import('kitty-ui').Upload
        kShake: typeof import('kitty-ui').Shake
        kLink: typeof import('kitty-ui').Link
    }
}
export { }