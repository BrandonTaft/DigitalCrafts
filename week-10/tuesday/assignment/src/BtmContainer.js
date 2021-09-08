import {Component} from 'react';
import './btmContainer.css'


class BtmContainer extends Component{
    render(){
        return (
            < section className= 'btmContainer'>
                <a href= 'google.com'>Introduction to Swift</a>
                <p>Swift is a modern programming language developed by Apple to create the next 
                    generation of iOS and OSX applications. Swift is a fairly new language and still in 
                    development but it clearly reflects the intentions and the future direction. 
                    This article will revolve around the basic concepts in the Swift language and how you can get started.</p>
                    <div>
                    <a href= 'google.com'>100 comments</a>
                    <a href= 'google.com'>100 likes</a>
                    </div>
            </section>
        )

    }
}
export default BtmContainer