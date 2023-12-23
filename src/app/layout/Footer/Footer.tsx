import { Row } from 'react-bootstrap';

import { FooterLinks } from './FooterLinks';

export default function Footer(){
    return(
    <footer>
        <div className={"bg-SLATEBLUE text-white container-fluid py-3 px-5"}>
            <Row className={"flex justify-between"}>
                <FooterLinks></FooterLinks>
            </Row>
            <Row className={"FooterSocial d-flex justify-content-between"}>
                <div className={"divider"}>	</div>
            </Row>
        </div>

    </footer>
)}

