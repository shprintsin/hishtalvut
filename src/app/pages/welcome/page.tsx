import type { Metadata } from 'next';
import {
  Col,
  Row,
} from 'react-bootstrap';

import SearchComponent from '@/app/components/SearchComponent';

import BlockContainer from '../../components/BlockContainer';

export const pageMetadata: Metadata = {
    title: "בית",
    icons: "faHome"
  }

interface WelcomeBlockProps {
        block:{title:string,
        content:string}
}

export default function WelcomeBlock() {
  const {title, content} = {
    title:"ברוכים הבאים לאתר הפורום להשתלבות", 
    content:"האתר נמצא בבניה, המודלים הם להדמיה בלבד ומתעדכנים מעת לעת, העדכונים עולים ל GitHub שלנו"}
  return (
    <>

<BlockContainer className={"border-t-white border-t bg-prime h-[100vh] justify-content-center flex flex-col"}>
<Col>
<Row>
  <Col className={"m-0 p-0 h-full bg-prime"}>
    <div className={"flex  h-full flex-col justify-center"}>
      <Row className={"flex justify-center"}>
      <Col md={6}>
        <div className={"home-hero flex flex-col space-y-8"}>
          <Row><h1 className={"text-8xl text-white font-secular fw-medium"}>{title}</h1></Row>
          <Row><p className={"lead text-white leading-9 row-gap-xl-5"}>{content}</p></Row>
          <Row></Row>
          <SearchComponent className={"form-inputs"}/>
        </div>
      </Col>
      </Row>

    </div>
    <div className='position-absolute left-0 mx-10 flex justify-content-end'>
      {/*<img src="/public/student.svg" className='h-[400px]'></img>*/}

    </div>
  </Col>
  </Row>
  </Col>

</BlockContainer>
    </> )
}
