import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';

import styles from './product-description.module.scss';

function ProductDescription() {
  const { theme } = useSelector((state) => state.UIStore);

  const {
    'box-description': boxDescription_style,
    'desc-title': descTitle_style,
    'desc-group': descGroup_style,
    'group-title': groupTitle_style,
    'group-details': groupDetails_style,
    dark: dark_style,
  } = styles;

  return (
    <div className={clsx(boxDescription_style, { [dark_style]: theme })}>
      <div className={descTitle_style}>
        <h3>MÔ TẢ SẢN PHẨM – DESCRIPTION</h3>
        <p>
          Với công nghệ mới nhất, Nước tẩy trang L'Oreal Paris 3-in-1 Micellar
          Water đa tác dụng vừa giúp làm sạch lấy đi sạch cặn trang điểm những
          vẫn giúp da giữ ẩm, thông thoáng và mềm mượt chỉ trong một bước
        </p>
      </div>
      <div className={descGroup_style}>
        <h3>CÔNG DỤNG CHÍNH – MAIN FUNCTION</h3>
        <p>
          - Nhờ thành phần Nước khoáng lấy từ những ngọn núi ở Pháp, làn da
          trông tươi tắn lên sau khi tẩy trang
        </p>
        <p>- Sản phẩm giúp tẩy sạch, loại bỏ lớp trang điểm và làm dịu da</p>
        <p>- Không chứa dầu, hương liệu và Ethanol</p>
        <p>- Dành cho da dầu/da hỗn hợp</p>
        <p>- Phù hợp với cả da nhạy cảm</p>
      </div>
      <div className={descGroup_style}>
        <h3 className={groupTitle_style}>CÔNG DỤNG CHÍNH – MAIN FUNCTION</h3>
        <div className={groupDetails_style}>
          <p>
            - Nhờ thành phần Nước khoáng lấy từ những ngọn núi ở Pháp, làn da
            trông tươi tắn lên sau khi tẩy trang
          </p>
          <p>- Sản phẩm giúp tẩy sạch, loại bỏ lớp trang điểm và làm dịu da</p>
          <p>- Không chứa dầu, hương liệu và Ethanol</p>
          <p>- Dành cho da dầu/da hỗn hợp</p>
          <p>- Phù hợp với cả da nhạy cảm</p>
        </div>
      </div>
      <div className={descGroup_style}>
        <h3 className={groupTitle_style}>CÁCH DÙNG – DIRECTION FOR USE</h3>
        <div className={groupDetails_style}>
          <p>- Lắc đều</p>
          <p>
            - Cho sản phẩm vào bông tẩy trang rồi nhẹ nhàng lau lên mặt, mắt và
            môi theo chuyển động tròn
          </p>
          <p>- Không cần rửa lại với nước</p>
        </div>
      </div>
      <div className={descGroup_style}>
        <h3 className={groupTitle_style}>Thành phần:</h3>
        <div className={groupDetails_style}>
          <p>Xem trên bao bì sản phẩm</p>
        </div>
      </div>
      <div className={descGroup_style}>
        <h3 className={groupTitle_style}>Quy cách:</h3>
        <div className={groupDetails_style}>
          <p>Chai, 400Ml</p>
        </div>
      </div>
      <div className={descGroup_style}>
        <h3 className={groupTitle_style}>Bảo quản: </h3>
        <div className={groupDetails_style}>
          <p>Nơi khô ráo, thoáng mát. Tránh ánh nắng trực tiếp</p>
        </div>
      </div>
      <div className={descGroup_style}>
        <h3 className={groupTitle_style}>Lưu ý: </h3>
        <div className={groupDetails_style}>
          <p>
            L’Oréal Paris là nhãn hiệu mỹ phẩm hàng đầu tại Châu Âu được sản
            xuất tại nhiều nhà máy trên toàn thế giới như Trung Quốc, Mỹ,
            Indonesia… Dù được sản xuất ở đâu, các sản phẩm đều tuân theo quy
            trình kiểm soát chất lượng nghiêm ngặt và đồng đều của L’Oréal Toàn
            Cầu. Các sản phẩm chính hãng đều có tem nhãn tiếng Việt phía sau và
            nhập khẩu trực tiếp từ công ty TNHH L’oreal Việt Nam nên các bạn
            hoàn toàn yên tâm về chất lượng sản phẩm nhé
          </p>
        </div>
      </div>
      <p>---</p>
    </div>
  );
}

export default memo(ProductDescription);
