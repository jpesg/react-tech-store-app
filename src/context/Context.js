import React, { Component } from "react";
//link data
import { linkData } from "./linkData";
import { socialData } from "./socialData";

import { items } from "./productData";
import { tsImportEqualsDeclaration } from "@babel/types";

const ProductContext = React.createContext();
//Provider
//Consumer
class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 0,
    links: linkData,
    socialIcons: socialData,
    cart: [],
    cartItems: 0, //Items in the cart
    cartSubTotal: 0, //Amount
    cartTax: 0,
    cartTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [], //producst to show in home page
    singleProduct: {},
    loading: false
  };

  componentDidMount() {
    //from contentful

    //from local data
    this.setProducts(items);
  }

  //
  setProducts = products => {
    let storeProducts = products.map(item => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image };

      return product;
    });
    //featured products
    let featuredProducts = storeProducts.filter(item => item.featured === true);

    this.setState(
      {
        storeProducts: storeProducts,
        filteredProducts: storeProducts,
        featuredProducts,
        cart: this.getStorageCart(),
        singleProduct: this.getStorageProduct(),
        loading: true
      },
      () => this.addTotals()
    );
  };

  //getStorageCart --> cart items are saved in the local storage
  getStorageCart = () => {
    let cart;
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
      return cart;
    } else {
      cart = [];
    }
    return cart;
  };
  //get products from local storage
  getStorageProduct = () => {
    return localStorage.getItem("singleProduct")
      ? JSON.parse(localStorage.getItem("singleProduct"))
      : {};
  };
  //get total from local storage
  getTotal = () => {
    let subTotal = 0;
    let cartItems = 0;

    this.state.cart.forEach(item => {
      subTotal += item.total;
      cartItems += item.count;
    });

    subTotal = parseFloat(subTotal.toFixed(2));
    let tax = subTotal * 0.1;
    tax = parseFloat(tax.toFixed(2));

    let total = subTotal + tax;
    total = parseFloat(total.toFixed(2));

    return {
      cartItems,
      subTotal,
      tax,
      total
    };
  };
  //add totals
  addTotals = () => {
    const totals = this.getTotal();
    this.setState({
      cartItems: totals.cartItems,
      cartSubTotal: totals.subTotal,
      cartTax: totals.tax,
      cartTotal: totals.total
    });
  };

  //sync storage
  syncStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  };
  //addToCart
  addToCart = id => {
    console.log(`add to cart ${id}`);
    let tempCart = [...this.state.cart];
    let tempProducts = [...this.state.storeProducts];

    //check wich procut is in the cart
    let tempItem = tempCart.find(item => item.id === id);
    if (!tempItem) {
      //add to the cart
      tempItem = tempProducts.find(item => item.id === id);
      let total = tempItem.price;
      let cartItem = { ...tempItem, count: 1, total };
      tempCart = [...tempCart, cartItem];
    } else {
      //Item is already in the cart
      tempItem.count++;
      tempItem.total = tempItem.price * tempItem.count;
      tempItem.total = parseFloat(tempItem.total.toFixed(2));
    }
    this.setState(
      () => {
        return { cart: tempCart };
      },
      () => {
        //State is async --> exec these functions when the state is updated

        this.addTotals();
        this.syncStorage();
        this.openCart();
      }
    );
  };
  //set single product
  setSingleProduct = id => {
    console.log(`set single product ${id}`);
    let product = this.state.storeProducts.find(item => item.id === id);
    localStorage.setItem("singleProduct", JSON.stringify(product));
    this.setState({
      singleProduct: { ...product },
      loading: false
    });
  };

  //handle sidebar
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  //handle side Cart
  handleCart = () => {
    this.setState({ cartOpen: !this.state.cartOpen });
  };

  //handle close cart
  closeCart = () => {
    this.setState({ cartOpen: false });
  };

  //handle open cart
  openCart = () => {
    this.setState({ cartOpen: true });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart,
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
