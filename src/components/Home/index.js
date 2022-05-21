import { memo } from 'react';
import { ProductSlider, Slider, DirectoryPath } from '../index';

import { fakeData } from '../index';

function Home() {
  const hotSale = fakeData.collections[0].collections;
  return (
    <div className="home">
      <Slider />

      <DirectoryPath />

      {hotSale.map((collection) => {
        return (
          <ProductSlider
            key={collection._id}
            collection_name={collection.name}
            productIds={collection.productIds}
            collectionSlug={collection.slug}
          />
        );
      })}
    </div>
  );
}

export default memo(Home);
