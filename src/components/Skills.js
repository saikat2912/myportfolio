import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Container,Col,Row} from 'react-bootstrap';
import meter1 from '../assets1/meter1.svg'
import meter2 from '../assets1/meter2.svg'
import meter3 from '../assets1/meter3.svg'

export const Skills =()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
    <section className="skill" id="skill">
        <Container>
            <Row>
                <Col xs={6} md={2}>
                <div className="skill-bx">
                    <h2>
                        Skills
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tempor nisl. Donec non nisl pharetra metus fringilla pellentesque. Donec et faucibus lacus. Nullam faucibus eu mi vel egestas.</p>
                </div>
                <Carousel responsive={responsive}>
                <div>
                    <img src={meter1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={meter2}/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={meter3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
                </Col>
            </Row>
        </Container>
    </section> 
    )
}