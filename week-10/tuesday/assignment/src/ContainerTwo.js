import {Component} from 'react';
import './containerTwo.css'


class ContainerTwo extends Component{
    render(){
        return (
            < section className= 'containerTwo'>
                <a href= 'google.com'>Hello WatchKit</a>
                <p>Last month Apple released the anticipated WatchKit Framework 
                    for developers in the form of iOS 8.2 beta SDK release. 
                    The WatchKit framework enable the developers to create Apple Watch applications. 
                    In this article we are going to focus on the basics of getting started with the 
                    WatchKit framework and developing apps for the Apple Watch.</p>
                    <div>
                    <a href= 'google.com'>100 comments</a>
                    <a href= 'google.com'>100 likes</a>
                    </div>
            </section>
        )

    }
}
export default ContainerTwo