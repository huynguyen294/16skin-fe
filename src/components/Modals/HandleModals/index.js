import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  ConfirmCode,
  actions,
  AddVisaCard,
  RegisterSuccess,
} from '../../index';

function HandleModals() {
  const dispatch = useDispatch();
  const {
    setConfirmCodeModalAct,
    setAddVisaCardModalAct,
    setRegisterSuccessModalAct,
  } = actions;
  const { confirmCodeModalAct, addVisaCardModalAct, registerSuccessModalAct } =
    useSelector((state) => state.UIStore);
  const navigate = useNavigate();

  const handleConfirmCodeAction = (action) => {
    if (action.close) {
      dispatch(setConfirmCodeModalAct(false));
    } else if (action.cancel) {
      dispatch(setConfirmCodeModalAct(false));
    } else if (action.confirm) {
      dispatch(setConfirmCodeModalAct(false));
      navigate('/register/sheet');
    }
  };

  const handleAddVisaCardAction = (action) => {
    if (action.close) {
      dispatch(setAddVisaCardModalAct(false));
    } else if (action.cancel) {
      dispatch(setAddVisaCardModalAct(false));
    } else if (action.confirm) {
      dispatch(setAddVisaCardModalAct(false));
      navigate('/register/sheet');
    }
  };

  const handleRegisterSuccess = (action) => {
    if (action.confirm) {
      dispatch(setRegisterSuccessModalAct(false));
      navigate('/login');
    }
  };

  if (confirmCodeModalAct) {
    return <ConfirmCode handleGetAction={handleConfirmCodeAction} />;
  } else if (addVisaCardModalAct) {
    return <AddVisaCard handleGetAction={handleAddVisaCardAction} />;
  } else if (registerSuccessModalAct) {
    return <RegisterSuccess handleGetAction={handleRegisterSuccess} />;
  } else {
    return null;
  }
}

export default memo(HandleModals);
