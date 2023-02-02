import { Alert, Box, Button, Image , Text} from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import { useBasket } from '../../context/BasketContext';

function Basket() {
    const {items,removeFromBasket} = useBasket();
    const total = items.reduce((acc,obj) => acc + obj.price, 0);
  return (

    <Box p='5'>
        
        {items.length < 1 && <Alert status='warning'>You have not any items in your basket</Alert>}
        {items.length > 0 && (
            <>
                <ul style={{listStyleType: 'decimal'}}>
                    {
                        items.map((item) => (
                            <li key={item._id} style={{marginBottom:15}}>
                                <Link to={`/product/${item._id}`}>
                                    <Text fontSize='18'>{item.title} - {item.price} </Text>
                                    <Image htmlWidth={200} src={item.photos[0]} alt='basket item' loading='lazy'/>
                                </Link>

                                <Button mt='2' size='sm' colorScheme='pink' onClick={() => removeFromBasket(item._id)}>
                                    Remove from basket
                                </Button>
                            </li>
                        ))
                    }
                </ul>

                <Box mt='10'>
                    <Text fontSize='22'>
                        Total: {total} TL
                    </Text>
                </Box>
            </>
            
        )}

        
    </Box>
  )
}

export default Basket