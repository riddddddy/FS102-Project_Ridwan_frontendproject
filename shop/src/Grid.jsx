import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FeaturedCard from './FeaturedCard';

function Grid({ filteredIndices }) {
    return (
        <div className='mt-5'>
            <Container>
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                {/* <Row>
        <Col xs={12} md={8}>
          xs=12 md=8
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row> */}

                {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                <Row>
                    {/* <Col xs={12} md={3}>
                        <FeaturedCard />
                    </Col>
                    <Col xs={12} md={3}>
                        <FeaturedCard />
                    </Col>
                    <Col xs={12} md={3}>
                        <FeaturedCard />
                    </Col>
                    <Col xs={12} md={3}>
                        <FeaturedCard />
                    </Col> */}
                
                    {filteredIndices.map(item => {
                        return <Col xs={12} md={3} key={item.id}>
                            <FeaturedCard {...item} />
                        </Col>
                    })}


                </Row>

            </Container>
        </div>

    );
}

export default Grid;