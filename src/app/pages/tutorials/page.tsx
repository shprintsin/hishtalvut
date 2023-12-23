import { Metadata } from 'next/types';
import { Col } from 'react-bootstrap';

import BlockContainer from '@/app/components/BlockContainer';
import { SiteConfig } from '@/app/config/siteConfig';

import SectionTitle from '../../components/BlockTitle';
import { TutorialBlock } from './components/TutorialBlock';

export const pageMetadata: Metadata = {
    title: "מדריך",
    icons: "faHome"
  }

function TutorialPage() {
 
  return (

      <BlockContainer className={'h-[650px] p-5 mx-5 flex items-stretch'}>
        <Col md={11}>
          <SectionTitle title={SiteConfig.pages.tutorial.title} />

          <TutorialBlock />
        </Col>
      </BlockContainer>

  );
}

export default TutorialPage;
