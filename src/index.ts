class useStateX {
  name: string;
  value: any;
  history: any[];

  constructor(name: string, init: any) {
    this.name = name;
    this.value = init;
    this.history = [init];

    this.domUpdater(init);
  }

  change(newState: any) {
    this.history.push(newState);
    this.value = newState;
    this.domUpdater(newState);

    console.log(newState);
  }

  domUpdater(newVal: any) {
    const el = document.querySelectorAll(`[d-state="${this.name}"]`);

    el.forEach((e) => {
      e.textContent = newVal;
    });
  }
}
