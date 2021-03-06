import React, { useState, useEffect, useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";

import { UserContext } from "../App";

import SideMenu from "../components/nav/SideMenu"

import AccountDetails from "../components/profile/AccountDetails";
import EditProfile from "../components/profile/EditProfile";
import Security from "../components/profile/Security";

const Account = () => {
  const { route } = useParams();

  const { state } = useContext(UserContext);
  // console.log(state);

  const [value, setValue] = useState("1");

  const getRoute = () => {
    // console.log(route);
    try {
      if (route === "account-details") {
        setValue("1");
      } else if (route === "edit-details") {
        setValue("2");
      } else if (route === "password-&-security") {
        setValue("3");
      } else {
        setValue("5");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRoute();
  }, [route]);

  //   let verifyUser = async () => {
  //     try {
  //       let { data } = await axios.get("/user/details");
  //       // console.log(data.response);
  //       if (data.status) {
  //         return dispatch({ type: "USER", payload: data.response });
  //       }
  //     } catch (error) {
  //       // console.log(error)
  //       return navigate("/login");
  //     }
  //   };

  // useEffect(() => {
  //   // verifyUser(); //I have varified in navbar component just redirect if needed
  // }, []);

  return (
    <>
      {state && (
        <Container>
          <Left>
          <SideMenu />
            {/* <div className="profile-pic">
              <Avatar
                alt="Profile Pic"
                src={state ? state.profilePic : null}
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            <NavLink
              to="/account/account-details"
              onClick={(e) => setValue("1")}
            >
              Account Details
            </NavLink>
            <NavLink to="/account/edit-details" onClick={(e) => setValue("2")}>
              Edit Details
            </NavLink>
            <NavLink
              to="/account/password-&-security"
              onClick={(e) => setValue("3")}
            >
              Password & Security
            </NavLink> */}
          </Left>
          <Right>
            {value === "1" ? <AccountDetails /> : null}
            {value === "2" ? <EditProfile /> : null}
            {value === "3" ? <Security /> : null}
            {value === "5" && (
              <h4 style={{ textAlign: "center", margin: "2rem auto" }}>
                Page not found
              </h4>
            )}
          </Right>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
`;
const Left = styled.div`
  ${"" /* background: #3151b5; */}
  height: 86vh;
  width: 20%;
  margin: 2vh;
  margin-right: 1.5vw;
  ${
    "" /* display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start; */
  }
  ${
    "" /* .profile-pic {
    width: 100%;
    height: auto;
    padding: 1rem;
  }
  a {
    width: 100%;
    border: none;
    text-decoration: none;
    border-bottom: 0.5px solid #fff;
    color: #fff;
    padding: 0.5rem;
    text-align: left;
    background: #3151b5;
    transition: all 0.1s ease-in-out;
    &:hover {
      background: #2c387e;
      color: #fff;
    }
  } */
  }
`;

const Right = styled.div`
  height: 100%;
  width: 83%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export default Account;
