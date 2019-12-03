import React from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderCampsite({campsite}) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments}) {
    if(comments) {
        return(
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                { comments.map(comment => {
                    return <div key={comment.id}>
                                <p>{comment.text}</p>
                                <p>-- {comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        </div>
                    })
                }
            </div>
        );
    }
    return <div/> 
}

function CampsiteInfo(props) {
    const campsite = props.campsite
    const comments = props.comments
    if(campsite && comments) {
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{campsite.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderCampsite campsite={campsite}/>
                    <RenderComments comments={comments} />
                </div>
            </div>
        );
    }
    return <div className="row"/>;
}


export default CampsiteInfo;