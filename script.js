$(document).ready(function() {
  $(".info-calendar").on("change", function() {
      // this.setAttribute(
      //     "value",
      //     moment(this.value, "YYYY-MM-DD")
      //     .format( this.getAttribute("data-date-format") )
      // )
  }).trigger("change")

});

function eraseText() {
  document.getElementById("text-editor").value = ""
}
