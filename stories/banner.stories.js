import React from 'react';
import { storiesOf } from '@storybook/react';
import MajorBanner from '../components/major.banner';
import MinorBanner from '../components/minor.banner';

storiesOf('Component | Banners/Major', module)
    .add('With Only Title', () => (
        <MajorBanner title="Banner Title"
            photo="People Outdoors/shutterstock_116403520.jpg" />
    ))
    .add('With all Text Options', () => (
        <MajorBanner title="Banner Title"
            photo="People Outdoors/shutterstock_116403520.jpg" 
            title="Banner Title"
            subtitle="Banner Subtitle"    
            body="Banner Body"
            />
    ));
    
storiesOf('Component | Banners/Minor', module)
        .add('No Pictures', () => (
            <MinorBanner 
                title="Banner Title"
                subtitle="Banner Subtitle"
                body="Banner body"
            />
        ))
        .add('With Pictures', () => (
            <MinorBanner 
                title="Banner Title"
                subtitle="Banner Subtitle"
                body="Banner body"
                leftPhoto="Products/boots/shutterstock_66842440.jpg"
                rightPhoto="Products/boots/shutterstock_1121278055.jpg"
            />
        ));