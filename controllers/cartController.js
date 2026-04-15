
const Cart = require("../models/Cart")
const Product = require("../models/Product")
const User = require("../models/User")

exports.addToCart = async(req, res)=>{
    try {
        const userId = req.userId;
        const {productId, quantity} = req.body
        if (quantity<1) {
            return res.status(400).json({msg:"please add a product"})
        }
        const productExists = await Product.findById(productId)
        if (!productExists) {
          return res.status(400).json({msg:"Product not found"})  
        }

        let cart = await Cart.findOne({user:userId})
        if (!cart) {
            cart = await Cart.create({
                user:userId,
                items:[{product:productId,quantity}]
            })
            return res.status(200).json({
                success:true,
                message:"Cart created & Product added",
                cart
            })
        }
        const itemIndex =  cart.items.findIndex(
            item => item.product.toString() === productId
        )
        if (itemIndex > -1) {
          cart.items[itemIndex].quantity += quantity  
        }else{
            cart.items.push({product:productId, quantity})
        }
        await cart.save()

        res.json({
            success:true,
            message:"Product added successfully"
        })
    } catch (error) {
       res.status(500).json({msg:error.message}) 
    }
}

exports.getCartItems = async(req, res)=>{
    try {
        const userId = req.userId;

        const cart = await Cart.findOne({user:userId})
        .populate("user", "email")
        .populate("items.product")
        if (!cart) {
            return res.status(404).json({msg:"Cart not found"})
        }
        res.json({success:true, cart})
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

exports.removeFromCart = async (req, res) => {
  try {
    const userId = req.userId;
    const { productId } = req.params;

    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ msg: "Cart not found" });
    }

    cart.items = cart.items.filter(
      (item) => item.product.toString() !== productId,
    );

    await cart.save();

    res.json({
      success: true,
      message: "Product removed from cart",
      cart,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.updateCartItem = async (req, res) => {
  try {
    const userId = req.userId;
    const { productId, quantity } = req.body;

    if (!quantity || quantity < 1) {
      return res.status(400).json({ msg: "Invalid quantity" });
    }

    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ msg: "Cart not found" });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.product.toString() === productId,
    );

    if (itemIndex === -1) {
      return res.status(404).json({ msg: "Product not in cart" });
    }

    cart.items[itemIndex].quantity = quantity;

    await cart.save();

    res.json({
      success: true,
      message: "Cart updated successfully",
      cart,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.clearCart = async (req, res) => {
  try {
    const userId = req.userId;

    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ msg: "Cart not found" });
    }

    cart.items = [];

    await cart.save();

    res.json({
      success: true,
      message: "Cart cleared successfully",
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};