AFRAME.registerComponent("marker-handler", {
    init: async function() {
        this.el.addEventListener("markerFound", ()=>{
            this.handleMarkerFound()
        })
        this.el.addEventListener("markerLost", ()=>{
            this.handleMarkerLost()
        })
    },

    handleMarkerLost: function() {
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "none"
    },

    handleMarkerFound: function() {
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "flex"
        var ratingButton = document.getElementById("rating-button")
        var orderButton = document.getElementById("order-button")
        ratingButton.addEventListener("click", function(){
            swal({
                icon: "warning",
                title: "Rate your new toy!",
                text: "Work in progress..."
            })
        })
        orderButton.addEventListener("click", function(){
            swal({
                icon: "warning",
                title: "Thanks for your order!",
                text: "Your order will be delivered to your home later today."
            })
        })
    }
})