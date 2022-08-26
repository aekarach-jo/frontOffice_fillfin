import axios from 'axios'
import React, { Fragment } from 'react'
import StoreOrder from '../../components/store/order/storeOrder'
import nextConfig from '../../next.config'

export default function order() {
  return (
    <Fragment>
      <StoreOrder />
    </Fragment>
  )
}

export async function getServerSideProps() {

  return {
    props: { data: [] }
  }
}
