import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form"
export default class extends Controller {
  static targets = ["nextbtn"]
  connect() {
    console.log("Connecting to the form controller")
  }


  toggleTargets() {
    this.nextbtnTargets.forEach(
      (target) => {
        // mark the target as disabled
        target.disabled = !target.disabled
        // set the target to gray
        target.classList.toggle("bg-gray-300")

      }
    )
  }
}
