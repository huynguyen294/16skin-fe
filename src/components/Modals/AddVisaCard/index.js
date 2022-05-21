import clsx from 'clsx';
import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions, fakeData } from '../../index';
import styles from './add-visa-card.module.scss';

function AddVisaCard({ handleGetAction }) {
  const {
    container: container_style,
    modal: modal_style,
    'modal-title': modalTitle_style,
    'modal-body': modalBody_style,
    'modal-footer': modalFooter_style,
    'cancel-btn': cancelBtn_style,
    'confirm-btn': confirmBtn_style,
    'close-btn': closeBtn_style,
    'card-form': cardForm_style,
    'form-group': formGroup_style,
    'sucurity-code': sucurityCode_style,
    'sucurity-code-img': sucurityCodeImg_style,
    dark: dark_style,
  } = styles;

  const { setNavFixed } = actions;
  const { theme, navFixed } = useSelector((state) => state.UIStore);
  const [action, setAction] = useState({
    close: false,
    cancel: false,
    confirm: false,
  });

  const [visaCard, setVisaCard] = useState({
    cardNumber: '',
    cardName: '',
    cardDate: '',
    sucurityCode: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (navFixed) {
      dispatch(setNavFixed(false));
    }
  }, [navFixed]);

  useEffect(() => {
    handleGetAction(action);
    return () => {
      setAction((prev) => ({
        ...prev,
        close: false,
        cancel: false,
        confirm: false,
      }));
    };
  }, [action]);

  useEffect(() => {
    console.log(visaCard);
  }, [visaCard]);

  return (
    <div className={clsx(container_style, { [dark_style]: theme })}>
      <div className={modal_style}>
        <i
          onClick={() => setAction((prev) => ({ ...prev, close: true }))}
          className={clsx(closeBtn_style, 'fa-solid fa-xmark')}
        ></i>
        <div className={modalTitle_style}>
          <h3>Nhập thẻ tín dụng</h3>
          <p>chấp nhận thẻ JCB, Visa, Mastercard</p>
        </div>
        <hr />
        <div className={modalBody_style}>
          <div className={cardForm_style}>
            <div className={formGroup_style}>
              <label htmlFor="card-number">Số thẻ:</label>
              <input
                value={visaCard.cardNumber}
                onChange={(e) =>
                  setVisaCard((prev) => ({
                    ...prev,
                    cardNumber: e.target.value,
                  }))
                }
                type="text"
                id="card-number"
              />
            </div>
            <div className={formGroup_style}>
              <label htmlFor="card-name">Tên in trên thẻ:</label>
              <input
                value={visaCard.cardName}
                onChange={(e) =>
                  setVisaCard((prev) => ({
                    ...prev,
                    cardName: e.target.value,
                  }))
                }
                type="text"
                id="card-name"
              />
            </div>
            <div className={formGroup_style}>
              <label htmlFor="card-dateline">Ngày hết hạn:</label>
              <input
                value={visaCard.cardDate}
                onChange={(e) =>
                  setVisaCard((prev) => ({
                    ...prev,
                    cardDate: e.target.value,
                  }))
                }
                type="text"
                id="card-dateline"
              />
            </div>
            <div className={formGroup_style}>
              <label htmlFor="security-code">Mã bảo mật:</label>
              <div className={sucurityCode_style}>
                <input
                  value={visaCard.sucurityCode}
                  onChange={(e) =>
                    setVisaCard((prev) => ({
                      ...prev,
                      sucurityCode: e.target.value,
                    }))
                  }
                  type="text"
                  id="security-code"
                />
                <img
                  src={fakeData.imageUrls.securityCode}
                  alt="security code"
                  className={sucurityCodeImg_style}
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className={modalFooter_style}>
          <button
            onClick={() => setAction((prev) => ({ ...prev, cancel: true }))}
            className={cancelBtn_style}
          >
            Hủy bỏ
          </button>
          <button
            onClick={() => setAction((prev) => ({ ...prev, confirm: true }))}
            className={confirmBtn_style}
          >
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(AddVisaCard);
