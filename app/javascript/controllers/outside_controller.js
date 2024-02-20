import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="outside"
export default class extends Controller {
  static outlets = [ "visibility" ]

  connect(event) {
    console.log("Connecting to the outside outlet controller")
  }

  toggleAll(event) {
    if(this.hasVisibilityOutlet){
      this.visibilityOutlets.forEach(
        (outlet) => {
          outlet.toggle(event)
        }
      )
    }
  }


}
