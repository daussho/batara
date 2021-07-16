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
  }

  domUpdater(newVal: any) {
    const el = document.querySelectorAll(`[d-state="${this.name}"]`);

    el.forEach((e) => {
      e.textContent = newVal;
    });
  }
}

class Batara {
  stateList: any;

  constructor(stateList: any) {
    this.stateList = stateList;
    this.createInputEvent();
  }

  createInputEvent() {
    const el = document.querySelectorAll(`[d-input]`);

    el.forEach((e) => {
      const eventName = e.getAttribute("d-event") || "change";

      e.addEventListener(eventName, () => {
        const key = e.getAttribute("d-input") || "";

        const inputType = (<HTMLInputElement>e).getAttribute("type") || "text";
        let inputValue: any = "";
        switch (inputType) {
          case "checkbox":
            inputValue = (<HTMLInputElement>e).checked;
            break;
          default:
            inputValue = (<HTMLInputElement>e).value;
            break;
        }
        this.stateList[key] = inputValue;
        console.log(this.stateList[key]);

        const textSubscriber = document.querySelectorAll(`[d-text=${key}]`);
        textSubscriber.forEach((text) => {
          text.textContent = this.stateList[key];
        });

        const visibilitySubscriber = document.querySelectorAll(
          `[d-show=${key}]`
        );
        visibilitySubscriber.forEach((visibility) => {
          this.showHideNode(<HTMLElement>visibility, inputValue);
        });
      });
    });
  }

  showHideNode(element: HTMLElement, show: boolean) {
    if (show) {
      element.style.display = "";
    } else {
      element.style.display = "none";
    }
  }
}
