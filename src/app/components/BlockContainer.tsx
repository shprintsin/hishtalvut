import {
  Container,
  Row,
} from 'react-bootstrap';

interface BlockContainerProps {
    style?:React.CSSProperties,
    className?:string,
    children?:React.ReactNode
    background?:string
}

function BlockContainer({style,className,children}:BlockContainerProps) {
    const rowStyle:React.CSSProperties = { ...style }; // Copy the style object
    return(
    <Container fluid className={`${className}  mx-0 px-0 w-100`}>
        <Row className={`w-100 px-0 mx-0 `} style={rowStyle}>
        {children}
        </Row>
    </Container>
    )
}

export default BlockContainer

