import {Col,Container} from 'react-bootstrap';
export const ProjectCard =({title,desciption,imgUrl}) =>{
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txts">
                    <h4>{title}</h4>
                    <span>{desciption}</span>
                </div>
            </div>
        </Col>
    )
}