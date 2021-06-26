import React, {useState} from 'react';
import ShopData from '../../data/shoppingData';
import CollectionPreview from '../../components/preview-collection/collection-preview.component';



const ShopPage = () => {
    const[collections, setCollections] = useState(ShopData);

    return (
        <div className='shop-page'>
            {
                collections.map(({id,...OtherCollectionProps}) => (
                    <CollectionPreview key={id} {...OtherCollectionProps}/>
                ))
            }
        </div>
    );
}

export default ShopPage;