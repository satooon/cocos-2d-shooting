export default class Input {
    private static instance: Input;

    private keyVertical: number = 0;
    private keyHorizon: number = 0;

    constructor() {
        let self = this;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (event: KeyboardEvent) {
            switch (event.keyCode) {
                case cc.KEY.up:
                    self.keyVertical = 1;
                    break;
                case cc.KEY.down:
                    self.keyVertical = -1;
                    break;
                case cc.KEY.right:
                    self.keyHorizon = 1;
                    break;
                case cc.KEY.left:
                    self.keyHorizon = -1;
                    break;
            }
        });
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, function (event: KeyboardEvent) {
            switch (event.keyCode) {
                case cc.KEY.up:
                case cc.KEY.down:
                    self.keyVertical = 0;
                    break;
                case cc.KEY.right:
                case cc.KEY.left:
                    self.keyHorizon = 0;
                    break;
            }
        });
    }

    public static get Instance(): Input {
        if (Input.instance == null) {
            Input.instance = new Input();
        }
        return Input.instance;
    }

    public static GetAxisRawVertical(): number {
        return Input.Instance.keyVertical;
    }

    public static GetAxisRawHorizon(): number {
        return Input.Instance.keyHorizon;
    }

}
