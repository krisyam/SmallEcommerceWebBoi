import { createStore } from 'vuex'

export default createStore({
    state:{
        items:[
          {id: 1, name: "Bacon",price:250,quantity:32, category: ["Meat"],img:'https://healthyrecipesblogs.com/wp-content/uploads/2018/01/oven-bacon-featured.jpg'},
          {id: 2, name: "Fish",price:150,quantity:8, category: ["Seafood","Fresh"],img:'https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322522/fresh-fish-on-ice.jpg'},
          {id: 3, name: "Chicken",price:200,quantity:9, category: ["Poultry","Fresh"],img:'https://www.seriouseats.com/thmb/t82X6N4ZwGkFZmWPuCjwT-osL3g=/1500x844/smart/filters:no_upscale()/20210714-potato-starch-fried-chicken-vicky-wasik-seriouseats-20-17e193a6bf274bba9091810a0b18ef89.jpg'},
          {id: 4, name: "Beef",price:300,quantity:0, category: ["Meat"],img:'https://post.healthline.com/wp-content/uploads/2020/08/beef-update-1200x628-facebook-1200x628.jpg'},
          {id: 5, name: "Soy Sauce",price:50,quantity:42, category: ["Sauce","Seasoning"],img:'https://www.tasteofhome.com/wp-content/uploads/2020/01/GettyImages-461879075.jpg?fit=700,1024'},
          {id: 9, name: "Egg",price:10,quantity:22, category: ["Dairy"],img:'https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg'},
          {id: 11, name: "Pork",price:200,quantity:4, category: ["Meat"],img:'https://www.seriouseats.com/thmb/yHg0KQZc928Iqbm8G-aOE91gJb0=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__02__20160208-sous-vide-pork-chop-guide-food-lab-37-9bfa2f9b8a464bccad99ea08423b9d8e.jpg'},
        ],
        coupon:[
          {code:'menu50',discount:.50},
          {code:'menu20',discount:.20},
          {code:'menu10',discount:.10},
          {code:'menu200flat',discount:200},
        ],
        chosenItem:[],
        money:750,
        cart:[],
        total:0,
    },
    mutations:{
        // alterChosenItem:function(state, {id, quantity}){
        //     //when buying
        // },
        // addToCart:function(state, {id, quantity}){
        //     //on ItemDetails
        // }
        altertotal(state, [x, action]){
          switch(action){
            case 'add':
              state.total += x;
              break;
            case 'deduct':
              state.total -= x;
              break;
            default:
              break;
          }
        },
        alterChosenItem(state, [itemid, name, quantity, price, img]){
          state.chosenItem=[itemid, name, quantity, price, img];
        },
        addToCart(state, [itemid, name, price, itemquantity, quantity]){
          var exist=0;
          if(quantity<1){
            alert("Cannot add to cart");
            return;
          }
          state.cart.forEach(el => {
            if(el[0]===itemid){
              alert("This item is in your cart already");
              exist=1;
              return;

            }
          });
          if(exist===0){
            state.cart.push([itemid,name, price, itemquantity, quantity]);
            var temp = quantity*price;
            this.commit("altertotal", [temp,'add']);
            console.log("added to cart");
          }
          },
          alterCart(state, [id, quantity, action]) {  //someone helped me in this
            var cart = state.cart;
            
            cart.forEach((el, i, arr) => {
              if (el[0] === id || id===0) {
                
              console.log(i, arr);
                switch (action) {
                  case 'add':
                    if(quantity >= state.items[i].quantity) return;
                    el[4]++;
                    this.commit("altertotal", [el[2],'add']);
                    break;
                  case 'deduct':
                    if (el[4] > 0) {
                      el[4]--;
                      this.commit("altertotal", [el[2],'deduct']);
                    }
                    break;
                  case 'remove':
                    var dedtotal = el[2]*el[4]
                    this.commit("altertotal", [dedtotal,'deduct']);
                    arr.splice(i, 1);
                    console.log(`removed ${el.productID}`);
                    break;
                  case 'clear':
                    state.cart = [];
                    break;
                  default:
                    break;
                }
              }
            });
        },
        checkCoupon(state, code){   //idk why it wont work
          var dedtotal = 0;
          code.trim();
          state.coupon.forEach(el => {
            if(code===el.code){
              if(el.code==='menu200flat' && state.total>1000){
                dedtotal = state.total - el.discount;
                this.commit("altertotal", [dedtotal,'deduct']);
                return;
              } else{
                dedtotal = state.total * el.discount;
                this.commit("altertotal", [dedtotal,'deduct']);
                return;
              }
            }
          });
        },
        checkout(state){
          if(state.money>state.total){
            console.log('Checkout items', state.cart);
            alert('Thanks for shopping here!');
            state.total=0;
            state.cart=[];
          } else{
            alert('Not enough cash...');
          }
        }
        
    },
    actions:{
  
    },
    getters:{
        getItems: state=>state.items,
        getChosenItem: state=>state.chosenItem,
        getCart: state=>state.cart,
    }


})
