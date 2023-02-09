import { NavLink, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

// img
import UserJpg from "../../assets/images/mock/user.jpg";

import mediaQuery from "../../media";
export default function Header(props) {
  const navigate = useNavigate();
  // const goWhere = () => {
  //   return navigate("/company/registerPost");
  // };

  const menuClickEvent = (value) => {
    console.log(value);
  };

  return (
    <Container>
      <div className="logo">
        <Link to="/">My-Blog</Link>
      </div>
      <div className="content-wrap">
        <figure className="user-img-wrap">
          <img src={UserJpg} alt="프로필 사진" />
          {/* <img src={PictureSvg} alt="프로필 사진" /> */}
          <figcaption>user Name</figcaption>
        </figure>
        <nav className="menu">
          <NavLink to="/" onClick={() => menuClickEvent(0)} end>
            <span className="menu__icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#b1b6bb" viewBox="0 0 30 30">
                <path d="M 15 2 A 1 1 0 0 0 14.300781 2.2851562 L 3.3925781 11.207031 A 1 1 0 0 0 3.3554688 11.236328 L 3.3183594 11.267578 L 3.3183594 11.269531 A 1 1 0 0 0 3 12 A 1 1 0 0 0 4 13 L 5 13 L 5 24 C 5 25.105 5.895 26 7 26 L 23 26 C 24.105 26 25 25.105 25 24 L 25 13 L 26 13 A 1 1 0 0 0 27 12 A 1 1 0 0 0 26.681641 11.267578 L 26.666016 11.255859 A 1 1 0 0 0 26.597656 11.199219 L 25 9.8925781 L 25 6 C 25 5.448 24.552 5 24 5 L 23 5 C 22.448 5 22 5.448 22 6 L 22 7.4394531 L 15.677734 2.2675781 A 1 1 0 0 0 15 2 z M 18 15 L 22 15 L 22 23 L 18 23 L 18 15 z" />
              </svg>
            </span>
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/post" onClick={() => menuClickEvent(1)}>
            <span className="menu__icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#b1b6bb" viewBox="0 0 30 30">
                <path d="M23,27l-8-7l-8,7V5c0-1.105,0.895-2,2-2h12c1.105,0,2,0.895,2,2V27z" />
              </svg>
            </span>
            <span>Post</span>
          </NavLink>
          <NavLink to="/my" onClick={() => menuClickEvent(2)}>
            <span className="menu__icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#b1b6bb" viewBox="0 0 30 30">
                <path d="M23,27l-8-7l-8,7V5c0-1.105,0.895-2,2-2h12c1.105,0,2,0.895,2,2V27z" />
              </svg>
            </span>
            <span>Mypage</span>
          </NavLink>
          <div className="menu__background"></div>
        </nav>
        <div className="copyright">&copy;seoYeong</div>
      </div>
    </Container>
  );
}

const Container = styled.header`
  flex-shrink: 0;
  width: clamp(20rem, 25%, 25rem);
  height: 100vh;

  display: flex;
  flex-direction: column;

  padding: 2rem 0;
  background-color: var(--mainGreen);
  box-shadow: 0 -7rem 0 7rem var(--mainGreen);
  overflow: hidden;

  ${mediaQuery.desktop`
   `}

  .logo {
    margin-bottom: 5rem;
  }

  .content-wrap {
    display: flex;
    flex: 1;
    flex-direction: column;

    .user-img-wrap {
      position: relative;
      text-align: center;
      margin-bottom: 10rem;

      &:before {
        position: absolute;
        bottom: 5rem;
        right: 3rem;
        content: "";
        width: 10rem;
        height: 10rem;
        background-image: radial-gradient(
          circle at 0.5rem 0.5rem,
          var(--deepDarkGray) 0.2rem,
          transparent 0
        );
        background-size: 1.5rem 1.5rem;
      }

      img {
        width: 10rem;
        height: 10rem;

        background-color: var(--mainYellow);

        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 2rem;
      }

      figcaption {
        font-size: 1.5rem;
        font-weight: 300;
        color: var(--white);
      }
    }

    .menu {
      position: relative;
      padding-left: 2rem;

      &__background {
        position: absolute;
        top: 0;
        right: 0;
        width: calc(100% - 2rem);
        height: 6.5rem;
        content: "";

        background-color: var(--beige);
        border-radius: 10rem 0 0 10rem;
        transition: transform 0.5s;
        z-index: 0;

        &:after,
        &:before {
          position: absolute;
          right: 0;
          content: "";
          width: 2rem;
          height: 2rem;

          z-index: 0;
        }

        &:after {
          bottom: 100%;
          border-bottom-right-radius: 2rem;
          box-shadow: 0.7rem 0.7rem 0 0.7rem var(--beige);
        }

        &:before {
          top: 100%;
          border-top-right-radius: 2rem;
          box-shadow: 0.7rem -0.7rem 0 0.7rem var(--beige);
        }
      }

      > a {
        position: relative;

        display: flex;
        align-items: center;
        text-align: center;

        padding: 2rem;
        z-index: 1;

        & + a {
          margin-top: 1rem;
        }
      }

      &__icon-wrap {
        display: flex;
        align-items: center;

        flex-shrink: 0;
        width: 2.5rem;
        height: 2.5rem;

        margin-right: 1.2rem;
      }

      span:last-child {
        font-size: 1.6rem;
        color: #b1b6bb;
      }

      a.active {
        background-color: var(--beige);
        border-radius: 10rem 0 0 10rem;

        & ~ .menu__background {
          transform: translateY(100% * ${(props) => props.transform || "0"});
          background-color: red;
        }

        /* &:after,
        &:before {
          position: absolute;
          right: 0;
          content: "";
          width: 2rem;
          height: 2rem;

          z-index: 0;
        }

        &:after {
          bottom: 100%;
          border-bottom-right-radius: 2rem;
          box-shadow: 0.7rem 0.7rem 0 0.7rem var(--beige);
        }

        &:before {
          top: 100%;
          border-top-right-radius: 2rem;
          box-shadow: 0.7rem -0.7rem 0 0.7rem var(--beige);
        } */

        svg {
          fill: var(--black);
        }

        span:last-child {
          color: var(--black);
          font-weight: 600;
        }
      }
    }

    .copyright {
      text-align: center;

      margin-top: auto;
    }
  }
`;
