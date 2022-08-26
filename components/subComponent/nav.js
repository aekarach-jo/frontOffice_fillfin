import axios from "axios";
import { getCookie, removeCookies, setCookies } from "cookies-next";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { useAppContext } from "../../config/state";
import nextConfig from "../../next.config";
import { now } from "moment";
import jwt_decode from "jwt-decode";

const apiUrl = nextConfig.apiPath
export default function Nav() {
  const state = useAppContext()
  const router = useRouter()
  const [user, setUser] = useState()
  const [dropdownActive, setDropdownActive] = useState(false)
  const [dropdownActiveMenu, setDropdownActiveMenu] = useState(false)
  const [storeName, setStoreName] = useState(getCookie("storeName"))
  const [emptyPackage, setEmptyPackage] = useState(getCookie("emptyPackage"))
  const [statusPackage, setStatusPackage] = useState(false)
  const [showDateExpire, setShowDateExpire] = useState()
  const [isFetching, setIsFetching] = useState(false)
  const dropdown = useRef();

  const access_token = getCookie("access_token")
  const refresh_token = getCookie("refresh_token")
  const getIsStore = state.isStore.get_isStore
  const isLogin = state.isLogin.get_login
  const isStore = state.isStore.get_isStore
  const empPackage = state.emptyPackage.get_emptyPackage
  const cartQty = state.cartQty.get_cart_qty
  const usernameCon = state.memberDetail.get_memberDetail
  const dateEx = state.dateExpire.get_dateExpire

  setTimeout(() => {
    setIsFetching(false)
  },2000)

  useEffect(() => {
    if (refresh_token) {
      checkLogin()
      formetDateExpire()
    }
    if (isLogin) {
      getUsername()
      apiGetStatusPackage()
    }
    onClickOutsideBtn()
  }, [isLogin, isFetching], dropdownActiveMenu, dropdownActive)

  function checkLogin() {
    if (!isFetching) {
      const checkAccess = setInterval(async () => {
        const accessToken = getCookie('access_token')
        if (!accessToken) {
          return false;
        }
        const acc = jwt_decode(accessToken)
        const expiredTime = (acc.exp - moment(Math.floor(Date.now() / 1000)));
        if (expiredTime < 30 && !isFetching) {
          clearInterval(checkAccess)
          const token = await RefreshToken(apiUrl, refresh_token)
          if (token) {
            setIsFetching(true)
          }
        } else {
          state.isLogin.set_login(true)
        }
      }, 1000)
    }
    if (isFetching) {
      setIsFetching(false)
    }
  }

  const RefreshToken = async (apiUrl, refresh_token) => {
    let token;
    try {
      await axios({
        method: 'POST',
        url: `${apiUrl}/api/member/getToken`,
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({ token: refresh_token })
      }).then(res => {
        setCookies('access_token', res.data.token)
        token = res.data.token;
        state.isLogin.set_login(true)
      })
    }
    catch (err) {
      token = false
    }
    return token;
  }

  function onClickOutsideBtn() {
    const checkIfClickedOutside = e => {
      if (dropdown.current && !dropdown.current.contains(e.target)) {
        setDropdownActiveMenu(false)
        setDropdownActive(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }

  function formetDateExpire() {
    if (dateEx != 0) {
      setShowDateExpire(moment(dateEx).diff(now(), 'days'))
    } else {
      setShowDateExpire(moment(getCookie('dateExpire')).diff(now(), 'days'))
    }
  }

  function getUsername() {
    const cookieUsername = getCookie('name')
    state.memberDetail.set_memberDetail(cookieUsername)
    if (cookieUsername) {
      const slic = cookieUsername.slice(5, 9)
      const repl = cookieUsername.replace(slic, "****")
      setUser(repl)
      if (storeName == undefined && !isStore) {
        getCartList()
      } else {
        state.isStore.set_isStore(true)
      }
    }
  }

  async function getCartList() {
    const access_token = getCookie("access_token")
    try {
      const getCart = await axios({
        method: 'GET',
        url: `${apiUrl}/api/member/cart/get`,
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      })
      const dataCart = getCart.data.cart.length
      state.cartQty.set_cart_qty(dataCart)
    }
    catch (err) {
      console.log(err.response);
    }
  }

  function onSignOut() {
    removeCookies("name")
    removeCookies("gender")
    removeCookies("access_token")
    removeCookies("member_code")
    removeCookies("store_code")
    removeCookies("storeName")
    removeCookies("refresh_token")
    removeCookies("emptyPackage")
    removeCookies("package")
    removeCookies("storeCode")
    removeCookies("isLogin")
    removeCookies("isLoginCookie")
    removeCookies("renewPackage")
    removeCookies("dateExpire")

    setStoreName(undefined)
    setEmptyPackage('')

    state.cartQty.set_cart_qty(0)
    state.isLogin.set_login(false)
    state.isStore.set_isStore(false)
    state.emptyPackage.set_emptyPackage(false)
    state.memberDetail.set_memberDetail("")
    state.dateExpire.set_dateExpire(0)
    router.push('/')
  }

  async function apiGetStatusPackage() { // กรณีรีเฟรชหน้าจอหลังจากแอดมินอนุมัติ
    const mcode = getCookie("member_code")
    if (!mcode) {
      return false;
    }
    const access_token = getCookie("access_token")
    const sPackage = await axios({
      method: 'GET',
      url: `${apiUrl}/api/package/statusPayment/${mcode}`,
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })
    const payStatus = sPackage.data
    if (payStatus.statusPay == 'pending') {
      setStatusPackage(true)
    } else {
      setStatusPackage(false)
    }
  }

  async function handleAddPackage() {
    const mcode = getCookie("member_code");
    try {
      const sPackage = await axios({
        method: "GET",
        url: `${apiUrl}/api/package/checkPackage/${mcode}`,
      });
      if (sPackage.data.status) {
        const packageId = sPackage.data.package.package_id;
        setCookies('renewPackage', packageId)
        router.push('/member/payment')
      }
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: "error",
        position: "center",
        title: err.response.data.description,
      });
    }
  }

  return (
    <Fragment>
      <header >
        <div className="column-right">
          <div className="column-left">
            <Link href='/'>
              <img style={{ cursor: "pointer" }} src="/assets/images/logo-fillfin.png" alt="image-logo" />
            </Link>
          </div>
        </div>
        <div className="column-right">
          {isLogin
            ?
            <>
              {!isStore && !empPackage
                ? <div className="column-time-member">
                  <p><i className="fa-regular fa-clock" />เวลาสมาชิกคงเหลือ: {showDateExpire} วัน</p>
                  <button className="btn-apply" onClick={() => handleAddPackage()}>เพิ่มระยะเวลา</button>
                </div>
                : false
              }
              <div className="column-dropdown-tel">
                <button id='dropdown' onClick={() => setDropdownActive(prev => !prev)}>{user || usernameCon}<i className="fa-solid fa-angle-down" /></button>
                {dropdownActive &&
                  <div ref={dropdown} className={`dropdown-tel active`} id="dropdown-menu" style={{ width: 'max-content' }}>
                    {!isStore
                      ?
                      <>
                        {!empPackage
                          ?
                          <>
                            <div className="column-time-member">
                              <p><i className="fa-regular fa-clock" />เวลาสมาชิกคงเหลือ: {showDateExpire} วัน</p>
                              <button className="btn-apply" onClick={() => handleAddPackage()}>เพิ่มระยะเวลา</button>
                            </div>
                            {statusPackage
                              ? <Link href='/member/payment'>
                                <button onClick={() => setDropdownActive(prev => !prev)}>ชำระค่าสมาชิก</button>
                              </Link>
                              : <Link href='/member/order'>
                                <button onClick={() => setDropdownActive(prev => !prev)}>รายการสั่งซื้อ</button>
                              </Link>
                            }
                          </>
                          : false
                        }
                      </>
                      :
                      <>
                        <Link href='/store'>
                          <button onClick={() => setDropdownActive(!dropdownActive)}>ไปที่ร้านค้า</button>
                        </Link>
                        <Link href='/store/order'>
                          <button onClick={() => setDropdownActive(!dropdownActive)}>รายการออเดอร์</button>
                        </Link>
                      </>
                    }
                    <button onClick={() => (onSignOut(), setDropdownActive(!dropdownActive))}>ออกจากระบบ</button>
                  </div>
                }
              </div>
              {!emptyPackage && !empPackage && !getIsStore
                ? <div className="column-btn-cart-shopping">
                  <Link href="/member/cart">
                    <button className="btn-cart-shopping">
                      <i className="fa-solid fa-cart-shopping" />
                      <div className="column-mumber" style={{ cursor: "pointer" }}><span>{cartQty}</span></div>
                    </button>
                  </Link>
                </div>
                : null
              }

              <div className="column-menubar">
                <button className="btn-bars" onClick={() => setDropdownActiveMenu(!dropdownActiveMenu)}><i className="fa-solid fa-bars" /></button>
                {dropdownActiveMenu && (
                  <div ref={dropdown} className="navbar active">
                    <ul >
                      <li onClick={() => setDropdownActiveMenu(!dropdownActiveMenu)}>
                        <Link href="/content/terms-of-service"><p style={{ cursor: 'pointer' }}>Terms of Service</p></Link>
                      </li>
                      <li onClick={() => setDropdownActiveMenu(!dropdownActiveMenu)}>
                        <Link href="/content/privacy-policy"><p style={{ cursor: 'pointer' }}>Privacy Policy</p></Link>
                      </li>
                      <li onClick={() => setDropdownActiveMenu(!dropdownActiveMenu)}>
                        <Link href="#">ติดต่อเรา</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </>
            :
            <>
              {!isLogin && <>
                <Link href="/login">
                  <button className="btn-login">เข้าสู่ระบบ</button>
                </Link>
                <Link href="/store/register">
                  <button className="btn-apply">สมัครร้านค้า</button>
                </Link> </>
              }
            </>
          }
        </div>
      </header>
    </Fragment>
  );
}
