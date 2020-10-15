import React from 'react';
import { Button, Image, Item } from 'semantic-ui-react'

const TickerNewsItem = ({ newsItem }) => {
    const {  title, description, url, publishedAt, urlToImage } = newsItem;
    return (
    <Item.Group relaxed>
        <Item>
            <Item.Image src={urlToImage} />

            <Item.Content verticalAlign='middle'>
                <Item.Header>{title}</Item.Header>
                <Item.Description>{description}</Item.Description>
                <Item.Extra>
                    <Button id="news-btn" floated='left' onClick={(e) => {
                        e.preventDefault();
                        window.location.href=`${url}`
                    }}>Read More</Button>
                </Item.Extra>
            </Item.Content>
        </Item>
    </Item.Group>
    )
}

export default TickerNewsItem;