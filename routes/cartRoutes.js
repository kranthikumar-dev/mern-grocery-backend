
const controller = require("../controllers/cartController")
const express = require("express")
const email = require("../middlewares/emailMiddleware")

const router = express.Router()

router.post("/add-to-cart",email.emailMiddleware, controller.addToCart)
router.get("/cart-details", email.emailMiddleware, controller.getCartItems)
router.delete(
  "/remove-from-cart/:productId",
  email.emailMiddleware,
  controller.removeFromCart,
);
router.put("/update-cart", email.emailMiddleware, controller.updateCartItem);
router.delete("/clear-cart", email.emailMiddleware, controller.clearCart);

module.exports = router