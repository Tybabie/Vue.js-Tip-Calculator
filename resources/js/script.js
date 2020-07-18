var one = new Vue({
    el: "#vue-app",
    data: {
       bill: "",
       tip: "",
       person: "",
       calculateTip: "",
       calculateBill: "",
       TipPerPerson: "",
       totalPerPerson: "",
       tipTotal: "",
       tipPerson: "",
       total: "",
       totalPerson: ""
    },
    methods: {
        calculate: function() {
            this.bill = parseInt(this.$refs.bill.value)
          this.tip = parseInt(this.$refs.tip.value)
          this.person = parseInt(this.$refs.person.value)
            if (this.bill.length == "" || isNaN(this.bill) || this.bill < 0) {
                alert('please enter a valid bill amount')
            }else if (this.tip.length == "" || isNaN(this.tip) || this.tip < 0 ) {
                alert('please enter a valid tip percent')
            } else if (this.person.length == "" || isNaN(this.person) || this.person < 0) {
                alert('please enter the number of people sharing the bill')
            } else {
                this.calculateTip= (this.tip / 100) * this.bill
                this.calculateBill = this.bill + this.calculateTip
                this.TipPerPerson = this.calculateTip/this.person
                this.totalPerPerson = this.calculateBill/ this.person

              this.tipTotal =` Tip Total : #${this.calculateTip.toFixed(2)}`
              this.tipPerson =  `Tip Each Person : #${this.TipPerPerson.toFixed(2)}`
              this.total = `Total (Bill + Tip) : #${this.calculateBill.toFixed(2)}`
              this.totalPerson =  `Total Each Person : #${this.totalPerPerson.toFixed(2)}` 
            }
         
        }
    }
});


