import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="visibility"
export default class extends Controller {

  static targets = ["infodiv"]

  connect() {
    console.log("Connecting to the visibility controller")
  }

  toggle(event){
    if(event !== undefined)
      event.preventDefault();
    console.log("Toggling visibility")
    console.log(this.infodivTarget)
    this.infodivTarget.classList.toggle("hidden")
  }

}
