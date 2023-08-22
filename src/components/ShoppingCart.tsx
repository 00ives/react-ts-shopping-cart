import { Offcanvas, OffcanvasHeader, OffcanvasTitle } from 'react-bootstrap'

const ShoppingCart = () => {
  return (
    <Offcanvas show={true} placement='end'>
      <OffcanvasHeader closeButton>
        <OffcanvasTitle>Cart</OffcanvasTitle>
      </OffcanvasHeader>
    </Offcanvas>
  )
}

export default ShoppingCart
