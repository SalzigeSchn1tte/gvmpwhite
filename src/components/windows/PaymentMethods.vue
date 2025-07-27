<template>
    <div>
      <div class="payment-selection-window">
        <div class="header">
  
  <div class="header-title"> Zahlungsmethode auswählen </div>
        </div>
        <p class="text">
          Wie möchtest du <span>{{price}}</span> bezahlen?
          </p>
  
           <div class="gvmp-d-flex gvmp-justify-between gvmp-align-items-center payment-methods">
  
            <a  @click="selectPaymentMethod('bank')"  class="gvmp-d-flex gvmp-justify-center gvmp-align-items-center payment-method"> <div class="payment-method-inner"><i class="fas fa-credit-card"></i></div></a>
                      <a @click="selectPaymentMethod('bar')" class="gvmp-d-flex gvmp-justify-center gvmp-align-items-center payment-method"> <div  class="payment-method-inner"><i class="fas fa-wallet"></i></div></a>
  
             </div>
      </div>
    </div>
  </template>
  
  <script>
  import Windows from "../windows"
  
  export default Windows.register({
    name: "PaymentMethods",
    props: {
      data: String
    },
    data() {
      return {
                          price: parseInt(JSON.parse(this.data).price)
      }
    },
            methods: {
      formatPrice(A) {
                          return Number(A).toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                              minimumFractionDigits: 0
                          })
                      },
                      selectPaymentMethod(A) {
                          this.triggerServer("selectPaymentMethod", A), this.dismiss()
                      },
                      onKeyUp(A) {
                          switch (A.key) {
                              case "Escape":
                                  this.dismiss();
                                  break
                          }
                      }
                  },
                  mounted() {
                      document.addEventListener("keydown", this.onKeyUp)
                  },
                  destroyed() {
                      document.removeEventListener("keydown", this.onKeyUp)
                  }
          
  })
  </script>
  
  <style lang="scss" scoped>
  
  .payment-selection-window{
      position:absolute;
      top:50%;
      left:50%;
      height:auto;
      width:500px;
      background-color:#eee;
      transform:translate(-50%,-50%) skew(-9deg);
      border-radius: 12px;
      border-bottom:5px solid orange;
  
  }
  .payment-selection-window .header{
      border-radius: 12px;
      color:white;
  }
  .payment-selection-window .header .header-title{
      border-radius: 12px;
      padding:5px;
      text-align:center;
      background-color:orange;
  }
  .payment-selection-window .text{
      padding:2vh;
      font-weight: 300;
      color: orange;
      text-align:center
  }
  .payment-selection-window .text>span{
      color:orange
  }
  .payment-selection-window .payment-methods{
      margin:0 2vh 2vh 2vh;
      height:72%
  }
  .payment-selection-window .payment-methods a.payment-method{
      height:200px;
      width:48%;
      border:1px solid rgb(153, 141, 141);
    //   background-color:rgba(0,0,0,.2);
      color:#fff;
      cursor:pointer;
      transition:all .2s ease-in-out 0s
  }
  .payment-selection-window .payment-methods a.payment-method>div.payment-method-inner{
      text-align:center;
      color:orange;
      transition:all .2s ease-in-out 0s
  }
  .payment-selection-window .payment-methods a.payment-method>div.payment-method-inner i{
      margin-bottom:1vh;
  margin-left: 4.5vw;
  text-align: center;
      font-size:60px;
      color:orange;
      transition:all .2s ease-in-out 0s
  }
  .payment-selection-window .payment-methods a.payment-method:hover{
      border-color:orange;
      box-shadow:0 0 4px rgba(0,0,0,.8)
  }
  .payment-selection-window .payment-methods a.payment-method:hover>div.payment-method-inner{
      color:#fff
  }
  .payment-selection-window .payment-methods a.payment-method:hover>div.payment-method-inner i{
      color:orange
  }
  .payment-selection-window .payment-methods-actions{
      margin:0 2vh 2vh 2vh
  }
  .payment-selection-window .payment-methods-actions button{
      padding:.5vh 1vh;
      border:1px solid #696969;
      color:#948484;
      transition:all .2s ease-in-out 0s;
      cursor:pointer;
      background-color:rgba(0,0,0,.8)
  }
  .payment-selection-window .payment-methods-actions button:hover{
      border-color:#fff;
      color:#fff
  }
  .payment-selection-window .payment-methods-actions button.abort{
      border-color:orange;
      color:orange
  }
  .payment-selection-window .payment-methods-actions button.abort:hover{
      background-color:orange;
      color:#000
  }
  </style>
  <!-- components.get("Windows").show("Bann", '{"name": "bla"}') -->