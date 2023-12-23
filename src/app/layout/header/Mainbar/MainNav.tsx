import {
  Col,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  Row,
} from 'react-bootstrap';

import BlockContainer from '@/app/components/BlockContainer';

import { MainNavProps } from '../HeaderProps';
import MainBarItems from './BarItems';
import NavBarSearch from './MainNavSearch';

export default function MainNav({ Nav: NavItems, children }: MainNavProps) {
  return (
    <>
      <BlockContainer
        className={
          'sticky bg-prime h-[100px] justify-content-center flex flex-col'
        }
        style={{ position: 'sticky', top: 0 }}
      >
        <Col md={2} className={'border-l-white border-l h-[100px] bg-gray-800'}>
          <NavbarBrand>{children ? children : null}</NavbarBrand>
        </Col>
        <Col
          md={10}
          className='d-flex justify-content-center flex flex-col justify-content-center'
        >
          <Navbar
            className='MainBar navbar navbar-expand-lg navbar-light h-auto'
            style={{ position: 'sticky', top: 0 }}
          >
            <Row className={'w-100'}>
              <Nav className={'MainBarList mx-auto row'}>
                <Col
                  md={10}
                  className={
                    'd-flex justify-content-center flex flex-col justify-content-center'
                  }
                >
                  <NavbarCollapse className={'justify-content-center d-flex'}>
                    <MainBarItems items={NavItems} />
                  </NavbarCollapse>
                </Col>
                <Col md={2} className={'searchfield'}>
                  <NavBarSearch />
                </Col>
              </Nav>
            </Row>
          </Navbar>
        </Col>
      </BlockContainer>
    </>
  );
}
