import { NavLink, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Map from "./Map";

// image
import UserImg from "../../assets/images/mock/user.jpg";
import PictureSvg from "../../assets/images/icon/picture.svg";

export default function Header() {
  const navigate = useNavigate();
  // const goWhere = () => {
  //   return navigate("/company/registerPost");
  // };

  return (
    <Container>
      <div className="logo">
        <Link to="/">My-Blog</Link>
      </div>
      <div className="content-wrap">
        <figure className="user-img-wrap">
          <img src={UserImg} alt="프로필 사진" />
          {/* <img src={PictureSvg} alt="프로필 사진" /> */}
          <figcaption>user Name</figcaption>
        </figure>
        <nav className="menu-container">
          <NavLink to="/" end>
            <span className="icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#9d9d9d" viewBox="0 0 30 30">
                <path d="M 15 2 A 1 1 0 0 0 14.300781 2.2851562 L 3.3925781 11.207031 A 1 1 0 0 0 3.3554688 11.236328 L 3.3183594 11.267578 L 3.3183594 11.269531 A 1 1 0 0 0 3 12 A 1 1 0 0 0 4 13 L 5 13 L 5 24 C 5 25.105 5.895 26 7 26 L 23 26 C 24.105 26 25 25.105 25 24 L 25 13 L 26 13 A 1 1 0 0 0 27 12 A 1 1 0 0 0 26.681641 11.267578 L 26.666016 11.255859 A 1 1 0 0 0 26.597656 11.199219 L 25 9.8925781 L 25 6 C 25 5.448 24.552 5 24 5 L 23 5 C 22.448 5 22 5.448 22 6 L 22 7.4394531 L 15.677734 2.2675781 A 1 1 0 0 0 15 2 z M 18 15 L 22 15 L 22 23 L 18 23 L 18 15 z" />
              </svg>
            </span>
            Dashboard
          </NavLink>
          <NavLink to="/post">
            <span className="icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#9d9d9d" viewBox="0 0 30 30">
                <path d="M23,27l-8-7l-8,7V5c0-1.105,0.895-2,2-2h12c1.105,0,2,0.895,2,2V27z" />
              </svg>
            </span>
            Post
          </NavLink>
          <NavLink to="/mypage">
            <span className="icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#9d9d9d" viewBox="0 0 30 30">
                <path d="M23,27l-8-7l-8,7V5c0-1.105,0.895-2,2-2h12c1.105,0,2,0.895,2,2V27z" />
              </svg>
            </span>
            Mypage
          </NavLink>
        </nav>
        <div className="user-area">
          <Map />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.header`
  flex-shrink: 0;
  width: 25%;
  max-width: 15rem;
  height: 100vh;

  display: flex;
  flex-direction: column;

  padding: 1rem;

  .logo {
    margin-bottom: 5rem;
  }

  .content-wrap {
    display: flex;
    flex: 1;
    flex-direction: column;

    .user-img-wrap {
      text-align: center;

      img {
        width: 7rem;
        height: 7rem;

        background-color: var(--mainYellow);

        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 1rem;
      }

      figcaption {
        font-weight: bold;
      }

      margin-bottom: 2rem;
    }

    .menu-container {
      > a {
        position: relative;

        display: flex;
        align-items: center;
        text-align: center;

        color: var(--darkGray);

        padding: 1rem;

        .icon-wrap {
          flex-shrink: 0;
          width: 1.5rem;
          height: 1.5rem;

          margin-right: 0.5rem;
        }
      }

      a.active {
        font-weight: bold;
        color: var(--black);

        &:after {
          position: absolute;
          top: 50%;
          left: 0;
          content: "";

          width: 0.5rem;
          height: 50%;
          border-radius: 0 5px 5px 0;
          background-color: var(--mainYellow);

          transform: translateY(-50%);
        }

        .icon-wrap svg {
          fill: var(--black);
        }
      }
    }

    .user-area {
      width: 100%;
      aspect-ratio: 1/1;

      margin-top: auto;
      padding: 0.5rem;
      background-color: var(--gray);

      border-radius: 10px;
      overflow: hidden;
    }
  }
`;
