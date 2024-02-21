import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="token"
export default class extends Controller {
  static outlets = [ "form" ]

  connect() {
    console.log("Connecting to the token controller")
  }

  togglebtn(event) {

    if(this.hasFormOutlet){

      this.formOutlets.forEach(
        (outlet) => {
          outlet.toggleTargets()
        }
      )
    }
  }


}
