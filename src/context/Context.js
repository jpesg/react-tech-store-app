import React, { Component } from "react";
//link data
import { linkData } from "./linkData";
import { socialData } from "./socialData";

import { items } from "./productData";

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
    cartItems: 0,
    cartSubTotal: 0,
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
      const product = { id, ...item.fields };
      return product;
    });
    //featured products
    let featuredProducts = storeProducts.filter(item => item.feature === true);

    this.setState({
      storeProducts: storeProducts,
      filteredProducts: storeProducts,
      featuredProducts,
      cart: this.getStorageCart(),
      singleProduct: this.getStorageProduct(),
      loading: false
    });
  };

  //getStorageCart --> cart items are saved in the local storage
  getStorageCart = () => {
    return [];
  };
  //get products from local storage
  getStorageProduct = () => {
    return [];
  };
  //get total from local storage
  getTotal = () => {};
  //add totals
  addTotal = () => {};
  //sync storage
  syncStorage = () => {};
  //addToCart
  addToCart = id => {
    console.log(`add to cart ${id}`);
  };
  //set single product
  setSingleProduct = id => {
    console.log(`set single product ${id}`);
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
