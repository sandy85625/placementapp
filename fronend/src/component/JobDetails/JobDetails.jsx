import Card from 'react-bootstrap/Card';

function JobDetails() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>company name</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">job details</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Apply</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default JobDetails;