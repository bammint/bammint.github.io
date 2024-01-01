import React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../assets/images/projectImg.png';
import Button from './Button';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  .projectItem__desc a {
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;
export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  url = 'http://43.200.250.193:1207/',
  detail = null,
}) {
  return (
    <div>
      <ProjectItemStyles>
        <div className="projectItem__img">
          <a target='_blank' href={url}><img src={img} alt="project img" /></a>
        </div>
        <div className="projectItem__info">
          <div>
            <a target='_blank' href={url}>
              <h3 className="projectItem__title">{title}</h3>
            </a>
          </div>
          <p className="projectItem__desc">{desc}<br />
            {detail === null ? null : <a target='_blank' href={detail}>발표자료보기</a>}
          </p>
        </div>
      </ProjectItemStyles>
    </div>
  );
}
