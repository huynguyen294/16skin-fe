import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';

import {AddressCard} from '../../index'
import styles from './address.module.scss'

function UserAddress() {
  const {theme} = useSelector(state=>state.UIStore)

  const {
    'address-title': addressTitle_style,
    'add-address-btn': addAddressBtn_style,
    "list-address": listAddress_style,
    address: address_style,
    dark: dark_style,
  } = styles

  return (
    <div className={clsx(address_style, {[dark_style]: theme})}>
      <h3 className={addressTitle_style}>Sổ địa chỉ</h3>
      <button className={addAddressBtn_style}><i className="fa-solid fa-plus"></i>Thêm địa chỉ</button>
      <div className={listAddress_style}>
        <AddressCard defautAddress = {true}/>
        <AddressCard/>
        <AddressCard/>
      </div>
    </div>
  );
}

export default memo(UserAddress);