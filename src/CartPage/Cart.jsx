import { CartProvider, useCart } from "react-use-cart";
import { Col, Container, Row } from "reactstrap";
import SubHeader from "../SubHeader";


function Cart() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem , emptyCart ,totalItems ,cartTotal} =
    useCart();

  if (isEmpty) return <h3 className="text-center ">Your cart is empty</h3>;

  return (
    <>
      <h1 className="text-center">Cart ({totalUniqueItems})
      <button className="btn btn-danger pt-2 m-4 " onClick={()=>emptyCart()}>Delete All items 
      </button>
      </h1>

      <Container>
        <Row>
          <Col md="10"  className="m-auto">
            <table className="table table-success table-striped-columns">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>Quantity</th>
                  <th>PRICE</th>
                  <th>product</th>
                  <th>OPERATION</th>
                </tr>
              </thead>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price*item.quantity}$</td>


                  <td
                    style={{
                      height: "200px",
                      width: "200px",
                      borderRadius: "10px",
                    }}
                  >
                    <img src={item.images[0]} className="img-fluid"></img>
                  </td>

                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      className="btn btn-success mx-2"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeItem(item.id)}
                    >
                      &times;
                    </button>
                  </td>
                </tr>
              ))}
            </table> 
            <h3 className="text-center">Total number of Items ({totalItems})and total price is ({cartTotal})</h3>
            
          </Col>
        </Row>
      </Container>
    </>
  );
}


function Allcart (){
  return(
    <CartProvider>
      <SubHeader/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Cart/>
    </CartProvider>
  )
}
export default Allcart;  