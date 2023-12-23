import { Col } from 'react-bootstrap';

import BlockContainer from '@/app/components/BlockContainer';

import DocumentList from './DocumentList';

function LibraryBlock() {
    return (
      <>
        <BlockContainer>
      
        
  <Col className="m-0 r-0">
  <DocumentList/>
  </Col>
        </BlockContainer>
  
      </>
    )
  }
  
export default LibraryBlock;