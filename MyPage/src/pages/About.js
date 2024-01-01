import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
// import Button from '../components/Button';
import AboutImg from '../assets/images/my2.png';
import AboutInfoItem from '../components/AboutInfoItem';
// import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                안녕하세요 <span>박재한</span>입니다.
              </p>
              <h2 className="about__heading">예비 개발자</h2>
              <div className="about__info">
                <PText>
                  저는 얼마 전 국비지원 풀스텍 과정을 수료했습니다.
                  비전공자인 저는 새로운 도전을 하고 있습니다.
                  <br /> <br />
                  저는 23년 7월부터 5개월 동안 900시간의 강의를 들었습니다.
                  처음의 시작은 단순한 호기심이었습니다. 하지만 강의를 들으며 흥미가 생기고 매력에 빠졌습니다. 강의를 들으며 공부하는 시간이 때론 지치고 힘들고 좌절할 때도 있었지만 그 순간을 이겨냈습니다.
                  <br /><br />
                  저의 꿈은 1인분을 할 수 있는 개발자가 되는 것입니다. 아직은 많이 부족하지만 노력하고 있습니다. 더욱더 노력하여 개발자로써 한 사람의 몫을 할 수 있는 사람이 될 것입니다.
                </PText>
              </div>
              {/* <Button btnText="Download CV" btnLink="#" /> */}
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            {/* <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['Nasirabad Govt. High School, Chattogram']}
              />
              <AboutInfoItem
                title="Collage"
                items={['BAF Shaheen College Chattogram']}
              />
              <AboutInfoItem
                title="Varsity"
                items={['University Of Chitiagong']}
              />
            </div> */}
            <div className="about__info__item">
              <h1 className="about__info__heading">스킬</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'JAVA', 'SpringBoot']}
              />
              <AboutInfoItem
                title="Design"
                items={['Figma']}
              />
            </div>
            {/* <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2010-2012"
                items={['junior developer at web Cifar']}
              />
              <AboutInfoItem
                title="2012-2016"
                items={['Front end developer at web Cifar ']}
              />
              <AboutInfoItem
                title="2016-"
                items={['Freelance web Developer']}
              />
            </div> */}
          </div>
        </div>
        {/* <ContactBanner /> */}
      </AboutPageStyles>
    </>
  );
}
