import React from 'react';
import { MdDesktopMac, MdCode } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="풀스텍" heading="web 개발" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="frontend"
            desc="저는 html, css, javascript 등을 이용하여 웹사이트의 ui/ux 디자인을 할 수 있습니다"
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="backend"
            desc="저는 java, springboot 등으로 웹사이트를 개발합니다"
          />
          {/* <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="app Dev"
            // desc="I develop mobile application. I create mobile app with eye catching ui. "
            // desc="나는 웹사이트가 독특한 모습을 갖도록 돕는 웹사이트의 ui/ux 디자인을 합니다."
          /> */}
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
