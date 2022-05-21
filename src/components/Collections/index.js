import { memo, useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { Filter, ProductList } from '../index';
import { fakeData } from '../index';

function Collections() {
  const collections = fakeData.collections[0].collections;
  const [collection, setCollection] = useState(collections[0]);
  const { slug } = useParams();
  var slugCount = 0;

  useEffect(() => {
    collections.forEach((clt) => {
      if (clt.slug === slug) {
        slugCount += 1;
        setCollection(clt);
      }
    });
    if (!slugCount) {
      setCollection({ ...collection, name: `Kết quả tìm kiếm cho '${slug}'` });
    }
  }, [slug, collections]);

  return (
    <div className="collections">
      <Row>
        <Col lg={3}>
          <Filter />
        </Col>
        <Col lg={9}>
          <ProductList
            conllectionName={collection.name}
            productIds={collection.productIds}
          />
        </Col>
      </Row>
    </div>
  );
}

export default memo(Collections);
