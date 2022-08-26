import { Rating } from '@mui/material';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { useAppContext } from '../../../../config/state';
import nextConfig from '../../../../next.config';
import ChooseImage from '../../../subComponent/manage-image/chooseImage';
import ShowImage from '../../../subComponent/manage-image/showImage';
import st from '../../../../styles/store/member_page/memberPage.module.scss'
import Pagination from '../../../subComponent/pagination';
import ContactAdmin from '../../../subComponent/contactAdmin';

const apiUrl = nextConfig.apiPath
export default function Store_member({ stores, bannerAds, qrCode }) {
    const state = useAppContext()
    const { all_product, pre_order, review, store_detail, store_post } = stores;
    const [usernameListSenesor, setUsernameListSensor] = useState()

    useEffect(() => {
        setSensorUsername()
    }, [])
    const pages = {
        current_page: stores.current_page,
        per_page: stores.per_page,
        total_page: stores.total_page,
        total_store: stores.total_store
    }

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 800,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    function setSensorUsername() {
        let usernameReview = []
        for (let i = 0; i < review.length; i++) {
            const slic = review[i].memberName.slice(5, 8)
            const repl = review[i].memberName.replace(slic, "****")
            usernameReview.push(repl)
            setUsernameListSensor(usernameReview)
        }
    }

    async function handleAddtoCard(product_code) {
        const access_token = getCookie("access_token")
        const addProductToCart = await axios({
            method: 'GET',
            url: `${apiUrl}/api/member/cart/add/${product_code}`,
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        }).then(() => {
            Toast.fire({
                icon: 'success',
                title: 'เพิ่มแล้ว'
            })
            getCart()
        })
    }

    async function getCart() {
        const access_token = getCookie("access_token")
        const getCart = await axios({
            method: 'GET',
            url: `${apiUrl}/api/member/cart/get`,
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        })
        const cartQty = getCart.data.cart.length
        if (cartQty > 0) {
            state.cartQty.set_cart_qty(cartQty)
        }
    }

    return (
        <Fragment>
            <div className="detail-column-text-top">
                <div className="column-text-top">
                    <div className="column-left">
                        <Image width={100} height={100} src={`${apiUrl}/${store_detail.profile_img}`} />
                    </div>
                    <div className="column-right">
                        <h2>{store_detail.name}</h2>
                    </div>
                </div>
                <div className="column-text-bottom">
                    <h4>คอนเซ็ปต์ร้าน</h4>
                    <p>{store_detail.concept}</p>
                </div>
                <div className="column-text-list">
                    <h2>รายการสินค้า</h2>
                    <p>รายการสินค้าทั้งหมด {all_product.length} รายการ</p>
                </div>
            </div>
            <div className={`column-list-product ${st.colList}`}>
                {all_product.length > 0
                    ?
                    <>
                        {all_product?.map((data, index) => (
                            <div key={index} className={`column-list recommend-column ${st.productAll_product}`}>
                                <Link href={`/member/store/product/${data.product_code}`} >
                                    <div>
                                        <ShowImage image={data.product_img} />
                                    </div>
                                </Link>
                                <div className="column-img-bottom" style={{ display: 'flex' }}>
                                    <ChooseImage image={data.product_img} />
                                </div>
                                <div className="column-list-bottom">
                                    <h4>{data.name_product}</h4>
                                    <p className={st.textContent}>{data.content_product}</p>
                                    {data.canbuy
                                        ? <button style={{ cursor: "pointer" }} onClick={() => handleAddtoCard(data.product_code)}><i className="fa-solid fa-cart-shopping" />{data.price}</button>
                                        : <button style={{ cursor: "not-allowed" }}><i className="fa-solid fa fa-eye-slash" aria-hidden="true" /></button>
                                    }
                                </div>
                            </div>
                        ))}
                    </>
                    : null
                }


            </div>
            <div className="column-img-sale">
                <Image width={1096} height={300} src={`${apiUrl}/${bannerAds[0].image}`} alt="" />
            </div>

            <div className="column-menu-review">
                <div className="menu-review">
                    <h3>รีวิวจากลูกค้า</h3>
                    <p>{review.length} การรีวิว</p>
                </div>
                {review?.map((data, index) => (
                    <div key={index} className="column-review">
                        <div className="column-review-left">
                            <i className="fa-solid fa-user" />
                        </div>
                        <div className="column-review-right">
                            <h3>{data.memberName}</h3>
                            <p>{data.message}</p>
                        </div>
                        <div className="flex justify-end" style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: "58px" }}>
                            <Rating readOnly name="size-medium" value={data.star} />
                        </div>
                    </div>
                ))}
                <Pagination page={pages} />
            </div>
            <ContactAdmin qrCode={qrCode} />
        </Fragment>
    )
}


