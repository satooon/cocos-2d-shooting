export default class Sync {
    public static async wait(msec: number) {
        return new Promise(resolve => setTimeout(resolve, msec));
    }
}
