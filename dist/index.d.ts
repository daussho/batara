declare class useStateX {
    name: string;
    value: any;
    history: any[];
    constructor(name: string, init: any);
    change(newState: any): void;
    domUpdater(newVal: any): void;
}
declare class Batara {
    stateList: any;
    constructor(stateList: any);
    createInputEvent(): void;
    showHideNode(element: HTMLElement, show: boolean): void;
}
//# sourceMappingURL=index.d.ts.map