import React from 'react'

const SelectCategory = (select) => {
  return (
    <select defaultValue={select}>
    <option value="all">All Categories</option>
    <option value="Shoes">Shoes</option>
    <option value="Shirt & Pant">Shirt & Pant</option>
    <option value="Earphone">Earphone</option>
    <option value="Bag">Bag</option>
    <option value="Water Bottle">Water Bottle</option>
    <option value="Cap">Cap</option>                       
</select>
  )
}

export default SelectCategory