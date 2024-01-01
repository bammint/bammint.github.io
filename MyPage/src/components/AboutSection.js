import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import AboutImg from '../assets/images/my.png';
import SectionTitle from './SectionTitle';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="제 소개를 하겠습니다"
            heading="About Me"
          />
          {/* <PText>
            저는 방글라데시 치타공 출신의 프리랜서 웹사이트 디자이너이자 개발자입니다. 전문적인 웹사이트를 제작하고 있습니다. 나는 예술을 사랑하고 항상 내 디자인을 통해 관객에게 독특한 관점을 보여주려고 노력합니다.
          </PText> */}
          <PText>
            저는 국비지원 풀스텍 웹 개발자 양성과정을 수료한 예비 개발자입니다.<br/>경력 없는 예비 개발자이지만 현재는 개발자의 꿈을 실현하기 위해 노력중입니다.
          </PText>
          <div className="aboutSection__button">
            <Button btnText="프로젝트" btnLink="/projects" />
            <Button btnText="더 보기" btnLink="/about" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          <img className="aboutImg" src={AboutImg} alt="Img" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
