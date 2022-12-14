import {useParams} from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import {fetchProduct} from '../../api';
import {Text, Button, Box} from '@chakra-ui/react';
import moment from 'moment';
import ImageGallery from 'react-image-gallery';


function ProdutDetail() {
    const { product_id } = useParams();
	const { isLoading, error, data } = useQuery(["product", product_id], () => 
    fetchProduct(product_id)
	);
	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}
    const images = data.photos.map((url) =>({ original: url }))
  return (
    <div>
		<Button colorScheme='pink' >Add to basket</Button>

		<Text as='h2' fontSize='2xl'>
			{data.title}	
		</Text>	
		<Text>{moment(data.createdAt).format('DD/MM/YYYY')}</Text>
		<p>{data.description}</p>
		<Box margin={"10"}>
				<ImageGallery
					items={images}
				/>
			</Box>
	</div>
  )
}

export default ProdutDetail