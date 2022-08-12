import { Col, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import projectImg1 from '../assets1/project-img1.png'
import projectImg2 from '../assets1/project-img2.png'
import projectImg3 from '../assets1/project-img3.png'
import { ProjectCard } from './ProjectCard';
import ColorSharp2 from '../assets1/color-sharp2.png'

export const Projects = () => {
    const projects = [
        {
            title: "Buisness Startup",
            description: "Design & Development",
            imgUrl: projectImg1
        },
        {
            title: "Buisness Startup",
            description: "Design & Development",
            imgUrl: projectImg2
        },
        {
            title: "Buisness Startup",
            description: "Design & Development",
            imgUrl: projectImg3
        }
    ]

    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col>
                        <Tab.Container>
                            <Nav variant="pills" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link href="/home">Active</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="disabled" disabled>
                                        Disabled
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>

                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-img-left' src={ColorSharp2}></img>
        </section>
    )

}