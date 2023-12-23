import { Row } from 'react-bootstrap';

import BlockContainer from './BlockContainer';
import SectionTitle from './BlockTitle';

function HomeBlock({ children, title, background, height }) {
    return (
      <div>
        <BlockContainer className={`h-[${height}] p-5 bg-[#e1ecf6]`}>
          <SectionTitle title={title} />
          <Row className={'pt-5 px-4'}>{children}</Row>
        </BlockContainer>
      </div>
    );
  }
  export default HomeBlock;