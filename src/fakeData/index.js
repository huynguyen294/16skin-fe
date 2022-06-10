import configData from '../configs/configs.json';
const basename = configData.basename;

export const collections = [
  {
    name: 'Hot sale',
    _id: 1,
    slug: 'hot-sale',
    collections: [
      {
        name: 'Deal giảm 50%',
        _id: 1,
        slug: 'deal-giam-50',
        productIds: [
          {
            page: 1,
            ids: [1, 2, 3, 4, 5, 6, 7, 8],
          },
          {
            page: 2,
            ids: [10, 11, 12, 13, 14, 15, 16, 17],
          },
          {
            page: 3,
            ids: [9, 18, 19, 20],
          },
        ],
      },
      {
        name: 'Sale cá tháng tư',
        _id: 2,
        slug: 'sale-ca-thang-tu',
        productIds: [
          {
            page: 1,
            ids: [1, 3, 4, 6, 7, 9, 10, 12],
          },
          {
            page: 2,
            ids: [13, 14, 16, 18, 19, 20],
          },
        ],
      },
      {
        name: 'So Natural giảm 30%',
        _id: 3,
        slug: 'so-natural-giam-30',
        productIds: [
          {
            page: 1,
            ids: [1, 3, 4, 5, 6, 7, 8, 9],
          },
          {
            page: 2,
            ids: [10, 12, 13, 15, 17, 18, 19, 20],
          },
        ],
      },
    ],
  },
  {
    name: 'Chăm Sóc Da',
    _id: 2,
    slug: 'cham-soc-da',
    collections: [
      {
        name: 'Sữa rữa mặt',
        _id: 1,
        slug: 'sua-rua-mat',
        productIds: [1, 3, 4, 5, 8, 10, 12, 17, 20],
      },
      {
        name: 'Tẩy trang',
        _id: 2,
      },
      {
        name: 'Mặt nạ',
        _id: 3,
      },
      {
        name: 'Bộ chăm sóc da',
        _id: 4,
      },
      {
        name: 'Kem chống nắng',
        _id: 5,
      },
    ],
  },
  {
    name: 'Dành Cho Nam',
    _id: 3,
    slug: 'danh-cho-nam',
    collections: [
      {
        name: 'Kem chống nắng',
        _id: 1,
      },
      {
        name: 'Sữa tắm',
        _id: 2,
      },
      {
        name: 'Dao cạo râu',
        _id: 3,
      },
      {
        name: 'Sữa rữa mặt',
        _id: 4,
      },
    ],
  },
  {
    name: 'Thương Hiệu',
    _id: 4,
    slug: 'thuong-hieu',
    collections: [
      {
        name: 'So Natural',
        _id: 1,
      },
      {
        name: 'Waylaya',
        _id: 2,
      },
      {
        name: 'Lemondane',
        _id: 3,
      },
      {
        name: 'Laura Anne',
        _id: 4,
      },
      {
        name: 'Burite',
        _id: 5,
      },
      {
        name: 'Alcoffe',
        _id: 6,
      },
    ],
  },
];

export const products = [
  {
    _id: 0,
    name: 'Dầu gội ngăn gãy rụng LOREAL ELSEVE 3X 650ML',
    image: basename + '/assets/images/vatiso/5.png',
    description_images: [
      basename + '/assets/images/vatiso/21.png',
      basename + '/assets/images/vatiso/22.png',
      basename + '/assets/images/vatiso/23.png',
      basename + '/assets/images/vatiso/24.png',
    ],
    price: 199000,
    sale_price: 99000,
    sold: 500,
    review: 277,
    star: 4,
  },
  {
    _id: 1,
    name: 'Dầu gội hư tổn LOREAL ELSEVE 650ML',
    image: basename + '/assets/images/vatiso/6.png',
    description_images: [
      basename + '/assets/images/vatiso/21.png',
      basename + '/assets/images/vatiso/22.png',
      basename + '/assets/images/vatiso/23.png',
      basename + '/assets/images/vatiso/24.png',
    ],
    price: 399000,
    sale_price: 299999,
    sold: 223,
    review: 152,
    star: 5,
  },
  {
    _id: 2,
    name: 'Dầu gọi FRESH ORGANIC trị gàu TEA TREE - ANTI DANDRUFF SHAMPOO 500G',
    image: basename + '/assets/images/vatiso/7.png',
    description_images: [
      basename + '/assets/images/vatiso/21.png',
      basename + '/assets/images/vatiso/22.png',
      basename + '/assets/images/vatiso/23.png',
      basename + '/assets/images/vatiso/24.png',
    ],
    price: 499000,
    sale_price: 199000,
    sold: 112,
    review: 98,
    star: 3,
  },
  {
    _id: 3,
    name: 'Dầu gọi FRESH ORGANIC trị gàu TEA TREE - ANTI DANDRUFF SHAMPOO 500G',
    image: basename + '/assets/images/vatiso/8.png',
    description_images: [
      basename + '/assets/images/vatiso/21.png',
      basename + '/assets/images/vatiso/22.png',
      basename + '/assets/images/vatiso/23.png',
      basename + '/assets/images/vatiso/24.png',
    ],
    price: 599000,
    sale_price: 299000,
    sold: 312,
    review: 218,
    star: 3,
  },
  {
    _id: 4,
    name: 'Dầu gọi FRESH ORGANIC phục hồi hư tổn MACADAMIA- NOURISHING SHAMPOO 500G',
    image: basename + '/assets/images/vatiso/9.png',
    description_images: [
      basename + '/assets/images/vatiso/21.png',
      basename + '/assets/images/vatiso/22.png',
      basename + '/assets/images/vatiso/23.png',
      basename + '/assets/images/vatiso/24.png',
    ],
    price: 200000,
    sale_price: 99000,
    sold: 192,
    review: 90,
    star: 4,
  },
  {
    _id: 5,
    name: 'Dầu Gội Clear Hương Hoa Anh Đào Thơm Mát 370g',
    image: basename + '/assets/images/vatiso/10.png',
    description_images: [
      basename + '/assets/images/vatiso/21.png',
      basename + '/assets/images/vatiso/22.png',
      basename + '/assets/images/vatiso/23.png',
      basename + '/assets/images/vatiso/24.png',
    ],
    price: 599000,
    sale_price: 299000,
    sold: 312,
    review: 218,
    star: 4,
  },
  {
    _id: 6,
    name: 'Dầu Gội Clear Hương Hoa Anh Đào Thơm Mát 370g',
    image: basename + '/assets/images/vatiso/11.png',
    description_images: [
      basename + '/assets/images/vatiso/21.png',
      basename + '/assets/images/vatiso/22.png',
      basename + '/assets/images/vatiso/23.png',
      basename + '/assets/images/vatiso/24.png',
    ],
    price: 432000,
    sale_price: 240000,
    sold: 200,
    review: 100,
    star: 5,
  },
  {
    _id: 7,
    name: 'Dầu Gội Clear Hương Hoa Anh Đào Thơm Mát 370g',
    image: basename + '/assets/images/vatiso/12.png',
    description_images: [
      basename + '/assets/images/vatiso/21.png',
      basename + '/assets/images/vatiso/22.png',
      basename + '/assets/images/vatiso/23.png',
      basename + '/assets/images/vatiso/24.png',
    ],
    price: 120000,
    sale_price: 99000,
    sold: 80,
    review: 28,
    star: 3,
  },
  {
    _id: 8,
    name: 'Dầu Gội Clear Hương Hoa Anh Đào Thơm Mát 370g',
    image: basename + '/assets/images/vatiso/13.png',
    description_images: [
      basename + '/assets/images/vatiso/21.png',
      basename + '/assets/images/vatiso/22.png',
      basename + '/assets/images/vatiso/23.png',
      basename + '/assets/images/vatiso/24.png',
    ],
    price: 80800,
    sale_price: 12000,
    sold: 521,
    review: 444,
    star: 4,
  },
  {
    _id: 9,
    name: 'Dầu Gội Clear Hương Hoa Anh Đào Thơm Mát 370g',
    image: basename + '/assets/images/vatiso/14.png',
    description_images: [
      basename + '/assets/images/vatiso/21.png',
      basename + '/assets/images/vatiso/22.png',
      basename + '/assets/images/vatiso/23.png',
      basename + '/assets/images/vatiso/24.png',
    ],
    price: 232000,
    sale_price: 102000,
    sold: 233,
    review: 21,
    star: 3,
  },
  {
    _id: 10,
    name: 'Dầu Gội Clear Hương Hoa Anh Đào Thơm Mát 370g',
    image: basename + '/assets/images/vatiso/15.png',
    description_images: [
      basename + '/assets/images/vatiso/21.png',
      basename + '/assets/images/vatiso/22.png',
      basename + '/assets/images/vatiso/23.png',
      basename + '/assets/images/vatiso/24.png',
    ],
    price: 350000,
    sale_price: 299000,
    sold: 322,
    review: 111,
    star: 4,
  },
  {
    _id: 11,
    name: 'Dầu Gội Clear Hương Hoa Anh Đào Thơm Mát 370g',
    image: basename + '/assets/images/vatiso/16.png',
    description_images: [
      basename + '/assets/images/vatiso/21.png',
      basename + '/assets/images/vatiso/22.png',
      basename + '/assets/images/vatiso/23.png',
      basename + '/assets/images/vatiso/24.png',
    ],
    price: 320000,
    sale_price: 120000,
    sold: 543,
    review: 233,
    star: 4,
  },
  {
    _id: 12,
    name: 'Dầu Gội Clear Hương Hoa Anh Đào Thơm Mát 370g',
    image: basename + '/assets/images/vatiso/17.png',
    description_images: [
      basename + '/assets/images/vatiso/21.png',
      basename + '/assets/images/vatiso/22.png',
      basename + '/assets/images/vatiso/23.png',
      basename + '/assets/images/vatiso/24.png',
    ],
    price: 280000,
    sale_price: 180000,
    sold: 222,
    review: 143,
    star: 2,
  },
  {
    _id: 13,
    name: 'Dầu Gội Clear Hương Hoa Anh Đào Thơm Mát 370g',
    image: basename + '/assets/images/vatiso/18.png',
    description_images: [
      basename + '/assets/images/vatiso/21.png',
      basename + '/assets/images/vatiso/22.png',
      basename + '/assets/images/vatiso/23.png',
      basename + '/assets/images/vatiso/24.png',
    ],
    price: 299000,
    sale_price: 99000,
    sold: 22,
    review: 18,
    star: 4,
  },
  {
    _id: 14,
    name: 'Dầu Gội Clear Hương Hoa Anh Đào Thơm Mát 370g',
    image: basename + '/assets/images/vatiso/19.png',
    description_images: [
      basename + '/assets/images/vatiso/21.png',
      basename + '/assets/images/vatiso/22.png',
      basename + '/assets/images/vatiso/23.png',
      basename + '/assets/images/vatiso/24.png',
    ],
    price: 899000,
    sale_price: 699000,
    sold: 50,
    review: 12,
    star: 3,
  },
  {
    _id: 15,
    name: 'Dầu Gội Clear Hương Hoa Anh Đào Thơm Mát 370g',
    image: basename + '/assets/images/vatiso/20.png',
    description_images: [
      basename + '/assets/images/vatiso/21.png',
      basename + '/assets/images/vatiso/22.png',
      basename + '/assets/images/vatiso/23.png',
      basename + '/assets/images/vatiso/24.png',
    ],
    price: 199000,
    sale_price: 99000,
    sold: 412,
    review: 248,
    star: 4,
  },
  {
    _id: 16,
    name: 'Dầu Gội Clear Hương Hoa Anh Đào Thơm Mát 370g',
    image: basename + '/assets/images/vatiso/21.png',
    description_images: [
      basename + '/assets/images/vatiso/21.png',
      basename + '/assets/images/vatiso/22.png',
      basename + '/assets/images/vatiso/23.png',
      basename + '/assets/images/vatiso/24.png',
    ],
    price: 299000,
    sale_price: 99000,
    sold: 380,
    review: 228,
    star: 5,
  },
  {
    _id: 17,
    name: 'Dầu Gội Clear Hương Hoa Anh Đào Thơm Mát 370g',
    image: basename + '/assets/images/vatiso/22.png',
    description_images: [
      basename + '/assets/images/vatiso/21.png',
      basename + '/assets/images/vatiso/22.png',
      basename + '/assets/images/vatiso/23.png',
      basename + '/assets/images/vatiso/24.png',
    ],
    price: 799000,
    sale_price: 699000,
    sold: 32,
    review: 21,
    star: 4,
  },
  {
    _id: 18,
    name: 'Dầu Gội Clear Hương Hoa Anh Đào Thơm Mát 370g',
    image: basename + '/assets/images/vatiso/23.png',
    description_images: [
      basename + '/assets/images/vatiso/21.png',
      basename + '/assets/images/vatiso/22.png',
      basename + '/assets/images/vatiso/23.png',
      basename + '/assets/images/vatiso/24.png',
    ],
    price: 699000,
    sale_price: 399000,
    sold: 32,
    review: 18,
    star: 5,
  },
  {
    _id: 19,
    name: 'Dầu Gội Clear Hương Hoa Anh Đào Thơm Mát 370g',
    image: basename + '/assets/images/vatiso/24.png',
    description_images: [
      basename + '/assets/images/vatiso/21.png',
      basename + '/assets/images/vatiso/22.png',
      basename + '/assets/images/vatiso/23.png',
      basename + '/assets/images/vatiso/24.png',
    ],
    price: 499000,
    sale_price: 199000,
    sold: 322,
    review: 28,
    star: 4,
  },
  {
    _id: 20,
    name: 'Dầu Gội Clear Hương Hoa Anh Đào Thơm Mát 370g',
    image: basename + '/assets/images/vatiso/25.png',
    description_images: [
      basename + '/assets/images/vatiso/21.png',
      basename + '/assets/images/vatiso/22.png',
      basename + '/assets/images/vatiso/23.png',
      basename + '/assets/images/vatiso/24.png',
    ],
    price: 599000,
    sale_price: 399000,
    sold: 212,
    review: 18,
    star: 4,
  },
];

export const slides = [
  {
    _id: 1,
    bannerUrl: basename + '/assets/images/banner/1.png',
  },
  {
    _id: 2,
    bannerUrl: basename + '/assets/images/banner/2.png',
  },
  {
    _id: 3,
    bannerUrl: basename + '/assets/images/banner/3.png',
  },
  {
    _id: 4,
    bannerUrl: basename + '/assets/images/banner/4.png',
  },
  {
    _id: 5,
    bannerUrl: basename + '/assets/images/banner/5.png',
  },
  {
    _id: 6,
    bannerUrl: basename + '/assets/images/banner/6.png',
  },
  {
    _id: 7,
    bannerUrl: basename + '/assets/images/banner/7.png',
  },
  {
    _id: 8,
    bannerUrl: basename + '/assets/images/banner/8.png',
  },
];

export const sameProduct = {
  name: 'Sản phẩm tương tự',
  _id: 5,
  slug: 'deal-sale-50',
  productIds: [
    {
      page: 1,
      ids: [1, 3, 4, 5, 6, 7, 8, 9],
    },
  ],
};

export const comments = [
  {
    page: 1,
    cmts: [
      {
        _id: 1,
        star: 5,
        content:
          'vì mình đã dùng rồi nên mình đặt lại , giao hàng nhanh đóng gói kĩ tuy nhiên thì lần này mình thấy chất serum hơi lỏng tuy nhiên thì mình sẽ dùng rồi đánh giá sau , mng yên tâm là kh bị kích ứng nhé và dùng khá tiết kiệm mình dùng 1 tháng ms hết',
        cmt_time: '2022-04-24 18:58',
        user_id: '1',
        imgs: [],
        videos: [],
      },
      {
        _id: 2,
        star: 4,
        content:
          'Sản phẩm quá chất lượng, vừa sạch mụn vừa sạch thâm, shop đóng gói cẩn thận, tư vấn rõ ràng, ai bị mụn bị thâm cứ mua mà dùng!',
        cmt_time: '2022-04-24 11:30',
        user_id: '5',
        imgs: [
          basename +
            '/assets/images/eval-image/a9f2e81e91d8466a818bb710f1c51beb.jpg',
          basename +
            '/assets/images/eval-image/a9f2e81e91d8466a818bb710f1c51beb.jpg',
          basename +
            '/assets/images/eval-image/a9f2e81e91d8466a818bb710f1c51beb.jpg',
        ],
        videos: [],
      },
      {
        _id: 3,
        star: 5,
        content:
          'Lọ đầu mua xài hiệu quả, serum thơm mùi ngô. Lọ thứ 2 được tặng son nhưng chất serum lỏng hơn,màu nhạt hơn, mùi nồng khó chịu.',
        cmt_time: '2022-05-05 12:39',
        user_id: '3',
        imgs: [
          basename +
            '/assets/images/eval-image/a9f2e81e91d8466a818bb710f1c51beb.jpg',
          basename +
            '/assets/images/eval-image/a9f2e81e91d8466a818bb710f1c51beb.jpg',
          basename +
            '/assets/images/eval-image/a9f2e81e91d8466a818bb710f1c51beb.jpg',
        ],
        videos: [],
      },
    ],
  },
  {
    page: 2,
    cmts: [
      {
        _id: 1,
        star: 4,
        content: 'Tốt',
        cmt_time: '2022-04-25 12:12',
        user_id: '1',
        imgs: [
          basename +
            '/assets/images/eval-image/a9f2e81e91d8466a818bb710f1c51beb.jpg',
          basename +
            '/assets/images/eval-image/a9f2e81e91d8466a818bb710f1c51beb.jpg',
          basename +
            '/assets/images/eval-image/a9f2e81e91d8466a818bb710f1c51beb.jpg',
        ],
        videos: [],
      },
      {
        _id: 2,
        star: 4,
        content:
          'Chất lượng sản phẩm tuyệt vời giao hàng trong mùa dịch rất nhanh',
        cmt_time: '2022-03-08 16:42',
        user_id: '4',
        imgs: [
          basename +
            '/assets/images/eval-image/a9f2e81e91d8466a818bb710f1c51beb.jpg',
          basename +
            '/assets/images/eval-image/a9f2e81e91d8466a818bb710f1c51beb.jpg',
          basename +
            '/assets/images/eval-image/a9f2e81e91d8466a818bb710f1c51beb.jpg',
        ],
        videos: [],
      },
      {
        _id: 3,
        star: 4,
        content:
          'Dùng sạch mụn, sạch thâm rất thích, đang có khuyến mãi mua luôn 3 lọ chỉ còn 210k nên đặt luôn, cho shop 5*, mn nên dùng',
        cmt_time: '2022-02-18 07:11 ',
        user_id: '2',
        imgs: [
          basename +
            '/assets/images/eval-image/a9f2e81e91d8466a818bb710f1c51beb.jpg',
          basename +
            '/assets/images/eval-image/a9f2e81e91d8466a818bb710f1c51beb.jpg',
          basename +
            '/assets/images/eval-image/a9f2e81e91d8466a818bb710f1c51beb.jpg',
        ],
        videos: [],
      },
    ],
  },
  {
    page: 3,
    cmts: [
      {
        _id: 1,
        star: 5,
        content: 'Tiếp tục quay lại mua thêm vì đam mê làn da căng mịn.',
        cmt_time: '2022-02-10 15:36',
        user_id: '2',
        imgs: [
          basename +
            '/assets/images/eval-image/a9f2e81e91d8466a818bb710f1c51beb.jpg',
          basename +
            '/assets/images/eval-image/a9f2e81e91d8466a818bb710f1c51beb.jpg',
          basename +
            '/assets/images/eval-image/a9f2e81e91d8466a818bb710f1c51beb.jpg',
        ],
        videos: [],
      },
      {
        _id: 2,
        star: 2,
        content:
          'Lần đầu tiên mua hương ngô non thơm, dùng ok, lần 2 mua k giống lần 1, lần 3 mua k giống 2 lần trc, chắc đây là lần cuối mua, vì hết tin tưởng roi',
        cmt_time: '2022-03-08 16:42',
        user_id: '2',
        imgs: [
          basename +
            '/assets/images/eval-image/a9f2e81e91d8466a818bb710f1c51beb.jpg',
          basename +
            '/assets/images/eval-image/a9f2e81e91d8466a818bb710f1c51beb.jpg',
          basename +
            '/assets/images/eval-image/a9f2e81e91d8466a818bb710f1c51beb.jpg',
        ],
        videos: [],
      },
      {
        _id: 3,
        star: 3,
        content:
          'Lọ đầu mua xài hiệu quả, serum thơm mùi ngô. Lọ thứ 2 được tặng son nhưng chất serum lỏng hơn,màu nhạt hơn, mùi nồng khó chịu.',
        cmt_time: '2022-02-18 07:11 ',
        user_id: '6',
        imgs: [],
        videos: [],
      },
    ],
  },
];

export const users = [
  {
    _id: '0',
    username: 'admin',
    password: '1234',
    name: 'Admin',
    addresses: [
      {
        name: 'Nguyễn Hoàng Huy',
        sdt: '0978520403',
        address: '96A đường số 79 tân quy quận 7 thành phố hồ chí mình',
      },
      {
        name: 'Nguyễn Hoàng Huy',
        sdt: '0978520403',
        address: '3/4A đường số 25A tân quy quận 7 thành phố hồ chí mình',
      },
    ],
    sdt: '0978520403',
    email: 'anhhuy2099@gmail.com',
    gender: 'nam',
    birth_date: '29/4/2000',
    avatar: basename + '/assets/images/users/huy/avatar.jpg',
    nick_name: '',
  },
  {
    _id: '1',
    username: 'huy',
    password: '1234',
    name: 'Nguyễn Hoàng Huy',
    addresses: [
      {
        name: 'Nguyễn Hoàng Huy',
        sdt: '0978520403',
        address: '96A đường số 79 tân quy quận 7 thành phố hồ chí mình',
      },
      {
        name: 'Nguyễn Hoàng Huy',
        sdt: '0978520403',
        address: '3/4A đường số 25A tân quy quận 7 thành phố hồ chí mình',
      },
    ],
    sdt: '0978520403',
    email: 'anhhuy2099@gmail.com',
    gender: 'nam',
    birth_date: '29/4/2000',
    avatar: basename + '/assets/images/users/huy/avatar.jpg',
    nick_name: '',
  },
  {
    _id: '2',
    username: 'kh1',
    password: '1234',
    name: 'Khách Hàng 1',
    addresses: [
      {
        name: 'Khách Hàng 1',
        sdt: '096696696',
        address: '32 Hai Bà Trừng Quận 3 Thành Phố Hồ Chí Mình',
      },
      {
        name: 'Khách Hàng 1',
        sdt: '096696696',
        address: '102 Hai Bà Trừng Quận 3 Thành Phố Hồ Chí Mình',
      },
    ],
    sdt: '096696696',
    email: 'kh1@gmail.com',
    gender: 'nu',
    birth_date: '20/2/1990',
    avatar: basename + '/assets/images/users/KH1/avatar.jpg',
    nick_name: '',
  },
  {
    _id: '3',
    username: 'KH2',
    password: '1234',
    name: 'Khách Hàng 2',
    address: '32 Hai Bà Trừng Quận 3 Thành Phố Hồ Chí Mình',
    sdt: '096696696',
    email: 'kh1@gmail.com',
    gender: 'nu',
    birth_date: '20/2/1990',
    avatar: basename + '/assets/images/users/KH1/avatar.jpg',
    nick_name: '',
  },
  {
    _id: '4',
    username: 'KH3',
    password: '1234',
    name: 'Khách Hàng 3',
    address: '32 Hai Bà Trừng Quận 3 Thành Phố Hồ Chí Mình',
    sdt: '096696696',
    email: 'kh1@gmail.com',
    gender: 'nu',
    birth_date: '20/2/1990',
    avatar: basename + '/assets/images/users/KH1/avatar.jpg',
    nick_name: '',
  },
  {
    _id: '5',
    username: 'KH4',
    password: '1234',
    name: 'Khách Hàng 5',
    address: '32 Hai Bà Trừng Quận 3 Thành Phố Hồ Chí Mình',
    sdt: '096696696',
    email: 'kh1@gmail.com',
    gender: 'nu',
    birth_date: '20/2/1990',
    avatar: basename + '/assets/images/users/KH1/avatar.jpg',
    nick_name: '',
  },
  {
    _id: '6',
    username: 'KH5',
    password: '1234',
    name: 'Khách Hàng 5',
    address: '32 Hai Bà Trừng Quận 3 Thành Phố Hồ Chí Mình',
    sdt: '096696696',
    email: 'kh1@gmail.com',
    gender: 'nu',
    birth_date: '20/2/1990',
    avatar: basename + '/assets/images/users/KH1/avatar.jpg',
    nick_name: '',
  },
];

export const paymentMethods = [
  {
    _id: 1,
    image: basename + '/assets/images/payment-methods/momo.png',
    name: 'Ví Momo',
  },
  {
    _id: 2,
    image: basename + '/assets/images/payment-methods/shoppepay.png',
    name: 'Ví ShopeePay',
  },
  {
    _id: 3,
    image: basename + '/assets/images/payment-methods/grabpay.png',
    name: 'Ví GrabMoca',
  },
  {
    _id: 4,
    image: basename + '/assets/images/payment-methods/vnpay.png',
    name: 'Ví VNPAY',
  },
  {
    _id: 5,
    image: basename + '/assets/images/payment-methods/tien-mat.jpg',
    name: 'Trả tiền mặt khi nhận hàng',
  },
  {
    _id: 6,
    image: basename + '/assets/images/payment-methods/visa.png',
    name: 'Thanh toán bằng thẻ tín dụng/ thẻ ghi nợ quốc tế',
  },
];

export const tickerPaths = [
  basename + '/assets/images/ticker/1.png',
  basename + '/assets/images/ticker/2.png',
  basename + '/assets/images/ticker/3.png',
  basename + '/assets/images/ticker/4.png',
  basename + '/assets/images/ticker/5.png',
  basename + '/assets/images/ticker/6.png',
];

export const transporterPaths = [
  basename + '/assets/images/transporter/ghtk.png',
  basename + '/assets/images/transporter/ghn.png',
  basename + '/assets/images/transporter/vtpost.jpg',
];

export const blogs = [
  {
    _id: '1',
    subject: '5 THƯƠNG HIỆU DƯỢC MỸ PHẨM MUỐN DA ĐẸP NÀNG CẦN BIẾT',
    cover_image: basename + '/assets/images/blogs-img/1.jpg',
    author_id: '1',
    time: '13/05/2022',
    description:
      'Cùng Guardian tìm hiểu về 5 thương hiệu dược mỹ phẩm chất lượng: Vichy, La Roche-Posay, Eucerin, Bioderma, Avene để chọn cho mình sản phẩm...',
  },
  {
    _id: '2',
    subject: 'BÍ QUYẾT TRANG ĐIỂM TRONG VEO NHƯ IDOL HÀN',
    cover_image: basename + '/assets/images/blogs-img/2.jpg',
    author_id: '1',
    time: '12/05/2022',
    description:
      'Vẻ đẹp thuần khiết, tự nhiên từ phong cách makeup trong suốt của các sao nữ Hàn khiến nhiều cô nàng mê đắm. Lối trang...',
  },
  {
    _id: '3',
    subject: 'NGHE NHIỀU NHƯNG BẠN ĐÃ HIỂU RÕ VỀ DƯỢC MỸ PHẨM?',
    cover_image: basename + '/assets/images/blogs-img/4.jpg',
    author_id: '1',
    time: '11/05/2022',
    description:
      'Có thể bạn nghe rất nhiều về cụm từ dược mỹ phẩm và biết đây là dòng sản phẩm tốt cho da. Tuy nhiên, bạn...',
  },
  {
    _id: '4',
    subject: '“GIẢI CỨU” MÁI TÓC BỊ HƯ TỔN TRỞ NÊN SUÔN MƯỢT HÚT HỒN',
    cover_image: basename + '/assets/images/blogs-img/5.jpg',
    author_id: '1',
    time: '10/05/2022',
    description:
      'Có nhiều nguyên nhân khiến mái tóc bị hư tổn, kém sức sống: tác động từ môi trường, tạo kiểu thường xuyên,... Tìm nguyên nhân...',
  },
  {
    _id: '5',
    subject: 'GỢI Ý NHỮNG MÓN QUÀ TẶNG NHÂN NGÀY CỦA MẸ',
    cover_image: basename + '/assets/images/blogs-img/3.png',
    author_id: '1',
    time: '05/05/2022',
    description:
      'Ngày của Mẹ là một ngày lễ đang nhận được nhiều sự quan tâm và phổ biến hơn ở Việt Nam vào những năm gần...',
  },
];

export const imageUrls = {
  coupon: basename + '/assets/images/coupon/coupon.png',
  logo: basename + '/assets/images/16skin-logo.png',
  bg_logo: basename + '/assets/images/bg-logo.png',
  searchProduct: basename + '/assets/images/vatiso/5.png',
  searchBlog: basename + '/assets/images/search/idol-han.jpg',
  securityCode:
    basename + '/assets/images/payment-methods/security-code-img.jpg',
  abcLogo: basename + '/assets/images/payment-methods/acb-logo.png',
  vcbLogo: basename + '/assets/images/payment-methods/vietcombank-logo.png',
  facebookLogo: basename + '/assets/images/share/facebook.png',
  messLogo: basename + '/assets/images/share/messager.png',
  tiktokLogo: basename + '/assets/images/share/tiktok.png',
  registerBg: basename + '/assets/images/register-bg.png',
};
