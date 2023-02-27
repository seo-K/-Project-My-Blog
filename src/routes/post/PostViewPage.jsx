import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import PostContent from "../../components/content/PostContent";

// mock data
import { PostData } from "../../MockData";

export default function PostViewPage(props) {
  return (
    <Container>
      <h2>포스트</h2>
      <div>
        <p className="post-text">{props.id}</p>
      </div>
    </Container>
  );
}

const Container = styled.section``;
