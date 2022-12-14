import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import './Home.css';

const catnames = ["Abyssinian Cat", "American Bobtail Cat Breed", "American Curl Cat Breed", "Burmese Cat",
    "Cornish Rex Cat Breed", "Egyptian Mau Cat", "Exotic Shorthair Cat Breed", "Himalayan Cat Breed",
    "Japanese Bobtail Cat Breed", "LaPerm Cat", "Manx Cat", "Ocicat Cat Breed", "Persian Cat Breed",
    "Pixiebob Cat Breed", "Ragamuffin Cat Breed", "Russian Blue Cat Breed", "Scottish Fold Cat Breed",
    "Siamese Cat Breed", "Somali Cat Breed", "Toyger Cat Breed", "Turkish Van Cat Breed"];
const caturls = ["https://upload.wikimedia.org/wikipedia/commons/9/9b/Gustav_chocolate.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/American_bobtail_2.jpg/800px-American_bobtail_2.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/1/17/American_curl_2.jpg", "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSqlv4ZMvq8yRdbGL8SEdER0x5NPbhN7ZTSw7pZdMOsEc9ADz6Z5RfhK-SLu-YH0QiWTC2ZUHyjQ_Egtzk",
    "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSPJVeZy0MT_YTg03WdQUeO5t9cuItVjTgzT7bnedfpP-PmJPbDqO-nlRy8HPvAeUbeDn-8HKBbOvtZG8g", "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR5SHh2bm15CWZ_BG65d8xS_A26-uqgTLXnt15FnxXiPKa5E9WuwTR1FQzgYTAo3E0kmgu7aVS3KxwAF7M",
    "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSvTX91_riQGjgz_s13IXllY8ewzXj0Al2Xysq5D0mG8DJO5sGBbHq53zP_OcjHsxvPnN17r26fefDLGuE", "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcS2dZM7ptAfnBQYWw24qHX7Nf6G_6XOT07YaGXDQWzFjhFGHYiCTlIObqRNdmbHnvktTH6zjoOZ2659xW4",
    "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTfzSRYVBsk6Lvo4C3myYT_HaON-vzkDK8ywg1gKNoJU5-La1hlmfAt0KSO7SSm4dWr0NGxDmtpwp-ALJ0", "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSakDTuc42qQw9wUm_ABQxF1O-4PtNifZ30teLXJuK-PbdhRAEmnXkwmUZaWMzX77ZBudhtLJJ7KQhfRLs",
    "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRkPV9HrHy41iaj_nPiZHJDlyF8rjynIHPCXOM4zYN7l9akdDNf5r9Ci7tA1fjFE8G2PiKQoBSOuBCG6JE", "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTHqF8gheck7c-oRAXxwT4fZrWTJJEXOiacQYdi9DEPg8EO9k5TiLqktx9ONon7GbyChLFWRWM6rqPC1aY",
    "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRfoPtCDzx_nbujcmT650B_pEgQdl90N21yvqmiFBtriLtRzB6ADEtlF6MzTcbD5aGeMzi_-0vTfEUz0rE", "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTkmXgtK2sG8aAC_F7-swe3At_zHJq1DmfhDISYE1J-x9iRSXopqeTr3AQBLkWxPG385Ha4kSZoBXOHZRU",
    "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSN_Q7i3BUmCABnUEPEaUW80A0CRMw5U1_ibKaDl_2yfEFA3Z0GT52I2XVc7Q_eigefeIyPSqUgTNdn9_c", "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTLLA6mRAg-9GS1UULEPBFQZssDhy81iT5uSkt_dQIdVQtHwbcxNKZfLA3j2lyZcwN853TItJk75DHpnw8",
    "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRpwu94jiP1cR8MIZZLq4u5yK6rKWfhh3JBvokVR0y7XJPUnfPiicEn9_n4Bs0PRTerGWOnLWuS9Ce-j3k", "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQgwWTl6RtTmc4fezxTXkqWRqHFee0_4pJYBdz8eLjv6JYnLuRpo_NlsyL5UZe-uw1NsbLlDaykFowkQ2o",
    "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRQDj5dRMyAnBhQfkHFKQoaL1e66QvXbz93iyyqg3IRE8o_1irEHjjhoDHpOnsNdCFSEucD6ImftsoktjY", "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR-LJXAxpyHmL4GqUdBRNkwSytOnzGMFVe5WLay77nZepwhbZWvzVIS_da6ZavZRnocr7sD9fKPssxTRxU",
    "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSlxiVmlhSsKxx0v8OQk4ypN9CwLcTJycgZUrZWm1McamceuQd0xdiXkUIfv6ITuoyBrWuHOyduYwpdZws"];

var currentfeeling = "Normal";

function VideoBar() {
    return (
        <div className='divbackground'>
            <iframe width="420" height="315" src="https://www.youtube.com/embed/bv3hXOCfdAw" className='videoplayer'></iframe>
        </div>
    )
}

function Feeling() {
    const [feeling, setFeeling] = useState("Normal");

    return (
        <Card style={{ width: '18rem' }} className='cards'>
            <Card.Body>
                <Card.Title className='center'>How are you feeling?</Card.Title>
                <Card.Text className='center'>{feeling}</Card.Text>
                <form onChange={(e) => currentfeeling = e.target.value}>
                    <input type="radio" id="happy" name="feeling" value="Happy" /> Happy <br />
                    <input type="radio" id="mid" name="feeling" value="Mid" /> Mid <br />
                    <input type="radio" id="sad" name="feeling" value="Sad" /> Sad <br />
                </form>
                <Button variant="primary" className='center' onClick={() => setFeeling(currentfeeling)}>Submit</Button>
            </Card.Body>
        </Card>
    );
}

function GridCard(props) {
    return (
        <Col>
            <Card className='cards'>
                <Card.Body>
                    <Card.Title className='center'>{props.title}</Card.Title>
                    <Card.Img variant="top" src={props.url} />
                </Card.Body>
            </Card>
            <br />
        </Col>
    );
}

function CatGrid() {
    const cols = []
    for (let i = 0; i < catnames.length; i++) {
        cols.push(<GridCard title={catnames[i]} url={caturls[i]} />)
    }
    return (
        <Row xs={1} md={4} className="catgrid">
            {cols}
        </Row>
    );
}

function Home() {
    return (
        <div>
            <br />
            <VideoBar />
            <br />
            <Feeling />
            <br />
            <CatGrid />
        </div>
    )
}

export default Home;